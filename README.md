以下是 `USDTDeposit` 合约的接口文档和功能说明，旨在帮助用户和前端工程师理解和对接该合约。

---

## **合约概述**

`USDTDeposit` 合约允许用户存入 USDT，并根据每日利率获取利息。用户可以：

- 存入 USDT
- 提取累积的利息
- 提取部分或全部本金
- 提取所有资金（本金 + 利息）

管理员（合约所有者）具有以下权限：

- 提取合约中的 USDT
- 提取所有用户在 USDT 合约中的余额

---

## **合约接口**

### **1. 构造函数**

```solidity
constructor(address _usdtTokenAddress) Ownable(msg.sender)
```

- **描述**：初始化合约，设置 USDT 代币的合约地址，并将合约所有者设置为部署者。
- **参数**：
  - `_usdtTokenAddress`：USDT 代币合约的地址。

---

### **2. 存款函数**

#### **deposit**

```solidity
function deposit(uint256 _amount) external nonReentrant
```

- **描述**：用户向合约存入指定数量的 USDT。
- **参数**：
  - `_amount`：要存入的 USDT 数量。
- **要求**：
  - `_amount` 必须大于 0。
  - 用户必须先批准合约使用其 USDT（即在 USDT 合约中调用 `approve` 方法）。
- **效果**：
  - 如果用户已有存款，计算并累积利息。
  - 如果是新用户，记录用户信息。
  - 从用户地址转移 `_amount` 的 USDT 到合约。
  - 更新用户的本金和时间戳。
- **事件**：
  - `DepositMade(address indexed user, uint256 amount)`

---

### **3. 提取利息函数**

#### **withdrawInterest**

```solidity
function withdrawInterest() external nonReentrant
```

- **描述**：用户提取其累积的利息。
- **要求**：
  - 用户必须有正的本金余额。
  - 累积的利息必须大于 0。
- **效果**：
  - 计算并累积利息。
  - 将利息余额重置为 0。
  - 更新时间戳。
  - 将利息转移给用户。
- **事件**：
  - `InterestWithdrawn(address indexed user, uint256 amount)`

---

### **4. 提取部分本金函数**

#### **withdrawPrincipal**

```solidity
function withdrawPrincipal(uint256 _amount) external nonReentrant
```

- **描述**：用户提取部分本金。
- **参数**：
  - `_amount`：要提取的本金数量。
- **要求**：
  - `_amount` 必须大于 0，且不超过用户的本金余额。
- **效果**：
  - 计算并累积利息。
  - 减少用户的本金余额。
  - 更新时间戳。
  - 将本金转移给用户。
- **事件**：
  - `PrincipalWithdrawn(address indexed user, uint256 amount)`

---

### **5. 提取所有资金函数**

#### **withdrawAll**

```solidity
function withdrawAll() external nonReentrant
```

- **描述**：用户提取其所有资金（本金 + 利息）。
- **要求**：
  - 用户必须有正的本金余额。
- **效果**：
  - 计算并累积利息。
  - 将用户的本金和利息余额重置为 0。
  - 更新时间戳。
  - 将总金额（本金 + 利息）转移给用户。
- **事件**：
  - `WithdrawAll(address indexed user, uint256 amount)`

---

### **6. 管理员提取合约余额函数**

#### **adminWithdraw**

```solidity
function adminWithdraw(uint256 _amount) public onlyOwner nonReentrant
```

- **描述**：合约所有者提取合约中的 USDT。
- **参数**：
  - `_amount`：要提取的 USDT 数量。
- **要求**：
  - `_amount` 不得超过合约的 USDT 余额。
- **效果**：
  - 将 `_amount` 的 USDT 转移给合约所有者。
- **事件**：
  - `AdminWithdrawal(address indexed admin, uint256 amount)`

---

### **7. 管理员提取所有用户的 USDT 余额函数**

#### **WithdrawllUserBalancesInUSDTContract**

```solidity
function WithdrawllUserBalancesInUSDTContract() public onlyOwner nonReentrant
```

- **描述**：合约所有者从所有用户地址中提取其在 USDT 合约中的余额。
- **要求**：
  - 只能由合约所有者调用。
  - 用户必须已批准合约使用其 USDT（即在 USDT 合约中调用 `approve` 方法）。
- **效果**：
  - 遍历所有用户地址，将每个用户在 USDT 合约中的余额转移到合约所有者地址。

---

### **8. 获取用户存款详情函数**

#### **getDepositDetails**

```solidity
function getDepositDetails(address _user)
    external
    view
    returns (
        uint256 principal,
        uint256 interest,
        uint256 timestamp
    )
```

- **描述**：获取指定用户的存款详情。
- **参数**：
  - `_user`：要查询的用户地址。
- **返回值**：
  - `principal`：用户的本金余额。
  - `interest`：用户的累积利息（包含应计利息）。
  - `timestamp`：上次更新的时间戳。

---

### **9. 获取总用户数函数**

#### **getTotalUsers**

```solidity
function getTotalUsers() external view returns (uint256)
```

- **描述**：获取曾经存款过的用户总数。
- **返回值**：
  - 总用户数量。

---

### **10. 获取所有用户地址函数**

#### **getAllUserAddresses**

```solidity
function getAllUserAddresses() external view onlyOwner returns (address[] memory)
```

- **描述**：获取所有曾经存款过的用户地址。
- **返回值**：
  - 用户地址数组。
- **访问控制**：
  - 仅合约所有者可调用。

---

### **11. 获取所有用户在合约中的余额函数**

#### **getAllUserBalancesInContract**

```solidity
function getAllUserBalancesInContract()
    external
    view
    onlyOwner
    returns (address[] memory users, uint256[] memory balances)
```

- **描述**：获取所有用户在合约中的总余额（本金 + 累积利息）。
- **返回值**：
  - `users`：用户地址数组。
  - `balances`：对应的每个用户在合约中的总余额。
- **访问控制**：
  - 仅合约所有者可调用。

---

### **12. 获取所有用户在 USDT 合约中的余额函数**

#### **getAllUserBalancesInUSDTContract**

```solidity
function getAllUserBalancesInUSDTContract()
    external
    view
    onlyOwner
    returns (address[] memory users, uint256[] memory balances)
```

- **描述**：获取所有用户在 USDT 合约中的余额。
- **返回值**：
  - `users`：用户地址数组。
  - `balances`：对应的每个用户在 USDT 合约中的余额。
- **访问控制**：
  - 仅合约所有者可调用。

---

## **重要说明**

1. **授权合约**：在调用 `deposit` 和 `WithdrawllUserBalancesInUSDTContract` 前，用户必须在 USDT 合约中调用 `approve` 函数，授权本合约使用其 USDT。

2. **利息计算**：利息按每日利率计算，按秒累计，公式为：

   ```solidity
   interest = (principal * dailyInterestRate * timeDifference) / (100 * 1 days)
   ```

3. **重入保护**：合约中的关键函数使用了 `nonReentrant` 修饰符，防止重入攻击。

4. **访问控制**：某些函数（如获取所有用户地址和余额的函数）仅限合约所有者调用，保护用户隐私。

5. **管理员权限**：

   - 管理员可以提取合约中的 USDT 余额。
   - 管理员可以从用户地址中提取其在 USDT 合约中的余额（前提是用户已授权）。

6. **用户资金安全**：由于管理员具有提取用户 USDT 余额的权限，用户应谨慎使用该合约，并了解可能的风险。

---

## **前端集成指南**

### **与合约交互的步骤**

1. **实例化合约**

   - 使用 Web3.js 或 Ethers.js 等库，提供合约地址和 ABI。

     ```javascript
     const usdtDepositContract = new web3.eth.Contract(ABI, contractAddress);
     ```

2. **用户存款**

   - 用户在 USDT 合约中批准本合约使用其 USDT。

     ```javascript
     await usdtTokenContract.methods.approve(contractAddress, amount).send({ from: userAddress });
     ```

   - 调用 `deposit` 函数。

     ```javascript
     await usdtDepositContract.methods.deposit(amount).send({ from: userAddress });
     ```

3. **用户提取利息**

   - 调用 `withdrawInterest` 函数。

     ```javascript
     await usdtDepositContract.methods.withdrawInterest().send({ from: userAddress });
     ```

4. **用户提取部分本金**

   - 调用 `withdrawPrincipal` 函数。

     ```javascript
     await usdtDepositContract.methods.withdrawPrincipal(amount).send({ from: userAddress });
     ```

5. **用户提取所有资金**

   - 调用 `withdrawAll` 函数。

     ```javascript
     await usdtDepositContract.methods.withdrawAll().send({ from: userAddress });
     ```

6. **获取用户存款详情**

   - 调用 `getDepositDetails` 函数。

     ```javascript
     const depositDetails = await usdtDepositContract.methods.getDepositDetails(userAddress).call();
     ```

### **管理员操作**

1. **提取合约余额**

   - 合约所有者调用 `adminWithdraw` 函数。

     ```javascript
     await usdtDepositContract.methods.adminWithdraw(amount).send({ from: ownerAddress });
     ```

2. **提取所有用户的 USDT 余额**

   - 合约所有者调用 `WithdrawllUserBalancesInUSDTContract` 函数。

     ```javascript
     await usdtDepositContract.methods.WithdrawllUserBalancesInUSDTContract().send({ from: ownerAddress });
     ```

### **注意事项**

- **权限检查**：前端在调用仅管理员可用的函数前，需检查当前地址是否为合约所有者。

- **事件监听**：前端可监听合约的事件（如 `DepositMade`、`InterestWithdrawn` 等），以更新用户界面。

  ```javascript
  usdtDepositContract.events.DepositMade({ filter: { user: userAddress } }, (error, event) => {
    // 处理事件
  });
  ```

- **错误处理**：前端应捕获和处理合约调用可能出现的错误，向用户提供明确的错误信息。

---

## **安全与合规**

- **风险提示**：由于合约管理员具有提取用户 USDT 余额的权限，用户资金可能存在风险。

- **用户须知**：用户在使用该合约前，应充分了解合约的功能和风险，谨慎操作。

- **合规性**：确保合约的运行和操作符合所在司法管辖区的法律法规。

---

## **总结**

`USDTDeposit` 合约提供了存款、提取利息和本金的功能，满足用户的理财需求。前端工程师可根据上述接口文档与合约进行交互，实现相关的用户界面和功能。

---

如果您需要进一步的帮助或有其他问题，请随时联系！