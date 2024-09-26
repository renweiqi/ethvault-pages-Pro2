"use client";
import React, { useState, useEffect } from "react";
import {
  getContract,
  readContract,
  prepareContractCall,
  createThirdwebClient,
} from "thirdweb";
import { Button, Form, Row, Col, Modal } from "antd";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { balanceOf } from "thirdweb/extensions/erc20";
import styles from "./index.module.scss";
import axios from "axios";
const THIRDWEB_PROJECT_ID: any = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
export const client = createThirdwebClient({ clientId: THIRDWEB_PROJECT_ID });
import { APIConfig } from "../../abi/APIConfiguration";
import { USDTAbi } from "../../abi/USDTAbi";
import { ZSDPROJECTABI } from "../../abi/ZSDPROJECTABI";
import { ZSDSwapABI } from "../../abi/ZSDSwapABI";
import { getRpcClient, eth_blockNumber, } from "thirdweb/rpc";
import { bsc } from "thirdweb/chains";
const contractABI: any = USDTAbi;
const ZSDContractABI: any = ZSDPROJECTABI;
const contractZSDSwapABI: any = ZSDSwapABI;

const USDTContract = getContract({
  client: client,
  address: APIConfig.USDTaddress,
  chain: bsc,
});

const ZSDContract = getContract({
  client: client,
  address: APIConfig.ZSDaddress,
  chain: bsc,
  abi: contractABI,
});

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
  const [form] = Form.useForm();
  const account = useActiveAccount();
  const [zSDBalance, setZSDBalance] = useState<any>();
  const [uSDTBalance, setUSDTBalance] = useState<any>();
  const [Finaleffort, setFinalEffort] = useState<any>();
  const [storedAccount, setStoredAccount] = useState<any>(null);
  const { mutate: sendTransaction, isPending } = useSendTransaction();
  const [price, SetPrice] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [convertedDatalist, setConvertedDatalist] = useState<any>([]);
  const [withdrawableZSD, setWithdrawableZSD] = useState<any>('');

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const TimeConversion = (timeStamp: any) => {
    const date = new Date(timeStamp * 1000);
    date.setUTCHours(date.getUTCHours() + 8);
    let year = date.getUTCFullYear();
    let month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    let day = date.getUTCDate().toString().padStart(2, '0');
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let formattedTime = `${year}-${month}-${day}:${hours}:${minutes}.${seconds}`;
    return formattedTime;
  }


  const sortableTimeFormat = (timeString: any) => {
    const timeStampDecimal = parseInt(timeString, 16);
    const date = new Date(timeStampDecimal * 1000);
    date.setUTCHours(date.getUTCHours() + 8);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const formattedTime = `${year}${month}${day}${hours}${minutes}${seconds}`;
    return Number(formattedTime)
  }

  const parseTimeStamp = (dateStr: any) => {
    return new Date(dateStr);
  }

  // ***************************************************************************** 查询USDT充值交易记录 ************************************************************************************************************
  const TransactionRecordFun = async (addressnew: any) => {
    const rpcRequest = getRpcClient({ client, chain: bsc });
    const blockNumber = await eth_blockNumber(rpcRequest);
    try {
      // 新合约USDT充值记录
      const responseUSDT = await axios.get(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.ZSDPROJECTAddress}&topic0=0x7adbed9e4ac398e2dcb3546bda9a9a53b6efdf5febefec1418b4d9abcdf49436` +
        `&topic1=0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}&apikey=GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3`
      );
      const convertedDatausdt = responseUSDT.data.result.map((item: any) => {
        const topics3Decimal = (parseInt(item.topics[2].slice(2), 16) / 10 ** 18) * 2;
        return {
          topics3Decimal,
          timeStampDate: (TimeConversion(item.timeStamp)),
        };
      });

      // 新合约ZSD + USDT充值记录
      const responseZSDUSDT = await axios.get(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.ZSDPROJECTAddress}&topic0=0x003cd7481afd8c8fa901e191014d2357fabf9396e60fcf231eeed13277b393d0` +
        `&topic1=0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}&apikey=GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3`
      );
      const convertedZSDUSDTData = responseZSDUSDT.data.result.map((item: any) => {
        const topics3Decimal = (parseInt(item.topics[2].slice(2), 16) / (10 ** 18)) * 9;
        return {
          topics3Decimal,
          timeStampDate: (TimeConversion(item.timeStamp)),
        };
      });

      // 帮好友充值记录
      const responseFriendAccount = await axios.get(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.ZSDPROJECTAddress}&topic0=0xa08ebe37ba7b06a402e2f3f0d9ab351c224bcacba59b6c15ba5d0e90fb2bc5a6` +
        `&topic1=0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}&apikey=GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3`
      );
      const convertedFriendAccountData = responseFriendAccount.data.result.map((item: any) => {
        const topics3Decimal = (parseInt(item.topics[2].slice(2), 16) / (10 ** 18)) * 9;
        return {
          topics3Decimal,
          timeStampDate: (TimeConversion(item.timeStamp)),
        };
      });

      // 旧合约USDT充值记录
      const response = await axios.get(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.OldZSDPROJECTAddress}&topic0=0x7adbed9e4ac398e2dcb3546bda9a9a53b6efdf5febefec1418b4d9abcdf49436` +
        `&topic1=0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}&apikey=GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3`
      );
      const convertedDataList = response.data.result.map((item: any) => {
        const topics3Decimal = (parseInt(item.topics[2].slice(2), 16) / 10 ** 18) * 2;
        return {
          topics3Decimal,
          timeStampDate: (TimeConversion(item.timeStamp)),
        };
      });

      // 旧合约ZSD+USDT充值记录
      const responseZSD = await axios.get(
        `https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=${blockNumber}&address=${APIConfig.OldZSDPROJECTAddress}&topic0=0x003cd7481afd8c8fa901e191014d2357fabf9396e60fcf231eeed13277b393d0` +
        `&topic1=0x000000000000000000000000${addressnew.substring(2).replace(/\s+/g, '')}&apikey=GG84IKHVXXQUE9JQMAT6N6UXAFHNFBCDM3`
      );
      const convertedDataZSDList = responseZSD.data.result.map((item: any) => {
        const topics3Decimal = (parseInt(item.topics[2].slice(2), 16) / (10 ** 18)) * 2;
        return {
          topics3Decimal,
          timeStampDate: (TimeConversion(item.timeStamp)),
        };
      });

      // 关联USDT和ZSD充值记录
      const combinedJsonArray = convertedDatausdt.concat(convertedZSDUSDTData, convertedFriendAccountData, convertedDataList, convertedDataZSDList);


      setConvertedDatalist(combinedJsonArray)
    } catch (error) {
      console.error("请求错误:", error);
    }
  };

  const onFinish = async () => {
    try {
      const transaction = prepareContractCall({
        contract: ZSDContractPoject,
        method: "function withdraZSDFunds()",
        params: [],
      });
      const result = await sendTransaction(transaction);
    } catch (error) {
      console.error("提取失败:", error);
    }
  };

  // USDTD兑换ZSD
  const USDtoZSDnumFun = async () => {
    try {
      const USDtoZSDnum = await readContract({
        contract: ZSDSwap,
        method: "function getAmountZSDOut(uint256) view returns (uint256)",
        params: [BigInt(1000000000000000000)],
      });
      const WeiBalance = USDtoZSDnum.toString();

      SetPrice(WeiBalance);
    } catch (error) {
      console.error("查询失败:", error);
    }
  };

  const depositFunds = async () => {
    try {
      // *************************************************************************查询用户USDT余额*****************************************************************************
      const USDTBalance = await readContract({
        contract: USDTContract,
        method: "function balanceOf(address) view returns (uint256)",
        params: [storedAccount.address],
      });
      const WeiBalance = BigInt(USDTBalance.toString());
      const USDT_DECIMALS = 6;
      const usdtBalance = WeiBalance / BigInt(10 ** (18 - USDT_DECIMALS));
      const Compareone = parseFloat(usdtBalance.toString());
      const formattedBalance = Compareone == 0 ? Compareone : (parseFloat(usdtBalance.toString()) / 10 ** USDT_DECIMALS).toFixed(2);
      setUSDTBalance(formattedBalance);

      // *************************************************************************查询用户ZSD余额*****************************************************************************
      try {
        const ZSDBalance = await balanceOf({
          contract: ZSDContract,
          address: storedAccount.address,
        });
        const WeiBalancetwo = BigInt(ZSDBalance.toString());
        const USDT_DECIMALStwo = 6;
        const usdtBalancetwo = WeiBalancetwo / BigInt(10 ** (18 - USDT_DECIMALStwo));
        const Compare = parseFloat(usdtBalancetwo.toString());
        const formattedBalancetwo = Compare == 0 ? Compare : (parseFloat(usdtBalancetwo.toString()) / 10 ** USDT_DECIMALStwo).toFixed(2);
        setZSDBalance(formattedBalancetwo);
      } catch (error) {
        console.log(error)
      }
      const USDtoZSDnum = await readContract({
        contract: ZSDSwap,
        method: "function getAmountZSDOut(uint256) view returns (uint256)",
        params: [BigInt(1000000000000000000)],
      });

      // *************************************************************************查询个人中心总算力*****************************************************************************
      const ComputingPower = await readContract({
        contract: ZSDContractPoject,
        method: "users",
        params: [storedAccount.address],
      });
      const FinalEffortdata = Number(ComputingPower[2]) / (10 ** 18)
      // 总算力
      setFinalEffort(FinalEffortdata.toFixed(8));

      // *************************************************************************计算可提取的ZSD*****************************************************************************
      const withdrawableZSD = await readContract({
        contract: ZSDContractPoject,
        method: "function getWithdraZSDDayFunds(address userAddress) returns (uint256)",
        params: [storedAccount.address],
      });
      const valueInEther = Number(withdrawableZSD.toString()) / 10 ** 18;
      setWithdrawableZSD(valueInEther.toFixed(8))
    } catch (error) {
      console.error("查询余额失败:", error);
    }
  };

  useEffect(() => {
    USDtoZSDnumFun();

    if (storedAccount) {
      depositFunds();
    }

    if (account) {
      // 设置定时任务，每隔1分钟执行一次depositFunds
      const intervalId = setInterval(() => {
        depositFunds();
      }, 3000); // 60000毫秒 = 1分钟
      // 组件卸载时清除定时器
      return () => clearInterval(intervalId);
    }
  }, [account, storedAccount]);

  useEffect(() => {
    if (account) {
      setStoredAccount(account);
      TransactionRecordFun(account.address);
    }
  }, [account]);

  return (
    <>
      <div className={styles.Content}>
        <span className={styles.ContentText}>我的账户</span>
        <div className={styles.currencycontainer}>
          <div className={styles.currencyrow}>
            <div className={styles.USDTnuber}>{uSDTBalance}</div>
            <div className={styles.USDTstyle}>本金（USDT）</div>
          </div>
          <div className={styles.currencyrow}>
            <div className={styles.USDTnuber}>{zSDBalance}</div>
            <div className={styles.USDTstyle}>利息(USDT)</div>
          </div>
        </div>
      </div>

      {/* <div className={styles.Content}>
        <span className={styles.ContentText}>提取代币</span>
        <div className={styles.ContentInstructions}>(这里是提取代币的说明)</div>
        <Form
          name="amount"
          onFinish={onFinish}
          layout="vertical"
          form={form}
          style={{
            color: "white",
          }}
        >
          <Row>
            <Col span={24}>
              <div className={styles.labelContainer}>
                <span className={styles.labelLeft}>我的总算力</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item colon={false} name="USDT_two_amount">
                <div className={styles.inputstyle2}>
                  {Finaleffort}
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={styles.labelContainer} style={{ margin: "auto" }}>
                <span className={styles.labelLeft}>
                  可提取ZSD:{" "}
                  <span className={styles.labelLeftone}>
                    {withdrawableZSD}
                  </span>
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} className={styles.cost}>
              <span className={styles.CalculatedValue}>
                <span className={styles.labelLeftZSD}>当前ZSD价值:  </span> <span className={styles.inputstyle3}>1USDT={(price / 10 ** 18).toFixed(2)}ZSD</span>
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.buttonstyle}
                >
                  提取
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  className={styles.buttonstyle}
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  充值明细
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div >
      
      <Modal
        title=""
        open={isModalOpen}
        onCancel={handleCancel}
        destroyOnClose={true}
        width={'90%'}
        style={{
          maxHeight: '60vh',
          overflowY: "auto",
        }}
        footer={
          <div>
            <Button
              onClick={handleCancel}
              className={styles.Cancelstyle}
              type="primary"
            >
              取消
            </Button>
          </div>
        }
      >
        <div className={styles.conters}>
          <span>算力</span>
          <span>时间</span>
        </div>

        <div>
          {convertedDatalist.map((item: any, index: any) => (
            <div key={index} className={styles.contersone}>
              <span>{item.topics3Decimal}</span>
              <span>{item.timeStampDate}</span>
            </div>
          ))}
        </div>
      </Modal > */}
    </>
  );
};

export default Commonform;