"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import axios from "axios";
import { Spin } from "antd";
import Image from "next/image";

const Market = () => {
  const [currencies, setCurrencies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [language, setLanguage] = useState("EN"); // 默认语言为英文

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrencies([]);
      getCurrenciesData();
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getCurrenciesData();
  }, []);

  const getCurrenciesData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 6,
            page: 1,
            sparkline: false,
          },
        }
      );
      setCurrencies(response.data);
      setLoading(false);
    } catch (error) {
      console.error("请求错误:", error);
      setLoading(false);
      setCurrencies([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.marketstyle}>{language === "EN" ? "Market" : "行情"}</div>

      <div className={styles.titleContent}>
        <div className={styles.marketInfo}>
          <span>{language === "EN" ? 'MarketCap' : '市值'}</span>
        </div>

        <div className={styles.priceInfo}>
          <span className={styles.newtext}>{language === "EN" ? 'Last price' : '最近价'}</span>
        </div>
        <div className={styles.fluctuateInfo}>
          <span className={styles.newtext}>{language === "EN" ? '24H change' : '24H波动'}</span>
        </div>
      </div>
      <Spin spinning={loading} tip={language === "EN" ? "Please wait, the data is being refreshed..." : "请稍等，数据实时刷新中..."} >
        {currencies.map((currency: any, index: any) => (
          <div key={index} className={styles.currencyItem}>
            <div className={styles.currencyInfo}>
              <Image
                src={currency.image}
                alt={currency.name}
                className={styles.btnIcon}
                width={48}
                height={48}
              />
              <div>
                <div className={styles.currencyName}>{currency.symbol.toUpperCase()}</div>
                <div className={styles.currencyMarketCap}>
                  ${(currency.market_cap / 1e9).toFixed(2)}B
                </div>
              </div>
            </div>

            <div className={styles.currencyPrice}>
              ${Number(currency.current_price).toFixed(2)}
            </div>

            <div
              className={styles.currencyChange}
              style={{
                marginTop: 20,
                color: currency.price_change_percentage_24h > 0 ? "#52B05AFF" : "#EF2517"
              }}
            >
              {currency.price_change_percentage_24h > 0 ? "+" : ""}
              {currency.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        ))}
      </Spin>
    </div>
  );
};

export default Market;
