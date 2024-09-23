# **USDTDeposit 智能合约功能与前端使用文档**

根据您提供的 **USDTDeposit** 智能合约代码，以下文档详细介绍了合约的功能，分别针对 **用户** 和 **管理员**，以及 **前端集成** 的使用方法。文档内容涵盖合约功能说明、前端交互方法、示例代码以及最佳实践，旨在帮助您和您的团队高效地使用和集成该智能合约。

---

## **目录**

1. [合约概述](#合约概述)
2. [用户功能](#用户功能)
    - [1. 存款 USDT](#1-存款-usdt)
    - [2. 查看存款记录](#2-查看存款记录)
    - [3. 提取利息](#3-提取利息)
    - [4. 提取本金](#4-提取本金)
    - [5. 提取所有资金](#5-提取所有资金)
3. [管理员功能](#管理员功能)
    - [1. 提取合约资金](#1-提取合约资金)
    - [2. 更新矿机寿命](#2-更新矿机寿命)
4. [前端集成指南](#前端集成指南)
    - [1. 连接钱包](#1-连接钱包)
    - [2. 显示用户存款记录](#2-显示用户存款记录)
    - [3. 执行存款操作](#3-执行存款操作)
    - [4. 执行提取操作](#4-执行提取操作)
    - [5. 管理员界面](#5-管理员界面)
5. [示例代码](#示例代码)
    - [1. 前端 React 组件示例](#1-前端-react-组件示例)
6. [安全性与最佳实践](#安全性与最佳实践)
7. [常见问题解答](#常见问题解答)
8. [总结](#总结)

---

## **1. 合约概述**

**USDTDeposit** 是一个基于 Solidity 的智能合约，允许用户存入 USDT 并选择不同类型的矿机进行投资。每笔存款关联一个独立的存款记录（`Deposit`），用户可以多次存入 USDT，每次存款都可以选择不同的矿机类型。合约还提供了管理员功能，用于管理资金和矿机参数。

**主要功能：**

- **用户功能**：存款、查看存款、提取利息、本金及所有资金。
- **管理员功能**：提取合约资金、更新矿机寿命。
- **前端集成**：与智能合约交互的用户界面，实现功能的可视化操作。

---

## **2. 用户功能**

### **1. 存款 USDT**

**描述**：用户可以将 USDT 存入合约，并根据存款金额自动选择相应的矿机类型进行投资。每次存款生成一个唯一的 `depositId`，用于后续的操作。

**合约函数**：`deposit(uint256 _amount)`

- `_amount`：存入的 USDT 数量（基于合约的 `decimals`）。

**要求**：

- 存款金额必须大于零。
- 用户需在 USDT 合约中调用 `approve`，授权本合约至少存入 `_amount` 的 USDT。

**效果**：

- 确定矿机类型 ID。
- 累积之前的利息。
- 更新用户的存款记录。
- 转移 USDT 从用户到合约。
- 触发 `DepositMade` 事件，包含用户地址、存款金额、矿机ID和 `depositId`。

**事件**：

```solidity
event DepositMade(address indexed user, uint256 amount, uint256 miningMachineId, uint256 depositId);
```

### **2. 查看存款记录**

**描述**：用户可以查看自己所有的存款记录，包括本金、利息、矿机类型、寿命及剩余寿命。

**合约函数**：`getDepositDetails(address _user, uint256 _depositId)`

- `_user`：用户地址。
- `_depositId`：存款记录的唯一标识 ID。

**返回值**：

- `principal`：用户的本金金额（基于 `decimals`）。
- `interest`：用户的累积利息（基于 `decimals`）。
- `timestamp`：上次更新的时间戳。
- `miningMachineName`：分配的矿机名称。
- `lifespan`：矿机寿命，单位为天。
- `remainingLifespan`：矿机剩余寿命，单位为天。

**前端调用示例**：

```javascript
const depositDetails = await contract.getDepositDetails(userAddress, depositId);
console.log(depositDetails);
```

### **3. 提取利息**

**描述**：用户可以提取指定存款记录的累积利息。提取后，利息余额会被重置。

**合约函数**：`withdrawInterest(uint256 _depositId)`

- `_depositId`：存款记录的 ID。

**要求**：

- 存款的本金必须大于零。
- 本金尚未被提取。

**效果**：

- 计算并提取用户的利息，并重置利息余额。
- 更新时间戳。
- 将利息转移给用户。
- 触发 `InterestWithdrawn` 事件。

**事件**：

```solidity
event InterestWithdrawn(address indexed user, uint256 depositId, uint256 amount);
```

### **4. 提取本金**

**描述**：用户在矿机寿命到期后，可以提取特定存款记录的部分本金。

**合约函数**：`withdrawPrincipal(uint256 _depositId, uint256 _amount)`

- `_depositId`：存款记录的 ID。
- `_amount`：要提取的本金金额（基于 `decimals`）。

**要求**：

- 提取金额不得超过存款本金。
- 只能在矿机寿命到期后进行提取。

**效果**：

- 减少本金。
- 更新时间戳。
- 将本金转移给用户。
- 触发 `PrincipalWithdrawn` 事件。

**事件**：

```solidity
event PrincipalWithdrawn(address indexed user, uint256 depositId, uint256 amount);
```

### **5. 提取所有资金**

**描述**：用户可以在矿机寿命到期后，提取特定存款记录的所有资金（本金 + 利息）。

**合约函数**：`withdrawAll(uint256 _depositId)`

- `_depositId`：存款记录的 ID。

**要求**：

- 存款的本金必须大于零。
- 矿机寿命必须已到期。

**效果**：

- 计算并提取用户的本金和利息。
- 重置存款记录。
- 将总金额转移给用户。
- 触发 `WithdrawAll` 事件。

**事件**：

```solidity
event WithdrawAll(address indexed user, uint256 depositId, uint256 amount);
```

---

## **3. 管理员功能**

### **1. 提取合约资金**

**描述**：管理员可以从合约中提取 USDT 资金。提取金额的 8% 会转给指定的 `feeRecipient` 地址，剩余的 92% 转给管理员。

**合约函数**：`adminWithdraw(uint256 _amount)`

- `_amount`：提取的 USDT 数量（基于合约的 `decimals`）。

**要求**：

- 只能由管理员（合约所有者）调用。
- 提取金额不得超过合约的 USDT 余额。

**效果**：

- 计算 8% 的手续费和 92% 的归管理员。
- 将 8% 转移给 `feeRecipient`。
- 将 92% 转移给管理员。
- 触发 `AdminWithdrawal` 事件。

**事件**：

```solidity
event AdminWithdrawal(address indexed admin, uint256 amount);
```

**备注**：在您的合约代码中，确保只有一个 `adminWithdraw` 函数定义，避免函数重定义错误。

### **2. 更新矿机寿命**

**描述**：管理员可以更新特定矿机类型的寿命，单位为天。

**合约函数**：`updateMiningMachineLifespan(uint256 _miningMachineId, uint256 _newLifespan)`

- `_miningMachineId`：矿机类型 ID。
- `_newLifespan`：新的矿机寿命，单位为天。

**要求**：

- 矿机类型 ID 必须有效（小于矿机数组长度）。
- 新寿命必须大于零。

**效果**：

- 更新指定矿机类型的寿命。
- 触发 `MiningMachineLifespanUpdated` 事件。

**事件**：

```solidity
event MiningMachineLifespanUpdated(uint256 miningMachineId, uint256 newLifespan);
```

---

## **4. 前端集成指南**

为了实现与 **USDTDeposit** 智能合约的交互，以下是前端集成的详细指南。本文档假设您使用的是 **React.js** 和 **Ethers.js** 进行开发。

### **1. 连接钱包**

**步骤**：

1. **检测 MetaMask**：确保用户的浏览器安装了 MetaMask 或其他支持的以太坊钱包。
2. **请求账户访问**：用户点击“连接钱包”按钮后，前端请求用户授权。
3. **初始化合约**：连接成功后，前端获取用户的账户地址和初始化与合约的连接。

**示例代码**：

```javascript
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import USDTDepositABI from './USDTDepositABI.json'; // 替换为实际 ABI 文件路径

const USDTDepositDashboard = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [decimals, setDecimals] = useState(18); // 默认值
    const [userDeposits, setUserDeposits] = useState([]);
    const [miningMachines, setMiningMachines] = useState([]);
    const [ownerAddress, setOwnerAddress] = useState(null);

    const contractAddress = '0xYourContractAddressHere'; // 替换为您的合约地址

    useEffect(() => {
        if (window.ethereum) {
            const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(tempProvider);
        } else {
            alert('请安装 MetaMask!');
        }
    }, []);

    const connectWallet = async () => {
        if (!provider) return;
        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
            const tempSigner = provider.getSigner();
            setSigner(tempSigner);
            const tempContract = new ethers.Contract(contractAddress, USDTDepositABI, tempSigner);
            setContract(tempContract);

            // 获取 decimals
            const contractDecimals = await tempContract.decimals();
            setDecimals(contractDecimals);

            // 获取合约所有者地址
            const owner = await tempContract.owner();
            setOwnerAddress(owner);

            // 获取矿机类型
            const machineCount = await tempContract.miningMachines.length;
            let machines = [];
            for (let i = 0; i < machineCount; i++) {
                const machine = await tempContract.getMiningMachineDetails(i);
                machines.push(machine);
            }
            setMiningMachines(machines);
        } catch (error) {
            console.error("连接钱包失败:", error);
            alert('连接钱包失败，请重试。');
        }
    };

    return (
        <div>
            <header>
                <h1>USDTGrowth</h1>
                {!account ? (
                    <button onClick={connectWallet}>连接钱包</button>
                ) : (
                    <p>已连接: {account.slice(0, 6)}...{account.slice(-4)}</p>
                )}
            </header>
            {/* 其他组件 */}
        </div>
    );
};

export default USDTDepositDashboard;
```

### **2. 显示用户存款记录**

**描述**：用户登录后，前端会展示所有的存款记录，包括 `depositId`、本金、累积利息、矿机名称、寿命及剩余寿命。

**实现步骤**：

1. **获取用户存款**：调用合约的 `getUserDeposits` 函数，获取所有存款记录。
2. **格式化数据**：根据 `decimals` 格式化本金和利息金额。
3. **展示记录**：在 UI 中展示每笔存款的详细信息，并为每笔存款分配对应的 `depositId`。

**示例代码**：

```javascript
const fetchUserDeposits = async () => {
    if (!contract || !account) return;
    try {
        const deposits = await contract.deposits(account);
        setUserDeposits(deposits);
    } catch (error) {
        console.error("获取存款记录失败:", error);
        alert('获取存款记录失败，请重试。');
    }
};

useEffect(() => {
    if (contract && account) {
        fetchUserDeposits();
        // 设置定时器每分钟更新一次
        const interval = setInterval(() => {
            fetchUserDeposits();
        }, 60000);
        return () => clearInterval(interval);
    }
}, [contract, account]);

const calculateRemainingLifespan = (deposit) => {
    if (deposit.timestamp === 0) return 0;
    const depositEndTime = deposit.timestamp + (miningMachines[deposit.miningMachineId]?.lifespan || 0) * 86400; // 1天 = 86400秒
    const remaining = Math.floor((depositEndTime - Date.now() / 1000) / 86400);
    return remaining > 0 ? remaining : 0;
};

return (
    <div>
        {/* 连接钱包部分 */}
        {account && (
            <div>
                <h2>我的投资记录</h2>
                {userDeposits.length === 0 ? (
                    <p>暂无存款记录。</p>
                ) : (
                    userDeposits.map((deposit, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                            <p>存款ID: {index}</p>
                            <p>本金: {ethers.utils.formatUnits(deposit.principal, decimals)} USDT</p>
                            <p>累积利息: {ethers.utils.formatUnits(deposit.interest, decimals)} USDT</p>
                            <p>矿机名称: {deposit.miningMachineId < miningMachines.length ? miningMachines[deposit.miningMachineId].machineName : "Unknown"}</p>
                            <p>矿机寿命: {miningMachines[deposit.miningMachineId]?.lifespan || 0} 天</p>
                            <p>剩余寿命: {calculateRemainingLifespan(deposit)} 天</p>
                            <button onClick={() => withdrawInterest(index)}>提取利息</button>
                            <button onClick={() => withdrawPrincipal(index)}>提取本金</button>
                            <button onClick={() => withdrawAll(index)}>提取所有</button>
                        </div>
                    ))
                )}
            </div>
        )}
    </div>
);
```

### **3. 执行存款操作**

**描述**：用户可以选择存入一定数量的 USDT，并选择对应的矿机类型进行投资。每次存款生成一个唯一的 `depositId`。

**实现步骤**：

1. **用户输入存款金额**：通过表单或输入框获取用户输入的 USDT 数量。
2. **选择矿机类型**：根据存款金额自动分配矿机类型，或允许用户手动选择。
3. **调用 `deposit` 函数**：使用 `ethers.js` 调用合约的 `deposit` 函数，传入存款金额。
4. **处理交易结果**：等待交易确认后，更新前端显示。

**示例代码**：

```javascript
const handleDeposit = async () => {
    const amount = prompt("请输入要存入的本金金额（USDT）:");
    if (!amount) return;
    try {
        const parsedAmount = ethers.utils.parseUnits(amount, decimals);
        const tx = await contract.deposit(parsedAmount);
        await tx.wait();
        fetchUserDeposits();
        alert('存款成功');
    } catch (error) {
        console.error("存款失败:", error);
        alert('存款失败，请检查输入或重试。');
    }
};

return (
    <div>
        {/* 存款按钮 */}
        {account && (
            <div>
                <button onClick={handleDeposit}>存入 USDT</button>
                {/* 显示存款记录 */}
            </div>
        )}
    </div>
);
```

### **4. 执行提取操作**

**描述**：用户可以针对特定的 `depositId` 进行利息提取、本金提取或提取所有资金。

**实现步骤**：

1. **选择存款记录**：用户在界面上选择要操作的存款记录。
2. **执行提取操作**：点击相应的提取按钮，调用合约的提取函数。
3. **处理交易结果**：等待交易确认后，更新前端显示。

**示例代码**：

```javascript
// 提取利息
const withdrawInterest = async (depositId) => {
    try {
        const tx = await contract.withdrawInterest(depositId);
        await tx.wait();
        fetchUserDeposits();
        alert('利息提取成功');
    } catch (error) {
        console.error("利息提取失败:", error);
        alert('利息提取失败，请检查状态或重试。');
    }
};

// 提取本金
const withdrawPrincipal = async (depositId) => {
    const amount = prompt("请输入要提取的本金金额（USDT）:");
    if (!amount) return;
    try {
        const parsedAmount = ethers.utils.parseUnits(amount, decimals);
        const tx = await contract.withdrawPrincipal(depositId, parsedAmount);
        await tx.wait();
        fetchUserDeposits();
        alert('本金提取成功');
    } catch (error) {
        console.error("本金提取失败:", error);
        alert('本金提取失败，请检查状态或重试。');
    }
};

// 提取所有资金
const withdrawAll = async (depositId) => {
    try {
        const tx = await contract.withdrawAll(depositId);
        await tx.wait();
        fetchUserDeposits();
        alert('全部资金提取成功');
    } catch (error) {
        console.error("全部资金提取失败:", error);
        alert('全部资金提取失败，请检查状态或重试。');
    }
};
```

### **5. 管理员界面**

**描述**：管理员可以通过前端界面执行提取合约资金和更新矿机寿命的操作。

**实现步骤**：

1. **权限验证**：确保只有管理员（合约所有者）能够访问管理员界面。
2. **提取资金**：输入提取金额，调用 `adminWithdraw` 函数。
3. **更新矿机寿命**：选择矿机类型并输入新的寿命，调用 `updateMiningMachineLifespan` 函数。

**示例代码**：

```javascript
// 提取合约资金
const handleAdminWithdraw = async () => {
    const amount = prompt("请输入要提取的 USDT 数量（含小数）:");
    if (!amount) return;
    try {
        const parsedAmount = ethers.utils.parseUnits(amount, decimals);
        const tx = await contract.adminWithdraw(parsedAmount);
        await tx.wait();
        alert('资金提取成功');
    } catch (error) {
        console.error("资金提取失败:", error);
        alert('资金提取失败，请检查权限或重试。');
    }
};

// 更新矿机寿命
const handleUpdateLifespan = async () => {
    const miningMachineId = prompt("请输入矿机类型 ID:");
    const newLifespan = prompt("请输入新的寿命（天）:");
    if (miningMachineId === null || newLifespan === null) return;
    try {
        const tx = await contract.updateMiningMachineLifespan(parseInt(miningMachineId), parseInt(newLifespan));
        await tx.wait();
        alert('矿机寿命更新成功');
    } catch (error) {
        console.error("矿机寿命更新失败:", error);
        alert('矿机寿命更新失败，请检查输入或重试。');
    }
};

return (
    <div>
        {/* 其他用户界面 */}
        {account === ownerAddress && (
            <div>
                <h2>管理员功能</h2>
                <button onClick={handleAdminWithdraw}>提取合约资金</button>
                <button onClick={handleUpdateLifespan}>更新矿机寿命</button>
            </div>
        )}
    </div>
);
```

**注意**：需要在前端获取合约所有者地址，并与当前用户地址进行比较，确保只有管理员能够访问此部分。

---

## **5. 示例代码**

### **1. 前端 React 组件示例**

以下是一个完整的 **React.js** 组件示例，展示如何与 **USDTDeposit** 智能合约进行交互，实现用户和管理员的功能。

```javascript
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import USDTDepositABI from './USDTDepositABI.json'; // 替换为实际 ABI 文件路径

const USDTDepositDashboard = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [decimals, setDecimals] = useState(6); // USDT通常是6位小数
    const [userDeposits, setUserDeposits] = useState([]);
    const [miningMachines, setMiningMachines] = useState([]);
    const [ownerAddress, setOwnerAddress] = useState(null);

    const contractAddress = '0xYourContractAddressHere'; // 替换为您的合约地址

    useEffect(() => {
        if (window.ethereum) {
            const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(tempProvider);
        } else {
            alert('请安装 MetaMask!');
        }
    }, []);

    const connectWallet = async () => {
        if (!provider) return;
        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            setAccount(accounts[0]);
            const tempSigner = provider.getSigner();
            setSigner(tempSigner);
            const tempContract = new ethers.Contract(contractAddress, USDTDepositABI, tempSigner);
            setContract(tempContract);

            // 获取 decimals
            const contractDecimals = await tempContract.decimals();
            setDecimals(contractDecimals);

            // 获取合约所有者地址
            const owner = await tempContract.owner();
            setOwnerAddress(owner);

            // 获取矿机类型
            const machineCount = await tempContract.miningMachines.length;
            let machines = [];
            for (let i = 0; i < machineCount; i++) {
                const machine = await tempContract.getMiningMachineDetails(i);
                machines.push(machine);
            }
            setMiningMachines(machines);
        } catch (error) {
            console.error("连接钱包失败:", error);
            alert('连接钱包失败，请重试。');
        }
    };

    const fetchUserDeposits = async () => {
        if (!contract || !account) return;
        try {
            const deposits = await contract.deposits(account);
            setUserDeposits(deposits);
        } catch (error) {
            console.error("获取存款记录失败:", error);
            alert('获取存款记录失败，请重试。');
        }
    };

    useEffect(() => {
        if (contract && account) {
            fetchUserDeposits();
            // 设置定时器每分钟更新一次
            const interval = setInterval(() => {
                fetchUserDeposits();
            }, 60000);
            return () => clearInterval(interval);
        }
    }, [contract, account]);

    useEffect(() => {
        if (contract && account) {
            // 监听 DepositMade 事件
            const filter = contract.filters.DepositMade(account, null, null, null);
            contract.on(filter, (user, amount, miningMachineId, depositId) => {
                console.log(`新存款 ID: ${depositId}`);
                fetchUserDeposits();
            });

            return () => {
                contract.removeAllListeners(filter);
            };
        }
    }, [contract, account]);

    const handleDeposit = async () => {
        const amount = prompt("请输入要存入的本金金额（USDT）:");
        if (!amount) return;
        try {
            const parsedAmount = ethers.utils.parseUnits(amount, decimals);
            const tx = await contract.deposit(parsedAmount);
            await tx.wait();
            fetchUserDeposits();
            alert('存款成功');
        } catch (error) {
            console.error("存款失败:", error);
            alert('存款失败，请检查输入或重试。');
        }
    };

    const withdrawInterest = async (depositId) => {
        try {
            const tx = await contract.withdrawInterest(depositId);
            await tx.wait();
            fetchUserDeposits();
            alert('利息提取成功');
        } catch (error) {
            console.error("利息提取失败:", error);
            alert('利息提取失败，请检查状态或重试。');
        }
    };

    const withdrawPrincipal = async (depositId) => {
        const amount = prompt("请输入要提取的本金金额（USDT）:");
        if (!amount) return;
        try {
            const parsedAmount = ethers.utils.parseUnits(amount, decimals);
            const tx = await contract.withdrawPrincipal(depositId, parsedAmount);
            await tx.wait();
            fetchUserDeposits();
            alert('本金提取成功');
        } catch (error) {
            console.error("本金提取失败:", error);
            alert('本金提取失败，请检查状态或重试。');
        }
    };

    const withdrawAll = async (depositId) => {
        try {
            const tx = await contract.withdrawAll(depositId);
            await tx.wait();
            fetchUserDeposits();
            alert('全部资金提取成功');
        } catch (error) {
            console.error("全部资金提取失败:", error);
            alert('全部资金提取失败，请检查状态或重试。');
        }
    };

    const handleAdminWithdraw = async () => {
        const amount = prompt("请输入要提取的 USDT 数量（含小数）:");
        if (!amount) return;
        try {
            const parsedAmount = ethers.utils.parseUnits(amount, decimals);
            const tx = await contract.adminWithdraw(parsedAmount);
            await tx.wait();
            alert('资金提取成功');
        } catch (error) {
            console.error("资金提取失败:", error);
            alert('资金提取失败，请检查权限或重试。');
        }
    };

    const handleUpdateLifespan = async () => {
        const miningMachineId = prompt("请输入矿机类型 ID:");
        const newLifespan = prompt("请输入新的寿命（天）:");
        if (miningMachineId === null || newLifespan === null) return;
        try {
            const tx = await contract.updateMiningMachineLifespan(parseInt(miningMachineId), parseInt(newLifespan));
            await tx.wait();
            alert('矿机寿命更新成功');
        } catch (error) {
            console.error("矿机寿命更新失败:", error);
            alert('矿机寿命更新失败，请检查输入或重试。');
        }
    };

    const calculateRemainingLifespan = (deposit) => {
        if (deposit.timestamp === 0) return 0;
        const depositEndTime = deposit.timestamp + (miningMachines[deposit.miningMachineId]?.lifespan || 0) * 86400; // 1天 = 86400秒
        const remaining = Math.floor((depositEndTime - Date.now() / 1000) / 86400);
        return remaining > 0 ? remaining : 0;
    };

    return (
        <div>
            <header>
                <h1>USDTGrowth</h1>
                {!account ? (
                    <button onClick={connectWallet}>连接钱包</button>
                ) : (
                    <p>已连接: {account.slice(0, 6)}...{account.slice(-4)}</p>
                )}
            </header>

            {account && (
                <div>
                    <h2>我的投资记录</h2>
                    <button onClick={handleDeposit}>存入 USDT</button>
                    {userDeposits.length === 0 ? (
                        <p>暂无存款记录。</p>
                    ) : (
                        userDeposits.map((deposit, index) => (
                            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                                <p>存款ID: {index}</p>
                                <p>本金: {ethers.utils.formatUnits(deposit.principal, decimals)} USDT</p>
                                <p>累积利息: {ethers.utils.formatUnits(deposit.interest, decimals)} USDT</p>
                                <p>矿机名称: {deposit.miningMachineId < miningMachines.length ? miningMachines[deposit.miningMachineId].machineName : "Unknown"}</p>
                                <p>矿机寿命: {miningMachines[deposit.miningMachineId]?.lifespan || 0} 天</p>
                                <p>剩余寿命: {calculateRemainingLifespan(deposit)} 天</p>
                                <button onClick={() => withdrawInterest(index)}>提取利息</button>
                                <button onClick={() => withdrawPrincipal(index)}>提取本金</button>
                                <button onClick={() => withdrawAll(index)}>提取所有</button>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* 管理员功能 */}
            {account === ownerAddress && (
                <div>
                    <h2>管理员功能</h2>
                    <button onClick={handleAdminWithdraw}>提取合约资金</button>
                    <button onClick={handleUpdateLifespan}>更新矿机寿命</button>
                </div>
            )}

            <footer>
                <p>© 2024 USDTGrowth。保留所有权利。</p>
                {/* 其他链接 */}
            </footer>
        </div>
    );
};

export default USDTDepositDashboard;
```

**说明**：

- **连接钱包**：用户点击“连接钱包”按钮，使用 MetaMask 连接到前端应用。
- **获取和显示存款记录**：获取用户所有存款记录，并展示每笔存款的详细信息。
- **存款操作**：用户可以通过点击“存入 USDT”按钮进行存款。
- **提取操作**：针对每笔存款，用户可以提取利息、本金或全部资金。
- **管理员功能**：只有合约所有者可以看到并使用管理员功能，包括提取资金和更新矿机寿命。

---

## **6. 安全性与最佳实践**

### **1. 重入攻击防护**

- **使用 `ReentrancyGuard`**：所有涉及资金转移的函数均使用 `nonReentrant` 修饰符，防止重入攻击。
  
  ```solidity
  function withdrawInterest(uint256 _depositId) public nonReentrant {
      // 函数体
  }
  ```

### **2. 权限控制**

- **使用 `Ownable`**：合约继承自 `Ownable`，确保只有合约所有者（管理员）可以调用敏感函数，如 `adminWithdraw` 和 `updateMiningMachineLifespan`。
  
  ```solidity
  function adminWithdraw(uint256 _amount) public onlyOwner nonReentrant {
      // 函数体
  }
  ```

### **3. 输入验证**

- **严格的输入检查**：所有函数对输入参数进行了严格检查，确保金额合理且符合预期。
  
  ```solidity
  require(_amount > 0, "Deposit amount must be greater than zero");
  require(_amount <= userDeposit.principal, "Invalid withdrawal amount");
  ```

### **4. 利息计算安全性**

- **寿命限制**：利息计算过程中，确保利息只在矿机寿命范围内计算，防止利息超出预期。
  
  ```solidity
  if (currentDay > maxInterestDays) {
      daysElapsed = maxInterestDays - depositStartDay;
  }
  ```

### **5. 资金管理**

- **安全的资金转移**：使用 `transfer` 和 `transferFrom` 函数安全转移 USDT，确保资金流向正确。
  
  ```solidity
  require(usdtToken.transfer(msg.sender, amountToWithdraw), "USDT transfer failed");
  ```

### **6. 事件记录**

- **链上事件**：通过事件记录关键操作（如存款、利息提取、本金提取、管理员提取、矿机寿命更新），便于链上监控和审计。
  
  ```solidity
  emit DepositMade(msg.sender, _amount, miningMachineId, depositId);
  ```

### **7. 小数位数处理**

- **动态小数位数**：使用可变的小数位数参数，确保金额计算的灵活性和正确性，避免因小数位数不同导致的计算错误。
  
  ```solidity
  uint256 parsedAmount = ethers.utils.parseUnits(amount, decimals);
  ```

---

## **7. 常见问题解答**

### **Q1：`depositId` 是如何生成的？**

**A1**：`depositId` 是通过用户存款数组的索引生成的。当用户进行存款时，新存款记录被添加到 `deposits[msg.sender]` 数组的末尾，`depositId` 为 `userDeposits.length - 1`。

### **Q2：用户可以同时拥有多个存款记录吗？**

**A2**：是的，合约设计允许用户多次存入 USDT，每次存款都会生成一个独立的存款记录，每个记录都有唯一的 `depositId`。

### **Q3：如何确保 `depositId` 的唯一性？**

**A3**：由于 `depositId` 是基于数组索引生成的，对于每个用户，数组中的每个存款记录都有唯一的索引。因此，`depositId` 在用户级别上是唯一的。

### **Q4：如果用户删除或修改存款记录，`depositId` 是否会变化？**

**A4**：在当前合约设计中，存款记录不会被删除或重新排列，因此 `depositId` 一旦分配，就不会变化。修改操作（如提取利息或本金）不会影响数组的顺序。

### **Q5：如何在合约中添加更多的矿机类型？**

**A5**：合约部署后，矿机类型是固定的。如果需要动态添加矿机类型，可以扩展合约功能，添加相应的管理函数（如 `addMiningMachine`）。请注意，任何合约功能的更改都需要谨慎处理，以确保安全性。

### **Q6：为什么在第一次存款时 `hasDeposited` 会被设置为 `true`？**

**A6**：`hasDeposited` 用于跟踪用户是否曾经存款过。首次存款时，将其设置为 `true`，并增加 `totalUsers` 计数，同时将用户地址添加到 `userAddresses` 数组中。这有助于管理和统计用户数量。

### **Q7：管理员提取资金时，为什么需要两次调用 `transfer`？**

**A7**：管理员提取资金时，首先将 8% 的手续费转移给 `feeRecipient`，然后将剩余的 92% 转移给管理员。这是为了确保资金按照预定比例分配。

---

## **8. 总结**

通过本次文档，您了解了 **USDTDeposit** 智能合约的全面功能，包括用户和管理员的操作，以及前端集成的详细方法。关键要点包括：

- **多存款支持**：用户可以多次存入 USDT，每次存款生成唯一的 `depositId`。
- **灵活的提取操作**：用户可以针对特定存款提取利息、本金或全部资金。
- **管理员控制**：管理员可以提取合约资金并更新矿机寿命。
- **安全性**：合约采用多重安全措施，包括重入防护、权限控制和严格的输入验证。
- **前端集成**：通过 React.js 和 Ethers.js，前端可以实现与合约的无缝交互，提供良好的用户体验。

**下一步建议**：

1. **全面测试**：
    - 在测试网络（如 Rinkeby 或 Binance Testnet）上部署合约，进行全面测试，确保所有功能正常运行。
    - 测试各种边界情况，如极大或极小的存款金额、寿命到期前后的提取操作等。

2. **安全审计**：
    - 邀请专业的智能合约审计团队，对合约进行全面审查，确保不存在安全漏洞和逻辑错误。

3. **前端优化**：
    - 根据用户反馈，不断优化前端界面，提升用户体验和操作便利性。
    - 实现更高级的功能，如多矿机类型同时存款、利息复投等。

4. **用户教育**：
    - 在平台上提供详细的使用指南和常见问题解答，帮助用户理解合约的运作机制、利息计算和本金提取规则。

5. **持续监控与维护**：
    - 部署后，持续监控合约的运行状态和用户行为，及时发现和解决潜在问题。
    - 根据市场需求和运营策略，动态调整矿机类型和利率。

如果您有任何进一步的问题或需要更多的具体示例，请随时告知！