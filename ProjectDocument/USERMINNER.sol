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
