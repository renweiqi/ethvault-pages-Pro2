"use client";
import React, { useState, useEffect } from "react";
import { Empty, List } from "antd";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei } from "../../public/utils";

interface Props {
  Data?: Array<any>;
}
const Commonform = ({ Data }: Props) => {
  const [language, setLanguage] = useState("EN"); // Default language is English
  const dataLength = Data || [];

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
              width: "30%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "quantity" : "数量"}

          </div>
          <div
            style={{
              width: "30%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "Interest" : "利息"}
          </div>
          <div
            style={{
              width: "40%",
            }}
            className={styles.AmountReceived}
          >
            {language === "EN" ? "Time" : "时间"}

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
                          width: "30%",
                        }}
                      >
                        {formatWei(item["principal"])}
                      </div>
                      <div
                        style={{
                          width: "30%",
                        }}
                      >
                        {Number(formatWei(item["interest"])).toFixed(3)}
                      </div>
                      <div
                        style={{
                          width: "40%",
                        }}
                      >
                        {formatTimestamp(item["timestamp"])}
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
