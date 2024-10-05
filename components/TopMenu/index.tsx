"use client";
import React, { useEffect, useContext, useRef } from "react";
import { useActiveAccount } from "thirdweb/react";
import Image from "next/image";
import styles from "./index.module.scss";
import Top from "../Top";
import { useRouter } from "next/navigation";
import RightMenu from "../RightMenu";
import { MenuContext } from "../MenuContext";
import { copyToClipboard } from "../../public/clipboard";
import bgGif from "../../public/images/beijing.png";

const imageArray = [
  {
    link: `/Machine`,
    url: "../../images/MININGMACHINE.png",
    name: "矿机",
    en: "MINING MACHINE",
  },
  {
    link: "/Personal",
    url: "../../images/PERSONALCENTER.png",
    name: "个人中心",
    en: "PERSONAL CENTER",
  },
  // {
  //   link: "/Community",
  //   url: "../../images/ContactUs.png",
  //   name: "联系我们",
  //   en: "Contact Us",
  // },
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
    en: "withdraw money",
  },
];

const ClientMenu: React.FC = () => {
  const router = useRouter();
  const account: any = useActiveAccount();

  const goRoute = (url: any) => {
    router.push(url.link);
  };

  const handleCopyClick = () => {
    const textToCopy = `https://m.zsdcoin.com?ref=${
      account ? account.address : ""
    }`;
    copyToClipboard(textToCopy);
  };

  const { isRightMenuVisible, toggleRightMenu, hideRightMenu } =
    useContext(MenuContext);
  const containerRef = useRef(null);

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

  return (
    <>
      {/* 公告 */}
      {/* <Announcement /> */}
      <div className={styles.pageMenu}>
        {isRightMenuVisible && <RightMenu />}
        <Top onToggleRightMenu={toggleRightMenu} />

        <div className={styles.videoBackground} id="nav">
          <Image className={styles.imageGif} src={bgGif} alt="" />
        </div>

        <div className={styles.top} ref={containerRef}>
          {imageArray.map((v, i) => {
            if (v.link === "/InCode") {
              return (
                <div
                  className={`${styles["menyBtn" + i]} ${styles.menyBtn}`}
                  key={i}
                  onClick={handleCopyClick}
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
              );
            }
            return (
              <div
                className={`${styles["menyBtn" + i]} ${styles.menyBtn}`}
                key={i}
                onClick={() => goRoute(v)}
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClientMenu;
