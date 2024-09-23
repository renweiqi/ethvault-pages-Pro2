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
import Announcement from "../Announcement";

const imageArray = [
  {
    link: `/Machine`,
    url: "https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/kj.png",
    name: "矿机",
    en: "MINING MACHINE",
  },
  {
    link: "/Personal",
    url: "https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/sy.png",
    name: "个人中心",
    en: "PERSONAL CENTER",
  },
  {
    link: "/Community",
    url: "https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/sq.png",
    name: "社区",
    en: "COMMUNITY",
  },
  {
    link: "/InCode",
    url: "https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/yqm.png",
    name: "邀请码",
    en: "INVITATION CODE",
  },
  {
    link: "/HomeLess",
    url: "https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/sy.png",
    name: "首页",
    en: "HOME",
  },
  {
    link: "/Flash",
    url: "https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/sd.png",
    name: "闪兑",
    en: "INSTANT EXCHANGE",
  },
];

const ClientMenu: React.FC = () => {
  const router = useRouter();
  const account: any = useActiveAccount();

  const goRoute = (url: any) => {
    router.push(url.link);
  };

  const handleCopyClick = () => {
    const textToCopy = `https://m.zsdcoin.com?ref=${account ? account.address : ''}`;
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
          <video autoPlay muted loop id="bg-video">
            <source src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/shequ.mp4" type="video/mp4" />
          </video>
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
