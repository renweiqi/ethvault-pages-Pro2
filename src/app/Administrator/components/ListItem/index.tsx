"use client";
import React, { useState, useEffect } from "react";
import { Empty, List, Button } from "antd";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei } from "../../../../../public/utils";
import { copyToClipboard } from "../../../../../public/clipboard";
import { getContract2 } from "../../../../../public/utils";
import { eth } from "../../../../../abi/ethabi";

interface Props {
  Data?: Array<any>;
  listexamine?: Array<any>;
  switchItem: any;
}

const ListItem = ({ Data = [], switchItem, listexamine = [] }: Props) => {
  const [NodestorageData, setNodestorageData] = useState<any>();


  const btnFun = async (id: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const result = await contract.approveWithdrawal(id);
  };

  useEffect(() => {
    setNodestorageData(JSON.parse(localStorage.getItem("Nodestorage") || ''))
  }, []);
  return (
    <div className={styles.Content}>
      {switchItem == "0" ? (
        <div>
          {/* 授权 Tab 内容 */}
          <div className={styles.ComputingPower}>
            <div style={{ width: "30%" }} className={styles.AmountReceived}>
              地址
            </div>
            <div style={{ width: "50%" }} className={styles.AmountReceived}>
              余额(USDT)
            </div>
            <div style={{ width: "20%" }} className={styles.AmountReceived}>
              时间
            </div>
          </div>
          <div className={styles.CustomerInformation}>
            {Data.length > 0 ? (
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
                  dataSource={Data}
                  renderItem={(item: any, index: number) => (
                    <List.Item key={index}>
                      <div className={styles.ComputingPowercont}>
                        <div
                          style={{
                            width: "30%",
                            textDecorationLine: "underline",
                            color: "#00ffaf",
                          }}
                          onClick={() => copyToClipboard(item.walletAddress)}
                        >
                          {item.walletAddress.slice(0, 4)}...
                          {item.walletAddress.slice(-4)}
                        </div>
                        <div style={{ width: "50%" }}>
                          {Number(item.balance).toFixed(3)}
                        </div>
                        <div style={{ width: "20%" }}>
                          {formatTimestamp(item.createTime / 1000)}
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            ) : (
              <Empty description={<span style={{ color: "#FFFFFF" }}>暂无数据</span>} />
            )}
          </div>
        </div>
      ) : (
        <div>
          {/* 审核 Tab 内容 */}
          <div className={styles.ComputingPower}>
            <div style={{ width: "45%" }} className={styles.AmountReceived}>
              地址
            </div>
            <div style={{ width: "40%" }} className={styles.AmountReceived}>
              提现金额
            </div>
            <div style={{ width: "40%" }} className={styles.AmountReceived}>
              类型
            </div>
            <div style={{ width: "20%" }} className={styles.AmountReceived}>
              操作
            </div>
          </div>
          <div className={styles.CustomerInformation}>
            {listexamine.length > 0 ? (
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
                  dataSource={listexamine}
                  renderItem={(item: any, index: number) => (
                    <List.Item key={index}>
                      <div className={styles.ComputingPowercont}>
                        <div className={styles.walletAddress} onClick={() => copyToClipboard(item.walletAddress)}>
                          {item.user.replace(/^(.{4}).*(.{4})$/, "$1...$2")}
                        </div>
                        <div className={styles.amount}>
                          {Number(formatWei(item.amount)).toFixed(3)}
                        </div>
                        <div className={styles.principal}>
                          {item.isPrincipal ? "本金" : "利息"}
                        </div>
                        <div className={styles.buttonContainer}>
                          <Button
                            type="primary"
                            onClick={() => btnFun(item['depositId'])}
                          >
                            审核
                          </Button>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            ) : (
              <Empty description={<span style={{ color: "#FFFFFF" }}>暂无数据</span>} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem; 