"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import Administrator from "../../public/images/Administrator.png";
import selectorSwitch from "../../public/images/selectorSwitch.png";
import { useActiveAccount } from "thirdweb/react";

const RightMenu: React.FC = () => {
  const account: any = useActiveAccount();
  const [isAdmin, setIsAdmin] = useState(false);
  const [language, setLanguage] = useState("EN"); // 新增语言状态
  const router = useRouter();

  // 切换语言并存储到 localStorage
  const ToggleLanguage = () => {
    const newLanguage = language === "EN" ? "CN" : "EN";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // 存储到 localStorage
    window.location.reload(); // 刷新页面
  };

  useEffect(() => {
    if (account) {
      setIsAdmin(
        account.address.toLowerCase() ==
        "0x8d2291AA07407F40C8a98cb083a398296d43167B".toLowerCase()
      );
    }

    // 从 localStorage 中获取存储的语言偏好
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
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
          {language === "EN" ? "Home" : "首页"} {/* 根据语言渲染 */}
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
          {language === "EN" ? "Mining" : "矿机"}
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
          {language === "EN" ? "Withdraw" : "提款"}
        </div>
      </div>

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
          {language === "EN" ? "Personal" : "个人中心"}
        </div>
      </div>

      {isAdmin && (
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
            {language === "EN" ? "Admin" : "管理员"}
          </div>
        </div>
      )}

      <div data-id="RightMenu" className={styles.row} onClick={ToggleLanguage}>
        <Image
          data-id="RightMenu"
          className={styles.img}
          src={selectorSwitch}
          alt="coin"
          width={50}
          height={50}
        />
        <div data-id="RightMenu" className={styles.text}>
          {language === "EN" ? "EN" : "CN"} {/* 显示当前语言 */}
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
