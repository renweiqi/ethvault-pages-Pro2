"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import axios from "axios";
import { Spin } from "antd";
import Image from "next/image";
import {
  getContract,
  readContract,
  createThirdwebClient,
} from "thirdweb";
const THIRDWEB_PROJECT_ID: any = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
export const client = createThirdwebClient({ clientId: THIRDWEB_PROJECT_ID });
import { APIConfig } from "../../abi/APIConfiguration";
import { ZSDSwapABI } from "../../abi/ZSDSwapABI";
const contractZSDSwapABI: any = ZSDSwapABI;
import { bsc } from "thirdweb/chains";

const ZSDSwap = getContract({
  client: client,
  address: APIConfig.ZSDSwapAddress,
  abi: contractZSDSwapABI,
  chain: bsc,
});

const Market = () => {
  const [currencies, setCurrencies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrencies([]);
      getCurrenciesData();
    }, 30000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getCurrenciesData();
  }, []);

  const getCurrenciesData = async () => {
    try {
      setLoading(true);
      const ids = "bitcoin,ethereum,binancecoin,ripple,solana,dogecoin";
      const response = await axios.get(
        `https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI`,
        {
          params: {
            category: "onekey-gainers",
            sparkline: true,
            sparklinePoints: 100,
            ids: ids,
          },
          headers: {
            "X-Onekey-Request-Currency": "usd",
          },
        }
      );
      setCurrencies(response.data.data.coins);
      setLoading(false);
    } catch (error) {
      console.error("请求错误:", error);
      setLoading(false);
      setCurrencies([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.marketstyle}>行        情</div>

      <div className={styles.titleContent}>
        <div className={styles.marketInfo}>
          <span>市值</span>
        </div>

        <div className={styles.priceInfo}>
          <span className={styles.newtext}>最近价</span>
        </div>
        <div className={styles.fluctuateInfo}>
          <span className={styles.newtext}>24H波动</span>
        </div>
      </div>
      <Spin spinning={loading} tip="请稍等，数据实时刷新中...">
        {currencies.slice(0, 8).map((currency: any, index: any) => (
          <div key={index} className={styles.currencyItem}>
            <div className={styles.currencyInfo}>
              <Image
                src={currency.name == 'Zsd' ? `https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Zsd.png` : currency.iconUrl}
                alt={currency.name}
                className={styles.btnIcon}
                width={48}
                height={48}
              />
              <div>
                <div className={styles.currencyName}>{currency.symbol}</div>
                <div className={styles.currencyMarketCap}>
                  ${(currency.name == 'Zsd' ? 5040000 : currency.marketCap / 1e9).toFixed(2)}B
                </div>
              </div>
            </div>

            <div className={styles.currencyPrice}>
              ${
                currency.name == 'Zsd' ? (currency.price) : (Number(currency.price).toFixed(2))
              }
            </div>

            <div
              className={styles.currencyChange}
              style={{
                marginTop: 20,
                color:
                  currency.change >= 0 ? "#52B05AFF" : "#EF2517"
              }}
            >
              {currency.change >= 0 ? "+" : " "}
              {currency.name == 'Zsd' ? 0.05 : currency.change}%
            </div>
          </div>
        ))}
      </Spin>
    </div>
  );
};

export default Market;
