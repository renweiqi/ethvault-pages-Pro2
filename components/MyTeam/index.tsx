"use client";
import React, { useState, useEffect } from "react";
import {
  createThirdwebClient,
} from "thirdweb";
import { Empty, List } from 'antd';
import { getRpcClient, eth_blockNumber } from "thirdweb/rpc";
import { useActiveAccount } from "thirdweb/react";
import styles from "./index.module.scss";
import axios from "axios";
const THIRDWEB_PROJECT_ID: any = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
export const client = createThirdwebClient({ clientId: THIRDWEB_PROJECT_ID });
import { APIConfig } from "../../abi/APIConfiguration";
import { bsc } from "thirdweb/chains";
import { ZSDPROJECTABI } from "../../abi/ZSDPROJECTABI";
import { ZSDSwapABI } from "../../abi/ZSDSwapABI";
const ZSDContractABI: any = ZSDPROJECTABI;
const contractZSDSwapABI: any = ZSDSwapABI;

import {
  readContract,
  getContract
} from "thirdweb";

const ZSDContractPoject = getContract({
  client: client,
  address: APIConfig.ZSDPROJECTAddress,
  chain: bsc,
  abi: ZSDContractABI,
});

const ZSDSwap = getContract({
  client: client,
  address: APIConfig.ZSDSwapAddress,
  abi: contractZSDSwapABI,
  chain: bsc,
});

const Commonform = () => {
  const [transactionRecord, setTransactionRecord] = useState<any>([]);
  const [storageAccount, setStorageAccount] = useState<any>('');
  const account: any = useActiveAccount();

  // 到账时间
  const TimeStampFun = (time: any) => {
    // timeStamp 是一个十六进制的时间戳
    const timeStampHex = time;
    // 转换十六进制为十进制
    const timeStampDecimal = parseInt(timeStampHex, 16);
    // 将 Unix 时间戳转换为 Date 对象
    const date = new Date(timeStampDecimal * 1000);
    // 手动构建所需的日期格式
    const formattedDate = [
      date.getFullYear(),
      ('0' + (date.getMonth() + 1)).slice(-2),
      ('0' + date.getDate()).slice(-2)
    ].join('-') + ' ' +
      [
        ('0' + date.getHours()).slice(-2),
        ('0' + date.getMinutes()).slice(-2)
      ].join(':');
    return formattedDate; // 返回所需的日期格式
  };

  // 到账金额
  const AmountReceivedFun = (hex: string) => {
    // 去除 '0x' 前缀
    const amountInWeiHex = hex.slice(2);
    // 十六进制转十进制
    const amountInWei = parseInt(amountInWeiHex, 16);
    // 转换为以太币 (1 ether = 10^18 wei)
    const amountInEther = amountInWei / Math.pow(10, 18);
    // 返回转换后的金额，以便在 JSX 中使用
    return amountInEther.toFixed(2); // 使用 toFixed 来格式化小数点后两位
  }

  // 账号
  const ToaccountFun = (hex: string) => {
    // 获取后八位
    let lastEightChars = hex.slice(-8);
    // 构建前面的三个星号
    let maskedPart = '***';
    // 合并并返回遮蔽后的字符串
    return maskedPart + lastEightChars;
  };

  const shortenAddress = (address: any) => {
    // 假设address的长度至少为7，因为需要保留前四位和后三位
    if (address.length < 7) {
      return address; // 如果地址长度小于7，直接返回原始地址
    }
    // 截取前四位
    var prefix = address.slice(0, 4);
    // 截取后四位
    var suffix = address.slice(-4);
    // 替换中间部分为'***'
    var middle = '***';
    // 拼接结果
    return prefix + middle + suffix;
  }

  const TransactionRecordFun = async (addressnew: any) => {
    const rpcRequest = getRpcClient({ client, chain: bsc });
    const blockNumber = await eth_blockNumber(rpcRequest);
    try {
      // 查询ZSD兑换USDT的金额
      const USDtoZSDnum = await readContract({
        contract: ZSDSwap,
        method: "getAmountZSDOut",
        params: [BigInt(1000000000000000000)],
      });
      const WeiBalanceone = USDtoZSDnum.toString();

      // 构建请求URL(旧合约)
      const apiUrlold = new URL(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.OldZSDPROJECTAddress}&topic0=0x0a31ee9d46a828884b81003c8498156ea6aa15b9b54bdd0ef0b533d9eba57e55`,
      );
      apiUrlold.searchParams.append('topic2', `0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}`);
      apiUrlold.searchParams.append('apikey', 'GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3');

      // 构建请求URL(新合约)
      const apiUrl = new URL(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.ZSDPROJECTAddress}&topic0=0x0a31ee9d46a828884b81003c8498156ea6aa15b9b54bdd0ef0b533d9eba57e55`,
      );
      apiUrl.searchParams.append('topic2', `0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}`);
      apiUrl.searchParams.append('apikey', 'GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3');

      // 发送请求并获取数据(旧合约)
      const responseold = await axios.get(apiUrlold.toString());
      // 发送请求并获取数据(新合约)
      const response = await axios.get(apiUrl.toString());
      const logs = responseold.data.result.concat(response.data.result);

      // 处理数据
      const newArray = await Promise.all(logs.map(async (item: any, index: any) => {
        const regex = /0x000000000000000000000000/;
        // 查询直推人数和算力
        const ComputingPower = await readContract({
          contract: ZSDContractPoject,
          method: "users",
          params: [item.topics[1].replace(regex, '0x')],
        });
        // 计算直推人数和算力
        const DirectNumberPeople = ComputingPower[1].toString();
        const FinalEffortdata = (Number(ComputingPower[2]) / (10 ** 18) + Number(ComputingPower[3]) / Number(WeiBalanceone));
        return {
          address: shortenAddress(item.topics[1]),
          timeStamp: TimeStampFun(item.timeStamp),
          DirectNumberPeople,
          FinalEffortdata,
        };
      }));
      setTransactionRecord(newArray.reverse())
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    if (account) {
      setStorageAccount(account.address)
      let addressnew = account.address
      TransactionRecordFun(addressnew)
    }
  }, [account]);

  return (
    <div className={styles.Content}>
      <div>
        <div className={styles.ComputingPower}>
          <span className={styles.AmountReceived}>数量（USDT）</span>
          <span className={styles.AmountReceived}>利息</span>
          <span className={styles.AmountReceived}>时间</span>
        </div>

        <div className={styles.CustomerInformation}>
          {transactionRecord.length > 0 ? (
            <div
              id="scrollableDiv"
              style={{
                height: 250,
                overflow: 'auto',
                padding: '0 5px',
                fontSize: '18px',
                color: '#FFFFFF',
              }}
            >
              <List
                dataSource={transactionRecord}
                renderItem={(item: any) => (
                  <List.Item key={item.address}>
                    <div className={styles.ComputingPowercont}>
                      <span>{shortenAddress(item.address)}</span>
                      <span>{item.DirectNumberPeople}</span>
                      <span>{item.timeStamp}</span>
                      <span>{item.FinalEffortdata.toFixed(2)}</span>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          ) : (
            <Empty description={
              <span style={{ color: '#FFFFFF' }}>暂无数据</span>
            } />
          )}
        </div>
      </div>
    </div>
  );
};

export default Commonform;
