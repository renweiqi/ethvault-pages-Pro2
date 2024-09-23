## **USDTDeposit 合约使用文档**

该文档详细介绍了 **USDTDeposit** 智能合约的用户功能和管理员功能，并为前端集成提供详细指导。文档分为两个部分：**用户功能** 和 **管理员功能**，并分别提供前端集成指南。

### **目录**
1. [用户功能](#用户功能)
    - [1. 存款 USDT](#1-存款-usdt)
    - [2. 查看存款记录](#2-查看存款记录)
    - [3. 提取利息](#3-提取利息)
    - [4. 提取本金](#4-提取本金)
    - [5. 提取所有资金](#5-提取所有资金)
2. [管理员功能](#管理员功能)
    - [1. 提取合约资金](#1-提取合约资金)
    - [2. 更新矿机寿命](#2-更新矿机寿命)
3. [前端集成指南](#前端集成指南)
    - [1. 连接钱包](#1-连接钱包)
    - [2. 显示用户存款记录](#2-显示用户存款记录)
    - [3. 执行存款操作](#3-执行存款操作)
    - [4. 执行提取操作](#4-执行提取操作)
    - [5. 管理员界面](#5-管理员界面)

---

### **用户功能**

#### **1. 存款 USDT**

**描述**：用户可以选择矿机类型并存入 USDT。每次存款生成一个唯一的存款记录，并记录矿机类型、本金、利息、寿命等信息。

**合约函数**：`deposit(uint256 _amount)`

- `_amount`：存入的 USDT 数量。
  
**步骤**：

1. 用户调用 USDT 合约的 `approve` 函数，授权存入 USDT。
2. 选择矿机类型（根据存款金额自动匹配）。
3. 调用 `deposit` 函数，将 USDT 存入合约，生成存款记录。

**效果**：

- 为用户创建新的存款记录，关联相应的矿机类型。
- 用户的存款本金和利息会自动累积。

---

#### **2. 查看存款记录**

**描述**：用户可以查看自己所有存款的详情，包括本金、利息、矿机名称、寿命和剩余寿命。

**合约函数**：`getDepositDetails(address _user, uint256 _depositId)`

- `_user`：用户地址。
- `_depositId`：存款记录的唯一标识 ID。

**返回**：

- 返回用户的存款详情，包括本金、利息、矿机名称、寿命和剩余寿命。

**前端展示**：

前端调用该函数后，将返回的内容展示在用户界面，显示用户的投资情况。

---

#### **3. 提取利息**

**描述**：用户可以提取指定存款记录的累积利息。

**合约函数**：`withdrawInterest(uint256 _depositId)`

- `_depositId`：存款记录的 ID。

**要求**：

- 存款本金必须大于 0，且本金未被提取。

**效果**：

- 计算并提取用户的利息，并重置利息余额。

---

#### **4. 提取本金**

**描述**：用户在矿机寿命到期后，可以提取特定存款记录的部分本金。

**合约函数**：`withdrawPrincipal(uint256 _depositId, uint256 _amount)`

- `_depositId`：存款记录的 ID。
- `_amount`：要提取的本金金额。

**要求**：

- 提取金额不得超过存款本金。
- 只能在矿机寿命到期后进行提取。

---

#### **5. 提取所有资金**

**描述**：用户可以在矿机寿命到期后提取所有资金，包括本金和利息。

**合约函数**：`withdrawAll(uint256 _depositId)`

- `_depositId`：存款记录的 ID。

**要求**：

- 存款本金必须大于 0，且本金尚未被提取。

---

### **管理员功能**

#### **1. 提取合约资金**

**描述**：管理员可以从合约中提取资金。提取的资金中，8% 会转入 `feeRecipient`，剩余 92% 转入管理员账户。

**合约函数**：`adminWithdraw(uint256 _amount)`

- `_amount`：提取的 USDT 数量。

**要求**：

- 只能由管理员（合约所有者）调用。
- 提取金额不得超过合约余额。

---

#### **2. 更新矿机寿命**

**描述**：管理员可以更新矿机的寿命。

**合约函数**：`updateMiningMachineLifespan(uint256 _miningMachineId, uint256 _newLifespan)`

- `_miningMachineId`：矿机类型 ID。
- `_newLifespan`：新的矿机寿命。

**要求**：

- 矿机类型 ID 必须有效。
- 新寿命必须大于 0。

---

### **前端集成指南**

前端集成指南提供了如何使用 **React.js** 和 **Ethers.js** 连接该智能合约，并与其交互。

#### **1. 连接钱包**

用户需要通过钱包连接（如 MetaMask）来访问合约。使用 **Ethers.js** 实现与钱包的连接。

```javascript
import { ethers } from 'ethers';

const connectWallet = async () => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const account = await signer.getAddress();
        console.log('Connected account:', account);
        return signer;
    } else {
        alert('Please install MetaMask');
    }
};
```

#### **2. 显示用户存款记录**

通过调用合约的 `getDepositDetails` 函数，可以显示用户的存款记录。

```javascript
const getUserDeposits = async (contract, userAddress) => {
    const deposits = [];
    const depositCount = await contract.getTotalUsers(); // 获取存款数
    for (let i = 0; i < depositCount; i++) {
        const deposit = await contract.getDepositDetails(userAddress, i);
        deposits.push(deposit);
    }
    return deposits;
};
```

#### **3. 执行存款操作**

通过 `deposit` 函数，用户可以将 USDT 存入合约。

```javascript
const depositUSDT = async (contract, amount) => {
    const tx = await contract.deposit(ethers.utils.parseUnits(amount, 6)); // 6 是 USDT 的小数点位数
    await tx.wait();
    console.log('Deposit successful');
};
```

#### **4. 执行提取操作**

用户可以提取利息、本金或所有资金，前端通过调用相应函数来实现。

```javascript
// 提取利息
const withdrawInterest = async (contract, depositId) => {
    const tx = await contract.withdrawInterest(depositId);
    await tx.wait();
    console.log('Interest withdrawn');
};

// 提取本金
const withdrawPrincipal = async (contract, depositId, amount) => {
    const tx = await contract.withdrawPrincipal(depositId, ethers.utils.parseUnits(amount, 6));
    await tx.wait();
    console.log('Principal withdrawn');
};

// 提取所有资金
const withdrawAllFunds = async (contract, depositId) => {
    const tx = await contract.withdrawAll(depositId);
    await tx.wait();
    console.log('All funds withdrawn');
};
```

#### **5. 管理员界面**

管理员可以通过前端界面提取合约资金或更新矿机寿命。

```javascript
// 提取合约资金
const adminWithdraw = async (contract, amount) => {
    const tx = await contract.adminWithdraw(ethers.utils.parseUnits(amount, 6));
    await tx.wait();
    console.log('Admin withdrawal successful');
};

// 更新矿机寿命
const updateMiningMachineLifespan = async (contract, miningMachineId, newLifespan) => {
    const tx = await contract.updateMiningMachineLifespan(miningMachineId, newLifespan);
    await tx.wait();
    console.log('Mining machine lifespan updated');
};
```

---

### **前端集成示例**

```javascript
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import USDTDepositABI from './USDTDepositABI.json'; // 合约的 ABI

const USDTDepositDashboard = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [deposits, setDeposits] = useState([]);

    const contractAddress = '0xYourContractAddressHere'; // 合约地址

    useEffect(() => {
        if (window.ethereum) {
            const tempProvider = new ethers.providers.Web3