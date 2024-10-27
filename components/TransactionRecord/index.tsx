"use client";
import React, { useState, useEffect } from "react";
import { Empty, List } from "antd";
import { useActiveAccount } from "thirdweb/react";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei } from "../../public/utils";

interface Props {
  Data?: Array<any>;
}
const Commonform = ({ Data }: Props) => {
  const dataLength = Data || [];
  const [language, setLanguage] = useState("EN"); // Default language is English

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  return (
    <div className={styles.Content}>
      <div>
        <div className={styles.ComputingPower}>
          <div
            style={{
              width: "25%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "typology" : "类型"}
          </div>
          <div
            style={{
              width: "30%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "quantities" : "数量"}
          </div>
          <div
            style={{
              width: "30%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "status" : "状态"}
          </div>
        </div>

        <div className={styles.CustomerInformation}>
          {dataLength.length > 0 ? (
            <div
              id="scrollableDiv"
              style={{
                height: 250,
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
                          width: "25%",
                        }}
                      >
                        {item["isPrincipal"]
                          ? language === "EN"
                            ? "capital"
                            : "本金"
                          : language === "EN"
                          ? "Interest"
                          : "利息"}
                      </div>
                      <div
                        style={{
                          width: "30%",
                        }}
                      >
                        {Number(formatWei(item["amount"])).toFixed(3)}
                      </div>
                      <div
                        style={{
                          width: "30%",
                        }}
                      >
                        {item["approved"] ? (
                          <span style={{ color: "#0dbd8b" }}>
                            {language === "EN"
                              ? "Withdrawal Successful"
                              : "提现成功"}
                          </span>
                        ) : item["rejected"] ? (
                          <span style={{ color: "#dc362e" }}>
                            {language === "EN" ? " Rejected" : "已拒绝"}
                          </span>
                        ) : (
                          <span style={{ color: "#cf8f30" }}>
                            {language === "EN" ? "Pending approval" : "待批准"}
                          </span>
                        )}
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          ) : (
            <Empty
              description={
                <span style={{ color: "#FFFFFF" }}>
                  {language === "EN" ? "No data available" : "暂无数据"}
                </span>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Commonform;
