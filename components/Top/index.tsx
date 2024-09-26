"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import CallWallet from "../CallWallet";
import logo from "../../public/images/logo.jpg";

interface TopProps {
  onToggleRightMenu: () => void;
}

const TopMenu: React.FC<TopProps> = ({ onToggleRightMenu }) => {
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

      <Image
        className={styles.m2}
        src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/selectorSwitch.png"
        alt="selectorSwitch"
        width={50}
        height={50}
      />

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
