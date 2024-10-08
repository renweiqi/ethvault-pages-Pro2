"use client";
import React, { useState, useEffect } from "react";
import { Empty, List } from "antd";
import { useActiveAccount } from "thirdweb/react";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei } from "../../../../../public/utils";
import { copyToClipboard } from "../../../../../public/clipboard";

interface Props {
  Data?: Array<any>;
}
const ListItem = ({ Data }: Props) => {
  const dataLength = Data || [];
  return (
    <div className={styles.Content}>
      <div>
        <div className={styles.ComputingPower}>
          <div
            style={{
              width: "30%",
            }}
            className={styles.AmountReceived}
          >
            地址
          </div>
          <div
            style={{
              width: "50%",
            }}
            className={styles.AmountReceived}
          >
            余额(USDT)
          </div>
          <div
            style={{
              width: "20%",
            }}
            className={styles.AmountReceived}
          >
            时间
          </div>
        </div>

        <div className={styles.CustomerInformation}>
          {dataLength.length > 0 ? (
            <div
              id="scrollableDiv"
              style={{
                height: "100vh",
                overflow: "auto",
                padding: "0 5px",
                fontSize: "18px",
                color: "#FFFFFF",
              }}
            >
              <List
                dataSource={dataLength}
                renderItem={(item: any, index: number) => (
                  <List.Item key={index}>
                    <div className={styles.ComputingPowercont}>
                      <div
                        style={{
                          width: "30%",
                          textDecorationLine:"underline",
                          color:'#00ffaf'
                        }}
                        onClick={() => {
                          copyToClipboard(item.walletAddress);
                        }}
                      >
                        {item.walletAddress.slice(0, 4)}...
                        {item.walletAddress.slice(-4)}
                      </div>
                      <div
                        style={{
                          width: "50%",
                        }}
                      >
                        {Number(item.balance).toFixed(3)}
                      </div>
                      <div
                        style={{
                          width: "20%",
                        }}
                      >
                        {formatTimestamp(item.createTime / 1000)}
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          ) : (
            <Empty
              description={
                <span style={{ color: "#FFFFFF", marginTop: "30px" }}>
                  暂无数据
                </span>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
