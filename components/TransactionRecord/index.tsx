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

const Commonform = () => {
  const [transactionRecord, setTransactionRecord] = useState<any>([]);
  const [totalAmountone, setTotalAmountone] = useState<any>();
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
  };

  // 账号
  const ToaccountFun = (hex: string) => {
    // 假设address的长度至少为7，因为需要保留前四位和后三位
    if (hex.length < 7) {
      return hex; // 如果地址长度小于7，直接返回原始地址
    }
    // 截取前四位
    var prefix = hex.slice(0, 4);
    // 截取后四位
    var suffix = hex.slice(-4);
    // 替换中间部分为'***'
    var middle = '***';
    // 拼接结果
    return prefix + middle + suffix;
  };

  // 查询交易记录
  const TransactionRecordFun = async (addressnew: any) => {
    const rpcRequest = getRpcClient({ client, chain: bsc });
    const blockNumber = await eth_blockNumber(rpcRequest);
    try {
      // 旧合约
      const responseold = await axios.get(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.OldZSDPROJECTAddress}&topic0=0xc60b8ea4a07531ce8a53d61415f1cadc645c0debef6c4a308a7cd7d578f4dae6` +
        `&topic2=0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}&apikey=GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3`
      );

      // 新合约
      const response = await axios.get(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.ZSDPROJECTAddress}&topic0=0xc60b8ea4a07531ce8a53d61415f1cadc645c0debef6c4a308a7cd7d578f4dae6` +
        `&topic2=0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}&apikey=GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3`
      );

      // 新旧合约数组合并
      const NewOldList = responseold.data.result.concat(response.data.result);

      setTransactionRecord(NewOldList.reverse());
      let totalAmount = 0; // 定义一个变量来存储总金额
      // 总金额计算
      NewOldList.forEach((item: any) => {
        // 将topics[3]的十六进制转换为十进制数值
        const amountInWeiHex = item.topics[3].slice(2);
        const amountInWei = parseInt(amountInWeiHex, 16);
        // 累加到totalAmount
        totalAmount += amountInWei;
      });
      setTotalAmountone((totalAmount / 10 ** 18).toFixed(6))
      return response.data;
    } catch (error) {
      console.error("请求错误:", error);
    }
  };

  useEffect(() => {
    if (account) {
      setStorageAccount(account.address);
      let addressnew = account.address;
      TransactionRecordFun(addressnew);
    }
  }, [account]);

  return (
    <div className={styles.Content}>
      {
        <div>
          <div className={styles.ComputingPower}>
            <span className={styles.Contentlabel}>总金额/USDT：{totalAmountone}USDT</span>
          </div>
          <div className={styles.ComputingPower}>
            <span className={styles.AmountReceived}>账号</span>
            <span className={styles.AmountReceived}>到账金额/USDT</span>
            <span className={styles.AmountReceived}>到账时间</span>
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
                  border: '1px solid #d9d9e',
                }}
              >
                <List
                  dataSource={transactionRecord}
                  renderItem={(item: any) => (
                    <List.Item key={item.address}>
                      <div className={styles.ComputingPowercont}>
                        <span className={styles.AmountReceived}>{ToaccountFun(item.topics[2])}</span>
                        <span className={styles.AmountReceived}>{AmountReceivedFun(item.topics[3])}</span>
                        <span className={styles.AmountReceived}>{TimeStampFun(item.timeStamp)}</span>
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
      }
    </div>
  );
};

export default Commonform;