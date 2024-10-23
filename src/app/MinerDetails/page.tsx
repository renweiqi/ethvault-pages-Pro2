"use client";
import React, { Suspense, useState, useEffect } from "react";
import { Button, Form, InputNumber, Row, Col, Select, message } from "antd";
import {
  DownOutlined,
  UpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import NativeBar from "../../../components/NativeBar";
import { getContract2 } from "../../../public/utils";
import { useSearchParams } from "next/navigation";
import { eth } from "../../../abi/ethabi";
import styles from "./index.module.scss";
import { ethers } from "ethers";

const { Option } = Select;

const initialHeight = "700px";
const minimizedHeight = "300px";

const MinerDetails = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MinerDetailsContent />
    </Suspense>
  );
};

const MinerDetailsContent = () => {
  const [form] = Form.useForm();
  const [expanded, setExpanded] = useState(false);
  const searchParams = useSearchParams();
  const minerData = searchParams?.get("MinerData") || null;
  const [NodestorageData, setNodestorageData] = useState<any>();
  const [language, setLanguage] = useState("EN");

  let miner;
  try {
    if (minerData) {
      miner = JSON.parse(minerData);
    } else {
      miner = null;
    }
  } catch (error) {
    console.error("解析 MinerData 时出错:", error);
    miner = null;
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // 根据 miner.id 获取对应的最小值和最大值
  const getMinMax = () => {
    if (!miner || !miner.id) {
      return { min: 1, max: Infinity };
    }
    switch (miner.id) {
      case 1:
        return { min: 1, max: 999 };
      case 2:
        return { min: 1000, max: 5999 };
      case 3:
        return { min: 6000, max: 14999 };
      case 4:
        return { min: 15000, max: 29999 };
      case 5:
        return { min: 30000, max: 59999 };
      case 6:
        return { min: 60000, max: 99999 };
      case 7:
        return { min: 100000, max: Infinity };
      default:
        return { min: 1, max: Infinity };
    }
  };

  // 验证输入值是否在限制范围内
  const validateInput = (rule: any, value: any) => {
    if (value === undefined || value === null || value === "") {
      return Promise.reject(language == "EN" ? 'Please enter the amount of recharge' : '请输入充值数量');
    }

    const numValue = Number(value);
    if (isNaN(numValue) || numValue <= 0) {
      return Promise.reject(language == "EN" ? 'Please enter a valid miner recharge quantity' : '请输入有效的矿机充值数量');
    }

    const { min, max } = getMinMax();

    if (numValue < min || numValue > max) {
      return Promise.reject(`${language == "EN" ? 'The miner recharge quantity should be in' : '请输入有效的矿机充值数量'} ${min} ${language == "EN" ? 'with' : '与'}  ${max} ${language == "EN" ? 'among' : '之间'}`);
    }
    return Promise.resolve();
  };

  const onFinish = async (values: any) => {
    try {
      const num = ethers.utils.parseUnits(values.USDTnum.toString(), 18);
      const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
      const result = await contract.deposit(num);
      message.success(language == "EN" ? 'Recharge successfully!' : '充值成功！');
      form.resetFields();
    } catch (error) {
      message.error(language == "EN" ? "Recharge failed, please try again later" : "充值失败，请稍后再试");
    }
  };

  const specifications = [
    { title: language == "EN" ? 'Rated computing power' : "额定算力", value: "180TH/s, -9%~+9%" },
    { title: language == "EN" ? 'Energy efficiency ratio' : "能效比", value: "23.5J/TH, -7%~+7%" },
    { title: language == "EN" ? 'Power dissipation' : "功耗", value: "3259W, -10%~+10%" },
    { title: language == "EN" ? 'Connection mode' : "连接方式", value: "RJ45 1G Ethernet" },
    { title: language == "EN" ? 'fan' : "风扇", value: "4 x 12050 FAN" },
    { title: language == "EN" ? 'Air volume, CFM' : "风量，CFM", value: "420 MAX" },
    { title: language == "EN" ? 'Operating temperature' : "运行温度", value: "-7°C ~ 39°C" },
    { title: language == "EN" ? 'Bare machine size' : "裸机尺寸", value: "L271mm x W198mm x H290mm" },
    { title: language == "EN" ? 'Carton size' : "外箱尺寸", value: "L420mm x W325mm x H430mm" },
    { title: language == "EN" ? 'Net weight' : "净重", value: "14.5 kg" },
    { title: language == "EN" ? 'Gross weight' : "毛重", value: "14.6 kg" },
    { title: language == "EN" ? 'Ac voltage input range, Volt' : "交流电压输入范围，Volt", value: "200 ~ 300 V" },
    { title: language == "EN" ? 'Ac power input frequency range: Hz' : "交流电源输入频率范围，Hz", value: "50 ~ 70 Hz" },
    { title: language == "EN" ? 'Ac current input range, Amp' : "交流电流输入范围，Amp", value: "16 A" },
  ];

  const handleChange = (value: string) => {
    // ETHAddress  BUSDaddress    合约地址
    // RPCURL                     链路节点
    // id                         币种
    if (value === "BEP20USDT") {
      // 币安智能链（BEP20）
      const id = 1;
      // const RPCURL = "https://bsc-dataseed.binance.org/";  //正式网
      const RPCURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";  //测试网
      const ETHAddress = "0x75101A8aC197E3Ea3A9eAeA92Bb98aa17Da3aa41";
      const BUSDaddress = "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
    } else if (value === "ERC20USDT") {
      // return message.warning("暂未支持该币种");

      // 以太坊（ERC20）
      const id = 2;
      // const RPCURL = 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID' //正式网
      const RPCURL = 'https://sepolia.infura.io/v3/YOUR-PROJECT-ID' //测试网
      const ETHAddress = "";
      const BUSDaddress = "";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
    } else if (value === "TRC20USDT") {
      // return message.warning("暂未支持该币种");

      // 波场
      const id = 3;
      // const RPCURL = 'https://api.trongrid.io'  //正式网
      const RPCURL = 'https://api.shasta.trongrid.io'  //测试网
      const ETHAddress = "";
      const BUSDaddress = "";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
    } else {
      // 币安智能链（BEP20）
      const id = 1;
      // const RPCURL = "https://bsc-dataseed.binance.org/";  //正式网
      const RPCURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";  //测试网
      const ETHAddress = "0x75101A8aC197E3Ea3A9eAeA92Bb98aa17Da3aa41";
      const BUSDaddress = "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814";
      const Nodestorage = {
        ETHAddress,
        BUSDaddress,
        RPCURL,
        id,
      };
      localStorage.setItem("Nodestorage", JSON.stringify(Nodestorage));
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    setNodestorageData(JSON.parse(localStorage.getItem("Nodestorage") || ''))
  }, []);
  return (
    <div className={styles.rewardcontainer}>
      <NativeBar title={language == "EN" ? 'Top up and reward' : "充值与奖励"} backUrl="/Machine" />
      <div className={styles.conter}>
        <div
          style={{
            height: expanded ? initialHeight : minimizedHeight,
            overflow: "hidden",
          }}
        >
          <div className={styles.contertitle}>{miner?.name}</div>
          <div className={styles.topup}>
            <span>{language == "EN" ? 'top up' : '充值'}</span>
            <span>{miner?.topupNum}</span>
          </div>
          <div className={styles.topup}>
            <span>{language == "EN" ? 'Interest' : '利息'}</span>

            <span>{miner?.interestname}</span>
          </div>
          <div>
            {specifications.map((item, index) => (
              <div key={index} className={styles.ComputingPower}>
                <div>{item.title}</div>
                <div>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.arrows}>
          {expanded ? (
            <UpOutlined
              className={`${styles.lconstyle} ${expanded ? "rotate-up" : ""}`}
              onClick={toggleExpand}
            />
          ) : (
            <DownOutlined
              className={`${styles.lconstyle} ${!expanded ? "rotate-down" : ""}`}
              onClick={toggleExpand}
            />
          )}
        </div>
      </div>
      <div className={styles.Content}>
        <Form
          name="amount"
          form={form}
          onFinish={onFinish}
          layout="vertical"
          style={{ color: "white" }}
        >
          <Row>
            <Col span={24}>
              <div className={styles.Contentinterest}>
                <span className={styles.Contentlabel}>{language == "EN" ? 'top up(USDT)' : '充值(USDT)'}</span>
                <div className="tikuan">
                  <Select
                    defaultValue="BEP20USDT"
                    onChange={handleChange}
                    suffixIcon={
                      <CaretDownOutlined style={{ color: "#E89E2C" }} />
                    }
                  >
                    {/* 多链 USDT（TRC20、ERC20、BEP20）：
                        TRC20 USDT 是基于 TRON 网络发行的 USDT，优点是手续费低。波长
                        ERC20 USDT 是基于以太坊网络的 USDT，通常手续费较高，因为以太坊的网络交易费用较贵。   
                        BEP20 USDT 是基于币安智能链（BSC）的 USDT，手续费相对较低。 
                    */}
                    <Option value="BEP20USDT">USDT-BEP20</Option>
                    <Option value="ERC20USDT">USDT-ERC20</Option>
                    <Option value="TRC20USDT">USDT-TRC20</Option>
                  </Select>
                </div>
              </div>
            </Col>
            <Col span={24} style={{ marginTop: 12, marginBottom: 12 }}>
              <Form.Item
                colon={false}
                name="USDTnum"
                rules={[
                  { required: true, message: language == "EN" ? 'Please enter quantity' : "请输入数量" },
                  { validator: validateInput },
                ]}
              >
                <InputNumber
                  placeholder={language == "EN" ? 'Please enter quantity' : "请输入数量"}
                  className={styles.inputstyle}
                  style={{ width: "100%" }}
                  step={1}
                  parser={(value) => Math.floor(Number(value || Infinity))}
                  formatter={(value) => `${value}`}
                  stringMode
                />
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ marginTop: 24 }}>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.buttonstyle}
                >
                  {language == "EN" ? 'Top Up' : "充值"}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default MinerDetails;
