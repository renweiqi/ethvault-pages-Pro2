import React from "react";
import { Row, Col } from "antd";
import styles from "./index.module.scss";

const VideoPlayer = () => {
  return (
    <Row justify="center" align="middle" className={styles.Row}>
      <Col>
        <video className={styles.video} width="100%" controls>
          <source
            src="https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/shequone.mp4"
            type="video/mp4"
          />
          您的浏览器不支持视频标签。
        </video>
      </Col>
    </Row>
  );
};

export default VideoPlayer;
