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
      />
    </div>
  );
};

export default CallWallet;
