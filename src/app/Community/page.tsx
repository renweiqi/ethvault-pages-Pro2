import React from "react";
import dynamic from "next/dynamic";
// import VideoPlayer from "../../../components/VideoPlayer";
import Content from "../../../components/CommBg";
import Image from "next/image";
import styles from "./index.module.scss";
import { MenuProvider } from "../../../components/MenuContext"; // 调整路径到实际位置
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
const Community = () => {
  return (
    <MenuProvider>
      <TopMenu />
      {/* <VideoPlayer></VideoPlayer> */}
      <Content
        styleMain={{ marginTop: "36px" }}
        title={"联系我们"}
        solt={
          <div className={styles.chatcontainer}>
            <div className={styles.chatbubble}>
              <div className={styles.textstyle}>邮件</div>
              <div className={styles.centerstyle}>这里是占位</div>
            </div>

            <div className={styles.chatbubble}>
              <div className={styles.textstyle}>网站</div>
              <div className={styles.centerstyle}>这里是占位</div>
            </div>

            <div className={styles.chatbubble}>
              <div className={styles.textstyle}>推特</div>
              <div className={styles.centerstyle}>这里是占位</div>
            </div>

            <div className={styles.chatbubble}>
              <div className={styles.textstyle}>电报</div>
              <div className={styles.centerstyle}>这里是占位</div>
            </div>
          </div>
        }
      ></Content>
      联系我们
    </MenuProvider>
  );
};

export default Community;
