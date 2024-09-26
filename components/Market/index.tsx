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

      // 当前币价格
      // const USDtoZSDnum = await readContract({
      //   contract: ZSDSwap,
      //   method: "function getAmountZSDOut(uint256) view returns (uint256)",
      //   params: [BigInt(1000000000000000000)],
      // });
      // const WeiBalance = USDtoZSDnum.toString();
      // const list = {
      //   coingeckoId: "bitcoin",
      //   image: "https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/coin.png",
      //   marketCap: 5040000,
      //   name: "Zsd",
      //   price: (1 / (Number(WeiBalance) / (10 ** 18))).toFixed(5),
      //   priceChangePercentage1H: 1.0204692461855924,
      //   priceChangePercentage7D: -19.93160601388554,
      //   change: 0.05,
      //   serialNumber: 1,
      //   sparkline: [
      //     69578.0868687256, 68779.36958477591, 67978.65056486202, 66843.5884601612,
      //     67431.81775217736, 67282.62285948903, 67422.2458091223, 66667.23020827338,
      //   ],
      //   symbol: "btc",
      //   totalVolume: 105305152504
      // };
      // const updatedCurrencies = [list, ...response.data.data.coins];

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
      <div className={styles.marketstyle}>行情</div>

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
                <div className={styles.currencyName}>{currency.name}</div>
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
