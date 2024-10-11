"use client";
import React, { useState, useEffect } from "react";
import { message, Form } from "antd";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../src/app/client";

import {
  getContract,
  prepareContractCall,
  sendAndConfirmTransaction,
  readContract,
  toWei,
} from "thirdweb";

import { useActiveAccount } from "thirdweb/react";
import { bsc, bscTestnet, sepolia } from "thirdweb/chains";

const wallets: any = [
  createWallet("io.metamask"),
  createWallet("pro.tokenpocket"),
  createWallet("im.token"),
  createWallet("com.binance"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
];

const CallWallet = ({ witchRPC = 1 }) => {
  const [form] = Form.useForm();
  const account: any = useActiveAccount();
  const { ethereum } = window as any;


  async function handleConnect() {
    if (ethereum) {
      try {
        // 请求用户的账户和网络信息
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log("Connected network chainId:", chainId);

        // 你可以根据 `chainId` 判断是哪个网络
        switch (chainId) {
          case '0x1': // Ethereum Mainnet
            console.log("User is on Ethereum Mainnet");
            break;
          case '0x3': // Ropsten Testnet
            console.log("User is on Ropsten Testnet");
            break;
          case '0x4': // Rinkeby Testnet
            console.log("User is on Rinkeby Testnet");
            break;
          case '0x5': // Goerli Testnet
            console.log("User is on Goerli Testnet");
            break;
          case '0x38': // Binance Smart Chain Mainnet
            console.log("User is on Binance Smart Chain Mainnet");
            break;
          case '0x89': // Polygon Mainnet
            console.log("User is on Polygon Mainnet");
            break;
          case '0x2a': // Kovan Testnet
            console.log("User is on Kovan Testnet");
            break;
          default:
            console.log("User is on an unknown network with chainId:", chainId);
        }
      } catch (error) {
        console.error('Error getting network information:', error);
      }
    } else {
      console.log('Ethereum object not found, please install MetaMask.');
    }
  }

  useEffect(() => {
    if (account) {
      // getNetworkInfo();
    }
  }, [account]);

  return (
    <div>
      <ConnectButton
        theme={"dark"}
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
        chain={witchRPC == 1 ? bscTestnet : witchRPC == 2 ? sepolia : bsc}
        onConnect={handleConnect}
      />
    </div>
  );
};

export default CallWallet;
