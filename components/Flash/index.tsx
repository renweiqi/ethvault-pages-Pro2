"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col, Select, message } from "antd";
import {
  createThirdwebClient,
  getContract,
  prepareContractCall,
  readContract,
  sendAndConfirmTransaction,
} from "thirdweb";
import axios from "axios";
import { useSendTransaction, useActiveAccount } from "thirdweb/react";
import { balanceOf } from "thirdweb/extensions/erc20";
import styles from "./index.module.scss";
const THIRDWEB_PROJECT_ID: any = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
export const client = createThirdwebClient({ clientId: THIRDWEB_PROJECT_ID });
import { APIConfig } from "../../abi/APIConfiguration";
import { bsc } from "thirdweb/chains";
import { ZSDSwapABI } from "../../abi/ZSDSwapABI";
import { USDTAbi } from "../../abi/USDTAbi";
import { ZSDABI } from "../../abi/ZSDABI";
import { ZSDPROJECTABI } from "../../abi/ZSDPROJECTABI";
const USDTAbinew: any = USDTAbi;
const contractwapABI: any = ZSDSwapABI;
const ZSDabi: any = ZSDABI;
const ZSDContractABI: any = ZSDPROJECTABI;

//USDT
const USDTContract = getContract({
  client: client,
  address: APIConfig.USDTaddress,
  chain: bsc,
  abi: USDTAbinew,
});

//ZSDSWAP
const ZSDSWAPContract = getContract({
  client: client,
  address: APIConfig.ZSDSwapAddress,
  abi: contractwapABI,
  chain: bsc,
});

const ZSD = getContract({
  client: client,
  address: APIConfig.ZSDaddress,
  abi: ZSDabi,
  chain: bsc,
});

const ZSDContractPoject = getContract({
  client: client,
  address: APIConfig.ZSDPROJECTAddress,
  chain: bsc,
  abi: ZSDContractABI,
});

const { Option } = Select;
const Commonform = () => {
  const [form] = Form.useForm();
  const account: any = useActiveAccount();
  const { mutate: sendTransaction, isPending } = useSendTransaction();
  const [price, SetPrice] = useState<any>(0);
  const [priceAccount, SetPriceAccount] = useState<any>(0);
  const [flg, setFlg] = useState<boolean>(false);
  const [finalEffort, SetFinalEffort] = useState<any>(0);

  const selectAfterone = (
    <Select defaultValue="ZSD" className="select-after">
      <Option value="ZSD">ZSD</Option>
    </Select>
  );

  const selectAftertwo = (
    <Select defaultValue="USDT" className="select-after">
      <Option value="USDT">USDT</Option>
    </Select>
  );

  const USDtoZSDnumFun = async () => {
    try {
      const USDtoZSDnum = await readContract({
        contract: ZSDSWAPContract,
        method: "function getAmountZSDOut(uint256) view returns (uint256)",
        params: [BigInt(1000000000000000000)],
      });
      const WeiBalance = USDtoZSDnum.toString();
      SetPrice(WeiBalance)
    } catch (error) {
      console.error("查询失败:", error);
    }
  };

  // 查询是否已经兑换币
  const WithdrawToken = async (address: string) => {
    try {
      const response = await axios.get(`https://api.zsd.cx/`, {
        params: { key: address },
        timeout: 5000, // 设置请求超时时间为5000毫秒（5秒）
      });
      let now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // getMonth() 返回的月份是从0开始的
      const day = now.getDate().toString().padStart(2, '0');
      // 构造所需格式的日期字符串
      const formattedDateTime = `${year}-${month}-${day}`;

      if (response.status === 200) {
        if (response.data.value == formattedDateTime) {
          setFlg(true)
        }
        return response.data;
      } else {
        console.error('查询失败，状态码：', response.status);
      }
    } catch (error) {
      console.error('请求错误:', error);
    }
  };

  // 将当前账号兑换时间存入
  const ConversionTime = async () => {
    const now = new Date();
    const dateString = now.toString();
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const postData = {
      "key": account.address,
      "value": formattedDate
    }

    const response = await axios.post('https://api.zsd.cx/', postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const onFinish = async (values: any) => {
    setFlg(true);
    try {
      // 当前总算力
      const ComputingPower = await readContract({
        contract: ZSDContractPoject,
        method: "users",
        params: [account.address],
      });
      const FinalEffortdata: any = (Number(ComputingPower[2]) / (10 ** 18)).toFixed(8)

      // 当前ZSD单价
      const USDtoZSDnum = await readContract({
        contract: ZSDSWAPContract,
        method: "function getAmountZSDOut(uint256) view returns (uint256)",
        params: [BigInt(1000000000000000000)],
      });
      const WeiBalance = 1 / (Number(USDtoZSDnum.toString()) / (10 ** 18))
      // 当前可提取 ||  今日可兑换： 算力的千分之五 / 当前ZSD单价 0.003  
      const formattedBalancetwo = ((FinalEffortdata * 0.005) / WeiBalance)

      if (Number(formattedBalancetwo) <= Number(values.USDT_one_amount)) {
        message.info("您的兑换不能超过今日可提取额度！");
        return
      }

      const amountStr = values.USDT_one_amount * 10 ** 18;
      const tx3 = prepareContractCall({
        contract: ZSDSWAPContract,
        method: "function zsdtTokenTousdtTokenSwap(uint256 amountzsdtToken)",
        params: [BigInt(amountStr)]
      });
      const result = await sendAndConfirmTransaction({
        transaction: tx3,
        account: account
      });
      form.setFieldsValue({
        USDT_one_amount: '',
        ZSD_two_amount: '',
      });
      ConversionTime()
    } catch (error) {
      form.setFieldsValue({
        USDT_one_amount: '',
        ZSD_two_amount: '',
      });
    }
  };

  const depositFunds = async (address: any) => {
    try {
      const ComputingPower = await readContract({
        contract: ZSDContractPoject,
        method: "users",
        params: [address],
      });
      const computingPowerSecond = Number(ComputingPower[3].toString()) / (10 ** 18)
      SetFinalEffort(computingPowerSecond)
    } catch (error) {
      console.error("查询余额失败:", error);
    }
  };

  useEffect(() => {
    if (account) {
      WithdrawToken(account.address)
      SetPriceAccount(account.address)
      depositFunds(account.address)
    }
  }, [account]);

  useEffect(() => {
    USDtoZSDnumFun()
  }, []);
  return (
    <>
      <div className={styles.Content}>
        <span className={styles.ContentText}>交易所</span>
        <Form
          name="amount"
          onFinish={onFinish}
          form={form}
          layout="vertical"
          style={{
            color: "white",
          }}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                label={<span className={styles.Contentlabel}>代币兑换</span>}
                colon={false}
                name="USDT_one_amount"
              >
                <Input
                  addonAfter={selectAfterone}
                  placeholder="请输入数量"
                  className={styles.inputstyle}
                  onChange={(e: any) => {
                    const tokenValue = (e.target.value) / price * 10 ** 18;

                    form.setFieldsValue({
                      ZSD_two_amount: tokenValue,
                    });
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                colon={false}
                name="ZSD_two_amount"
              >
                <Input
                  addonAfter={selectAftertwo}
                  className={styles.inputstyle}
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={flg ? styles.buttonstyleflg : styles.buttonstyle}
                  disabled={flg}
                >
                  {flg ? '今日已兑换' : '兑换'}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Commonform;