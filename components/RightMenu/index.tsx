"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { copyToClipboard } from "../../public/clipboard";
import Administrator from "../../public/images/Administrator.png";
import { useActiveAccount } from "thirdweb/react";

const RightMenu: React.FC = () => {
  const account: any = useActiveAccount();
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const handleCopyClick = () => {
    const textToCopy = "这里是你想要复制的文本";
    copyToClipboard(textToCopy);
  };
  useEffect(() => {
    if (account) {
      setIsAdmin(
        account.address.toLowerCase() ==
          "0xf12C64a1A345ddE2AB90e22F7dc4279A32265A1F"
      );
    }
  }, [account]);
  return (
    <div className={styles.rightMenu} data-id="RightMenu">
      <div
        data-id="RightMenu"
        className={styles.row}
        onClick={() => router.push("/HomeLess")}
      >
        <Image
          data-id="RightMenu"
          className={styles.img}
          src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/HomePage.png"
          alt="coin"
          width={50}
          height={50}
        />
        <div data-id="RightMenu" className={styles.text}>
          首页
        </div>
      </div>
      <div
        data-id="RightMenu"
        className={styles.row}
        onClick={() => router.push("/Machine")}
      >
        <Image
          data-id="RightMenu"
          className={styles.img}
          src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/MiningMachine.png"
          alt="coin"
          width={50}
          height={50}
        />
        <div data-id="RightMenu" className={styles.text}>
          矿机
        </div>
      </div>
      <div
        data-id="RightMenu"
        className={styles.row}
        onClick={() => router.push("/Flash")}
      >
        <Image
          data-id="RightMenu"
          className={styles.img}
          src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/flash.png"
          alt="coin"
          width={50}
          height={50}
        />
        <div data-id="RightMenu" className={styles.text}>
          提款
        </div>
      </div>
      {/* <div
        data-id="RightMenu"
        className={styles.row}
        onClick={() => router.push("/Community")}
      >
        <Image
          data-id="RightMenu"
          className={styles.img}
          src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/community.png"
          alt="coin"
          width={50}
          height={50}
        />
        <div data-id="RightMenu" className={styles.text}>
          联系我们
        </div>
      </div> */}
      <div
        data-id="RightMenu"
        className={styles.row}
        onClick={() => router.push("/Personal")}
      >
        <Image
          data-id="RightMenu"
          className={styles.img}
          src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Individualcenter.png"
          alt="coin"
          width={50}
          height={50}
        />
        <div data-id="RightMenu" className={styles.text}>
          个人中心
        </div>
      </div>
      {isAdmin ? (
        <div
          data-id="RightMenu"
          className={styles.row}
          onClick={() => router.push("/Administrator")}
        >
          <Image
            data-id="RightMenu"
            className={styles.img}
            src={Administrator}
            alt="coin"
            width={50}
            height={50}
          />
          <div data-id="RightMenu" className={styles.text}>
            管理员
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RightMenu;
