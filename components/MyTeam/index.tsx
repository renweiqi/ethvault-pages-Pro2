"use client";
import React, { useState, useEffect } from "react";
import { Empty, List, Statistic } from "antd";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei } from "../../public/utils";

interface Props {
  Data?: Array<any>;
}
const Commonform = ({ Data }: Props) => {
  const [language, setLanguage] = useState("EN"); // Default language is English
  const dataLength = Data || [];
  const { Countdown } = Statistic;

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
              width: "40%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "quantity" : "数量"}

          </div>
          <div
            style={{
              width: "35%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "Interest" : "利息"}
          </div>
          <div
            style={{
              width: "25%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "unlock Time" : "解锁时间"}

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
                          width: "40%",
                        }}
                      >
                        {formatWei(item["principal"])}
                      </div>
                      <div
                        style={{
                          width: "35%",
                        }}
                      >
                        {(Number(formatWei(item["interest"])) - Number(formatWei(item["frozenInterest"]))).toFixed(3) }
                      </div>
                      <div
                        style={{
                          width: "25%",
                        }}
                      >
                        <Countdown value={item["timestamp"].toString() * 1000 + 2592000000} />
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          ) : (
            <Empty
              description={<span style={{ color: "#FFFFFF" }}>{language === "EN" ? "No data available" : "暂无数据"}</span>}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Commonform;
