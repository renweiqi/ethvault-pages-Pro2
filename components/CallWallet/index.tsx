"use client";
import React, { useState, useEffect } from "react";
import { message, Modal, Input, Form, Button, Row, Col } from "antd";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { approve, allowance } from "thirdweb/extensions/erc20";
import { client } from "../../src/app/client";
import styles from "./index.module.scss";

import {
  getContract,
  prepareContractCall,
  sendAndConfirmTransaction,
  readContract,
  toWei,
} from "thirdweb";
import { APIConfig } from "../../abi/APIConfiguration";
import { USDTAbi } from "../../abi/USDTAbi";
import { ZSDABI } from "../../abi/ZSDABI";
import { ZSDPROJECTABI } from "../../abi/ZSDPROJECTABI";
import { useActiveAccount } from "thirdweb/react";
import { debug } from "console";
import { approveErc20Allowance } from "@thirdweb-dev/sdk";
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
  const [witch, setWitch] = useState("1");

  const handleCancel = async () => {
    try {
      wallets.forEach((wallet: { disconnect: (arg0: any) => void }) => {
        if (wallet.disconnect) {
          wallet.disconnect(wallet);
        }
      });
      message.error("未填写邀请码，钱包已登出");
    } catch (error) {
      message.error("登出钱包失败，请重试。");
    }
  };

  // useEffect(() => {
  //   if (account) {
  //     WhetherInviteUsers()
  //   }
  // }, [account]);

  return (
    <div>
      <ConnectButton
        theme={"dark"}
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
        // chain={bsc}
        chain={witchRPC == 1 ? bscTestnet : witchRPC == 2 ? sepolia : bsc}
      />
    </div>
  );
};

export default CallWallet;
