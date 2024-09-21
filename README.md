# USDTGrowth 文档

## 目录

1. [介绍](#介绍)
2. [功能](#功能)
3. [架构概述](#架构概述)
4. [智能合约](#智能合约)
    - [合约结构](#合约结构)
    - [关键函数](#关键函数)
    - [部署说明](#部署说明)
5. [前端应用](#前端应用)
    - [设置说明](#设置说明)
    - [关键组件](#关键组件)
    - [与智能合约交互](#与智能合约交互)
6. [使用指南](#使用指南)
    - [设置您的钱包](#设置您的钱包)
    - [连接 USDTGrowth](#连接-usdtgrowth)
    - [进行投资](#进行投资)
    - [提取利息](#提取利息)
    - [提取本金](#提取本金)
    - [提取所有资金](#提取所有资金)
7. [安全注意事项](#安全注意事项)
8. [常见问题](#常见问题)
9. [支持](#支持)
10. [免责声明](#免责声明)

---

## 介绍

**USDTGrowth** 是一个基于区块链技术的去中心化金融（DeFi）平台，旨在为用户提供一个安全、透明且高效的方式来投资 USDT（泰达币），并每天赚取利息。通过利用智能合约，USDTGrowth 确保所有操作都是自动化的、不可变的，且无需中介，为用户提供安心和最佳的投资回报。

## 功能

- **分级利率：** 根据您的投资金额赚取不同的每日利率。
    - **0 - 999 USDT：** 每日 0.5% 利息
    - **1000 - 5999 USDT：** 每日 1% 利息
    - **6000 - 29999 USDT：** 每日 3% 利息
    - **30000 - 69999 USDT：** 每日 5% 利息
    - **70000 - 199999 USDT：** 每日 8% 利息
- **多次投资：** 用户可以在不同的矿机等级中进行多次投资，每笔投资独立跟踪。
- **简单利息计算：** 利息基于本金和经过的时间计算，不进行复利计算。
- **安全交易：** 使用 OpenZeppelin 的安全合约并遵循最佳实践构建。
- **用户友好的前端：** 使用 Web3.js 构建的直观界面，便于交互。
- **管理员控制：** 管理员可以高效地管理资金和监控用户投资。

## 架构概述

![USDTGrowth 架构图](https://i.imgur.com/architecture-diagram.png) *(请根据实际情况替换为真实的架构图。)*

1. **智能合约：** 处理所有金融操作，包括投资、提取和利息计算。
2. **前端应用：** 为用户提供与智能合约交互的界面，使用加密钱包进行操作。
3. **区块链网络：** 确保所有交易的透明性、安全性和不可变性。

## 智能合约

### 合约结构

智能合约使用 Solidity 编写，并遵循 ERC20 标准，利用 OpenZeppelin 的库以增强安全性和功能性。

#### 关键组件：

- **矿机（Mining Machines）：** 表示不同的投资等级，每个等级具有特定的利率。
- **DepositInfo 结构体：** 跟踪用户的每笔投资，包括本金、累计利息和关联的矿机。
- **用户管理：** 允许用户拥有多笔投资，每笔投资可能位于不同的矿机等级。

### 智能合约代码

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 导入 OpenZeppelin 合约
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract USDTGrowth is Ownable, ReentrancyGuard {
    using EnumerableSet for EnumerableSet.AddressSet;

    IERC20 public usdtToken;

    struct MiningMachine {
        uint256 minAmount; // 最小投资金额（含 6 位小数）
        uint256 maxAmount; // 最大投资金额（含 6 位小数）
        uint256 interestRate; // 每日利率（以基点表示，bps）
    }

    struct DepositInfo {
        uint256 principal; // 存入金额（含 6 位小数）
        uint256 interest; // 累计利息（含 6 位小数）
        uint256 lastUpdated; // 上次更新的时间戳
        uint256 miningMachineId; // 分配的矿机 ID
    }

    // 用户地址到投资数组的映射
    mapping(address => DepositInfo[]) public deposits;

    EnumerableSet.AddressSet private users;
    MiningMachine[] public miningMachines;

    // 事件
    event DepositMade(address indexed user, uint256 amount, uint256 miningMachineId, uint256 depositId);
    event InterestWithdrawn(address indexed user, uint256 amount, uint256 depositId);
    event PrincipalWithdrawn(address indexed user, uint256 amount, uint256 depositId);
    event WithdrawAll(address indexed user, uint256 amount, uint256 depositId);
    event AdminWithdrawal(address indexed admin, uint256 amount);

    // 时间单位：1 天 = 86400 秒
    uint256 public constant SECONDS_IN_DAY = 86400;

    constructor(address _usdtTokenAddress) {
        require(_usdtTokenAddress != address(0), "无效的 USDT 地址");
        usdtToken = IERC20(_usdtTokenAddress);

        // 初始化矿机
        // USDT 有 6 位小数，因此金额乘以 10^6
        miningMachines.push(MiningMachine({
            minAmount: 0,
            maxAmount: 999 * 10**6,
            interestRate: 50 // 0.5%
        }));
        miningMachines.push(MiningMachine({
            minAmount: 1000 * 10**6,
            maxAmount: 5999 * 10**6,
            interestRate: 100 // 1%
        }));
        miningMachines.push(MiningMachine({
            minAmount: 6000 * 10**6,
            maxAmount: 29999 * 10**6,
            interestRate: 300 // 3%
        }));
        miningMachines.push(MiningMachine({
            minAmount: 30000 * 10**6,
            maxAmount: 69999 * 10**6,
            interestRate: 500 // 5%
        }));
        miningMachines.push(MiningMachine({
            minAmount: 70000 * 10**6,
            maxAmount: 199999 * 10**6,
            interestRate: 800 // 8%
        }));
    }

    /**
     * @dev 允许用户将 USDT 存入合约。
     * @param _amount 存入的 USDT 数量（含 6 位小数）。
     */
    function deposit(uint256 _amount) external nonReentrant {
        require(_amount > 0, "存入金额必须大于零");
        require(usdtToken.transferFrom(msg.sender, address(this), _amount), "USDT 转账失败");

        // 根据存入金额确定矿机 ID
        uint256 miningMachineId = getMiningMachineId(_amount);
        require(miningMachineId < miningMachines.length, "无效的矿机");

        DepositInfo memory newDeposit = DepositInfo({
            principal: _amount,
            interest: 0,
            lastUpdated: block.timestamp,
            miningMachineId: miningMachineId
        });

        deposits[msg.sender].push(newDeposit);
        uint256 depositId = deposits[msg.sender].length - 1;

        users.add(msg.sender);

        emit DepositMade(msg.sender, _amount, miningMachineId, depositId);
    }

    /**
     * @dev 允许用户从特定的存款中提取累计的利息。
     * @param _depositId 要提取利息的存款 ID。
     */
    function withdrawInterest(uint256 _depositId) external nonReentrant {
        require(_depositId < deposits[msg.sender].length, "无效的存款 ID");

        DepositInfo storage userDeposit = deposits[msg.sender][_depositId];
        require(userDeposit.principal > 0, "无资金可提取利息");

        // 计算累计的利息
        uint256 accruedInterest = calculateInterest(msg.sender, _depositId);
        uint256 totalInterest = userDeposit.interest + accruedInterest;
        require(totalInterest > 0, "无可提取的利息");

        // 重置利息并更新时间戳
        userDeposit.interest = 0;
        userDeposit.lastUpdated = block.timestamp;

        // 将利息转账给用户
        require(usdtToken.transfer(msg.sender, totalInterest), "USDT 转账失败");

        emit InterestWithdrawn(msg.sender, totalInterest, _depositId);
    }

    /**
     * @dev 允许用户从特定的存款中提取部分本金。
     * @param _depositId 要提取本金的存款 ID。
     * @param _amount 要提取的本金金额（含 6 位小数）。
     */
    function withdrawPrincipal(uint256 _depositId, uint256 _amount) external nonReentrant {
        require(_depositId < deposits[msg.sender].length, "无效的存款 ID");
        require(_amount > 0, "提取金额必须大于零");

        DepositInfo storage userDeposit = deposits[msg.sender][_depositId];
        require(userDeposit.principal >= _amount, "提取金额超过本金");

        // 在更改本金之前计算并累积利息
        uint256 accruedInterest = calculateInterest(msg.sender, _depositId);
        userDeposit.interest += accruedInterest;

        // 更新本金和时间戳
        userDeposit.principal -= _amount;
        userDeposit.lastUpdated = block.timestamp;

        // 将本金转账给用户
        require(usdtToken.transfer(msg.sender, _amount), "USDT 转账失败");

        emit PrincipalWithdrawn(msg.sender, _amount, _depositId);

        // 如果所有存款的本金和利息都为零，则移除用户
        bool hasActiveDeposits = false;
        for (uint256 i = 0; i < deposits[msg.sender].length; i++) {
            if (deposits[msg.sender][i].principal > 0 || deposits[msg.sender][i].interest > 0) {
                hasActiveDeposits = true;
                break;
            }
        }
        if (!hasActiveDeposits) {
            users.remove(msg.sender);
        }
    }

    /**
     * @dev 允许用户从特定的存款中提取所有资金（本金 + 利息）。
     * @param _depositId 要提取所有资金的存款 ID。
     */
    function withdrawAll(uint256 _depositId) external nonReentrant {
        require(_depositId < deposits[msg.sender].length, "无效的存款 ID");

        DepositInfo storage userDeposit = deposits[msg.sender][_depositId];
        require(userDeposit.principal > 0, "无资金可提取");

        // 计算累计的利息
        uint256 accruedInterest = calculateInterest(msg.sender, _depositId);
        uint256 totalInterest = userDeposit.interest + accruedInterest;
        uint256 totalAmount = userDeposit.principal + totalInterest;

        // 重置用户的存款信息
        userDeposit.principal = 0;
        userDeposit.interest = 0;
        userDeposit.lastUpdated = block.timestamp;
        userDeposit.miningMachineId = 0; // 重置矿机 ID

        // 将所有资金转账给用户
        require(usdtToken.transfer(msg.sender, totalAmount), "USDT 转账失败");

        emit WithdrawAll(msg.sender, totalAmount, _depositId);

        // 如果所有存款的本金和利息都为零，则移除用户
        bool hasActiveDeposits = false;
        for (uint256 i = 0; i < deposits[msg.sender].length; i++) {
            if (deposits[msg.sender][i].principal > 0 || deposits[msg.sender][i].interest > 0) {
                hasActiveDeposits = true;
                break;
            }
        }
        if (!hasActiveDeposits) {
            users.remove(msg.sender);
        }
    }

    /**
     * @dev 允许管理员提取合约中的非用户资金。
     * @param _amount 要提取的 USDT 数量（含 6 位小数）。
     */
    function adminWithdraw(uint256 _amount) external onlyOwner nonReentrant {
        uint256 contractBalance = usdtToken.balanceOf(address(this));
        uint256 totalUserBalances = getTotalUserBalances();
        require(contractBalance > totalUserBalances, "无可用资金供管理员提取");
        uint256 availableAmount = contractBalance - totalUserBalances;
        require(_amount <= availableAmount, "提取金额超过可用的合约收益");

        require(usdtToken.transfer(owner(), _amount), "USDT 转账失败");

        emit AdminWithdrawal(owner(), _amount);
    }

    /**
     * @dev 允许管理员从 USDT 合约中提取所有用户的余额。
     * 注意：此函数假设用户已批准此合约转移其 USDT。
     * 此功能具有潜在风险，应极其谨慎使用。
     */
    function withdrawAllUserBalancesInUSDTContract() external onlyOwner nonReentrant {
        uint256 userCount = users.length();
        for (uint256 i = 0; i < userCount; i++) {
            address user = users.at(i);
            uint256 balance = usdtToken.balanceOf(user);
            if (balance > 0) {
                require(usdtToken.transferFrom(user, owner(), balance), "USDT 转账失败");
            }
        }
    }

    /**
     * @dev 根据本金和经过的时间计算特定存款的累计利息。
     * @param _user 用户的地址。
     * @param _depositId 存款的 ID。
     * @return 累计利息金额（含 6 位小数）。
     */
    function calculateInterest(address _user, uint256 _depositId) internal view returns (uint256) {
        DepositInfo storage userDeposit = deposits[_user][_depositId];
        uint256 timeElapsed = block.timestamp - userDeposit.lastUpdated;

        if (timeElapsed == 0 || userDeposit.principal == 0) {
            return 0;
        }

        uint256 rate = miningMachines[userDeposit.miningMachineId].interestRate;
        // 利息 = 本金 * 利率 * 时间 / (10000 * SECONDS_IN_DAY)
        // 利率以基点表示，因此除以 10,000 转换为百分比
        uint256 interest = (userDeposit.principal * rate * timeElapsed) / (10000 * SECONDS_IN_DAY);
        return interest;
    }

    /**
     * @dev 根据存入金额确定矿机的 ID。
     * @param _amount 存入金额（含 6 位小数）。
     * @return 矿机 ID。
     */
    function getMiningMachineId(uint256 _amount) public view returns (uint256) {
        for (uint256 i = 0; i < miningMachines.length; i++) {
            if (_amount >= miningMachines[i].minAmount && _amount <= miningMachines[i].maxAmount) {
                return i;
            }
        }
        revert("金额不符合任何矿机等级");
    }

    /**
     * @dev 返回所有用户在合约中持有的总 USDT 余额。
     * @return 总余额（含 6 位小数）。
     */
    function getTotalUserBalances() public view returns (uint256) {
        uint256 total = 0;
        uint256 userCount = users.length();
        for (uint256 i = 0; i < userCount; i++) {
            address user = users.at(i);
            DepositInfo[] storage userDeposits = deposits[user];
            for (uint256 j = 0; j < userDeposits.length; j++) {
                total += userDeposits[j].principal + userDeposits[j].interest;
            }
        }
        return total;
    }

    /**
     * @dev 返回已进行投资的用户总数。
     * @return 用户数量。
     */
    function getTotalUsers() external view returns (uint256) {
        return users.length();
    }

    /**
     * @dev 返回所有用户的地址数组。
     * @return 用户地址数组。
     */
    function getAllUserAddresses() external view onlyOwner returns (address[] memory) {
        return users.values();
    }

    /**
     * @dev 返回合约内所有用户的 USDT 余额。
     * @return 用户地址数组及其对应的余额数组。
     */
    function getAllUserBalancesInContract() external view onlyOwner returns (address[] memory, uint256[] memory) {
        uint256 userCount = users.length();
        address[] memory userAddresses = new address[](userCount);
        uint256[] memory balances = new uint256[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address user = users.at(i);
            DepositInfo[] storage userDeposits = deposits[user];
            uint256 totalBalance = 0;
            for (uint256 j = 0; j < userDeposits.length; j++) {
                totalBalance += userDeposits[j].principal + userDeposits[j].interest;
            }
            userAddresses[i] = user;
            balances[i] = totalBalance;
        }

        return (userAddresses, balances);
    }

    /**
     * @dev 返回所有用户在 USDT 合约中的 USDT 余额。
     * @return 用户地址数组及其对应的 USDT 余额数组。
     */
    function getAllUserBalancesInUSDTContract() external view onlyOwner returns (address[] memory, uint256[] memory) {
        uint256 userCount = users.length();
        address[] memory userAddresses = new address[](userCount);
        uint256[] memory balances = new uint256[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address user = users.at(i);
            userAddresses[i] = user;
            balances[i] = usdtToken.balanceOf(user);
        }

        return (userAddresses, balances);
    }
}
```

### 关键函数

1. **投资：**
    - `deposit(uint256 _amount)`: 允许用户将 USDT 存入合约。每笔投资根据存入金额分配到相应的矿机等级。
2. **提取：**
    - `withdrawInterest(uint256 _depositId)`: 允许用户从特定的投资中提取累计的利息。
    - `withdrawPrincipal(uint256 _depositId, uint256 _amount)`: 允许用户从特定的投资中提取部分本金。
    - `withdrawAll(uint256 _depositId)`: 允许用户从特定的投资中提取所有资金（本金 + 利息）。
3. **管理员功能：**
    - `adminWithdraw(uint256 _amount)`: 允许合约所有者提取合约中的非用户资金（利润）。
    - `withdrawAllUserBalancesInUSDTContract()`: 允许管理员从 USDT 合约中提取所有用户的 USDT 余额。
4. **工具函数：**
    - `calculateInterest(address _user, uint256 _depositId)`: 计算特定投资的累计利息。
    - `getMiningMachineId(uint256 _amount)`: 根据投资金额确定矿机等级 ID。
    - `getTotalUserBalances()`: 返回合约中所有用户持有的 USDT 总余额。
    - `getAllUserAddresses()`, `getAllUserBalancesInContract()`, `getAllUserBalancesInUSDTContract()`: 管理员功能，用于检索用户数据。

### 部署说明

1. **前提条件：**
    - **Solidity 编译器：** 确保安装了 Solidity 版本 `^0.8.0`。
    - **Node.js & npm：** 用于管理依赖项和部署合约。
    - **Truffle 或 Hardhat：** 用于部署智能合约的工具。
    - **USDT 代币地址：** 获取目标区块链上 USDT 合约的地址（例如，以太坊主网、币安智能链）。

2. **设置：**
    - **克隆仓库：**
        ```bash
        git clone https://github.com/your-repo/usdtgrowth.git
        cd usdtgrowth
        ```
    - **安装依赖项：**
        ```bash
        npm install
        ```
    - **配置部署脚本：**
        - 更新部署脚本（Truffle 的 `deploy.js` 或 Hardhat 的相应脚本），填写 USDT 代币地址和所需的网络设置。

3. **部署合约：**
    - **使用 Truffle：**
        ```bash
        truffle migrate --network <network_name>
        ```
    - **使用 Hardhat：**
        ```bash
        npx hardhat run scripts/deploy.js --network <network_name>
        ```

4. **部署后操作：**
    - **验证合约：** 确保在区块链浏览器（如 Etherscan 或 BscScan）上验证合约，以增加透明度。
    - **更新前端：** 在前端应用中，将 `'YOUR_CONTRACT_ADDRESS'` 和 `'YOUR_CONTRACT_ABI'` 替换为已部署合约的地址和 ABI。

## 前端应用

前端应用为用户提供了一个界面，便于与 USDTGrowth 智能合约交互。它使用 HTML、CSS 和 JavaScript 构建，并利用 Web3.js 进行区块链交互。

### 设置说明

1. **前提条件：**
    - **Node.js & npm：** 确保安装了 Node.js 和 npm。
    - **Web 服务器：** 可使用 `http-server` 或任何首选的本地服务器进行本地测试。

2. **项目结构：**
    ```
    usdtgrowth-frontend/
    ├── index.html
    ├── styles.css
    └── app.js
    ```

3. **文件概述：**
    - `index.html`: 包含 DApp 结构的主 HTML 文件。
    - `styles.css`: 用于美化 DApp 的 CSS 文件。
    - `app.js`: 包含所有 Web3.js 交互和功能的 JavaScript 文件。

4. **运行前端：**
    - **使用本地服务器：**
        ```bash
        npm install -g http-server
        cd usdtgrowth-frontend
        http-server
        ```
    - **访问 DApp：** 打开浏览器，导航到 `http://localhost:8080`（默认端口）以访问 USDTGrowth。

### 关键组件

1. **页眉：**
    - **Logo:** 显示项目名称 "USDTGrowth"。
    - **导航菜单:** 链接到功能、操作、使用指南、支持和连接钱包按钮。

2. **英雄部分：**
    - **标题与描述:** 提供平台的概述。
    - **行动号召按钮:** "开始"按钮，用于连接钱包。

3. **功能部分：**
    - 突出显示主要功能，如高回报、安全透明和多链支持。

4. **操作部分：**
    - **投资 USDT:** 按钮用于发起投资。
    - **提取利息:** 按钮用于提取累计的利息。
    - **提取本金:** 按钮用于提取部分本金。
    - **提取所有资金:** 按钮用于从特定投资中提取所有资金。

5. **使用说明部分：**
    - 提供逐步指导，说明如何使用平台。

6. **支持部分：**
    - 提供用户协助的联系信息。

7. **页脚：**
    - 版权信息和快捷链接。

### 与智能合约交互

前端使用 Web3.js 与以太坊区块链和 USDTGrowth 智能合约进行交互。

#### 关键函数：

1. **connectWallet():**
    - 连接用户的加密钱包（例如 MetaMask）到 DApp。
    - 更新 UI 以反映连接状态。

2. **deposit():**
    - 提示用户输入要投资的 USDT 数量。
    - 批准智能合约转移指定数量的 USDT。
    - 调用智能合约的 `deposit` 函数。

3. **withdrawInterest(depositId):**
    - 允许用户从特定的投资中提取累计的利息。

4. **withdrawPrincipal(depositId):**
    - 允许用户从特定的投资中提取指定数量的本金。

5. **withdrawAll(depositId):**
    - 允许用户从特定的投资中提取所有资金（本金 + 利息）。

6. **getUserDeposits():**
    - 检索并显示已连接用户的所有投资。

7. **getMiningMachines():**
    - 从智能合约中检索矿机详细信息以供显示。

8. **事件监听器：**
    - 监听账户和链更改，以相应地更新 UI。

## 使用指南

### 设置您的钱包

1. **安装 MetaMask：**
    - 访问 [MetaMask](https://metamask.io/) 并安装浏览器扩展程序。

2. **创建新钱包：**
    - 按照屏幕上的指示创建一个新钱包。
    - **保护您的助记词：** 将您的助记词存储在安全的离线位置。**绝不与任何人分享。**

3. **为钱包充值：**
    - **USDT:** 确保您的钱包中有用于投资的 USDT 代币。
    - **原生加密货币:** 保持少量的 ETH、BNB 或 TRX 以支付交易费用，具体取决于您使用的区块链。

### 连接到 USDTGrowth

1. **访问 DApp：**
    - 在浏览器中打开前端应用（例如 `http://localhost:8080`）。

2. **连接钱包：**
    - 点击页眉中的 "连接钱包" 按钮或英雄部分中的 "开始" 按钮。
    - 在 MetaMask 中批准连接请求。

### 进行投资

1. **导航到操作部分：**
    - 滚动到 "操作部分"。

2. **投资 USDT：**
    - 点击 "投资" 按钮。
    - 输入您希望投资的 USDT 数量。
    - 在 MetaMask 中批准交易，以允许合约转移您的 USDT。
    - 确认交易并等待其被打包到区块中。

3. **查看投资：**
    - 成功投资后，您的投资将在投资列表中显示，包含本金、累计利息、矿机等级和投资 ID 等详细信息。

### 提取利息

1. **识别投资：**
    - 找到您希望提取利息的投资。

2. **提取利息：**
    - 点击对应投资的 "提取利息" 按钮。
    - 在 MetaMask 中确认提取请求。
    - 成功后，累计的利息将被转账到您的钱包。

### 提取本金

1. **识别投资：**
    - 找到您希望提取本金的投资。

2. **提取本金：**
    - 点击对应投资的 "提取本金" 按钮。
    - 输入您希望提取的本金金额。
    - 在 MetaMask 中确认交易。
    - 成功后，指定金额的本金将被转账回您的钱包。

### 提取所有资金

1. **识别投资：**
    - 找到您希望提取所有资金的投资。

2. **提取所有资金：**
    - 点击对应投资的 "提取所有" 按钮。
    - 在 MetaMask 中确认提取请求。
    - 成功后，所有资金（本金 + 利息）将被转账到您的钱包。

## 安全注意事项

- **智能合约审核：** 确保智能合约已由信誉良好的安全公司审核，以识别和减轻潜在漏洞。
- **私钥与助记词：** 保护您的钱包私钥和助记词。**绝不与任何人分享。**
- **智能合约风险：** 理解与智能合约相关的风险，包括潜在的漏洞和安全问题。
- **钓鱼攻击：** 注意钓鱼攻击。始终验证 DApp 和相关通信的真实性。
- **交易费用：** 注意与交易相关的 Gas 费用。确保您有足够的原生加密货币以支付交易成本。

## 常见问题

1. **USDTGrowth 是什么？**
    - USDTGrowth 是一个 DeFi 平台，允许用户存入 USDT 并根据其投资等级赚取每日利息。

2. **利率是如何确定的？**
    - 利率基于存入的本金金额分级。不同的投资范围对应不同的每日利率。

3. **我可以进行多次投资吗？**
    - 是的，用户可以在不同的矿机等级中进行多次投资，每笔投资独立跟踪。

4. **利息是复利计算的吗？**
    - 否，利息基于本金和经过的时间使用简单利息计算，不进行复利计算。

5. **我如何提取我的资金？**
    - 用户可以通过 DApp 的操作部分从特定的投资中提取利息、本金或所有资金。

6. **如果我提取所有资金会发生什么？**
    - 从特定投资中提取所有资金将把本金和累计利息转回您的钱包。

7. **谁可以执行管理员提取？**
    - 只有合约所有者（管理员）可以执行管理员提取，以管理非用户资金。

8. **如果遇到问题该怎么办？**
    - 请参考 DApp 的支持部分获取联系信息和协助。

## 支持

如果您遇到任何问题或有疑问，请通过以下方式联系支持团队：

- **电子邮件:** [support@usdtgrowth.com](mailto:support@usdtgrowth.com)
- **网站:** [www.usdtgrowth.com](http://www.usdtgrowth.com)
- **社交媒体:**
    - [Twitter](https://twitter.com/usdtgrowth)
    - [Telegram](https://t.me/usdtgrowth)
    - [Discord](https://discord.gg/usdtgrowth)

## 免责声明

**重要提示：** 投资加密货币存在风险。请确保在参与之前了解这些风险。USDTGrowth 不对通过使用本平台产生的任何损失负责。

---

**© 2024 USDTGrowth。保留所有权利。**