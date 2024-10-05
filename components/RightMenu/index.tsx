"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { copyToClipboard } from "../../public/clipboard";

const RightMenu: React.FC = () => {
  const router = useRouter();
  const handleCopyClick = () => {
    const textToCopy = "这里是你想要复制的文本1";
    copyToClipboard(textToCopy);
  };

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
    </div>
  );
};

export default RightMenu;
