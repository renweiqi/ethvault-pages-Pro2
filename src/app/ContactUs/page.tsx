"use client"; // 告诉 Next.js 这是一个客户端组件
import React ,{useState,useEffect}from "react";
import dynamic from "next/dynamic";
import Content from "../../../components/CommBg";
import Image from "next/image";
import styles from "./index.module.scss";
import { MenuProvider } from "../../../components/MenuContext"; // 调整路径到实际位置
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});

const ContactUs = () => {
  const [language, setLanguage] = useState("EN"); // 默认语言为英文
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  return (
    <MenuProvider>
      <TopMenu />
      <Content
        styleMain={{ marginTop: "18px",height:"35vh"}}
        title={language?"Community":"社区"}
        solt={
          <div className={styles.chatcontainer}>
            {/* <div className={styles.chatbubble}>
              <div className={styles.icon}>
                <Image
                  src="https://violet-changing-horse-877.mypinata.cloud/ipfs/QmQ2hGZURQqfQ7t47CiBALPTFDip8Jp9HVGHRXXJe7i9C7/xn.png"
                  width={50}
                  height={50}
                  alt="Paperplane"
                />
              </div>
              <div className={styles.message}>
                <div>https://x.com/kuang_jin34363</div>
                <div>?s=09</div>
              </div>
            </div> */}
            <div className={styles.chatbubble}>
              <div className={styles.icon}>
                <Image
                  src="../../../images/tlgrm.png"
                  width={50}
                  height={50}
                  alt="Twitter"
                />
              </div>
              <div className={styles.message} style={{ paddingTop: "14px" }} onClick={()=>{window.open('https://t.me/+uglMHc3MjRQ3MjU0')}}>
              https://t.me/+uglMHc3MjRQ3MjU0
              </div>
            </div>
            {/* <div className={styles.chatbubble}>
              <div className={styles.icon}>
                <Image
                  src="https://violet-changing-horse-877.mypinata.cloud/ipfs/QmQ2hGZURQqfQ7t47CiBALPTFDip8Jp9HVGHRXXJe7i9C7//wyj.png"
                  width={50}
                  height={50}
                  alt="Internet Explorer"
                />
              </div>
              <div className={styles.message}>
                <div>https://discord.com/invite/</div>
                <div>6Sathyexrm</div>
              </div>
            </div> */}
          </div>
        }
      ></Content>
      社区
    </MenuProvider>
  );
};

export default ContactUs;
