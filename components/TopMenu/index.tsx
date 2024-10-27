"use client";
import React, { useEffect, useContext, useRef, useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import Image from "next/image";
import styles from "./index.module.scss";
import Top from "../Top";
import { useRouter } from "next/navigation";
import RightMenu from "../RightMenu";
import { MenuContext } from "../MenuContext";
import { copyToClipboard } from "../../public/clipboard";
import bgGif from "../../public/images/beijing.png";

const ClientMenu: React.FC = () => {
  const router = useRouter();
  const account: any = useActiveAccount();
  const [language, setLanguage] = useState("EN"); // Default language is English

  const imageArrayEN = [
    {
      link: `/Machine`,
      url: "../../images/MININGMACHINE.png",
      name: 'Miners',
      en: "Miners",
    },
    {
      link: "/Personal",
      url: "../../images/PERSONALCENTER.png",
      name: "PERSONAL CENTER",
      en: "personal center",
    },
    {
      link: "/HomeLess",
      url: "../../images/homepage.png",
      name: "Home page",
      en: "home page",
    },
    {
      link: "/Flash",
      url: "../../images/WithdrawMoney.png",
      name: "Withdrawal",
      en: "Withdrawal",
    },
  ];

  const imageArrayZh = [
    {
      link: `/Machine`,
      url: "../../images/MININGMACHINE.png",
      name: '矿机',
      en: "Miners",
    },
    {
      link: "/Personal",
      url: "../../images/PERSONALCENTER.png",
      name: "个人中心",
      en: "personal center",
    },
    {
      link: "/HomeLess",
      url: "../../images/homepage.png",
      name: "首 页",
      en: "home page",
    },
    {
      link: "/Flash",
      url: "../../images/WithdrawMoney.png",
      name: "取 款",
      en: " Withdrawal",
    },
  ];

  const goRoute = (url: any) => {
    router.push(url.link);
  };

  const handleCopyClick = () => {
    const textToCopy = `https://m.zsdcoin.com?ref=${account ? account.address : ""}`;
    copyToClipboard(textToCopy);
  };

  const { isRightMenuVisible, toggleRightMenu, hideRightMenu } = useContext(MenuContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (containerRef.current && event.target.dataset.id !== "RightMenu") {
        hideRightMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hideRightMenu]);

  const selectedImageArray = language === "EN" ? imageArrayEN : imageArrayZh;

  return (
    <>
      <div className={styles.pageMenu}>
        {isRightMenuVisible && <RightMenu />}
        <Top onToggleRightMenu={toggleRightMenu} />

        <div className={styles.videoBackground} id="nav">
          <Image className={styles.imageGif} src={bgGif} alt="" />
        </div>

        <div className={styles.top} ref={containerRef}>
          {selectedImageArray.map((v, i) => (
            <div
              className={`${styles["menyBtn" + i]} ${styles.menyBtn}`}
              key={v.link}
              onClick={v.link === "/InCode" ? handleCopyClick : () => goRoute(v)}
            >
              <Image
                className={`${styles["img" + i]}`}
                src={v.url}
                alt={v.name}
                width={50}
                height={50}
              />
              <div className={styles["menyBtn-n"]}>{v.name}</div>
              <div className={styles["menyBtn-e"]}>{v.en}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientMenu;
