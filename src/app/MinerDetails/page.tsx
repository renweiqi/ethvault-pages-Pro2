"use client";

import React, { Suspense, useState } from "react";
import { Button, Form, InputNumber, Row, Col, Select, message } from "antd";
import {
  DownOutlined,
  UpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { APIConfig } from "../../../abi/APIConfiguration";
import NativeBar from "../../../components/NativeBar";
import { getContract2 } from "../../../public/utils";
import { useSearchParams } from "next/navigation";
import { eth } from "../../../abi/ethabi";
import styles from "./index.module.scss";
import { ethers } from "ethers";

const { Option } = Select;

const initialHeight = "400px";
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
      return Promise.reject("请输入数量");
    }

    const numValue = Number(value);
    if (isNaN(numValue) || numValue <= 0 || !Number.isInteger(numValue)) {
      return Promise.reject("请输入有效的正整数金额");
    }

    const { min, max } = getMinMax();

    if (numValue < min || numValue > max) {
      return Promise.reject("输入值超出范围，请输入有效的金额");
    }

    return Promise.resolve();
  };

  const onFinish = async (values: any) => {
    try {
      const num = ethers.utils.parseUnits(values.USDTnum.toString(), 18);
      const contract: any = await getContract2(APIConfig.ETHAddress, eth);
      const result = await contract.deposit(num);
      message.success("充值成功！");
      form.resetFields();
    } catch (error) {
      message.error("充值失败，请稍后再试");
    }
  };

  const specifications = [
    { title: "额定算力", value: "180TH/s, -9%~+9%" },
    { title: "能效比", value: "23.5J/TH, -7%~+7%" },
    { title: "功耗", value: "3259W, -10%~+10%" },
    { title: "连接方式", value: "RJ45 1G Ethernet" },
    { title: "风扇", value: "4 x 12050 FAN" },
    { title: "风量，CFM", value: "420 MAX" },
    { title: "运行温度", value: "-7°C ~ 39°C" },
    { title: "裸机尺寸", value: "L271mm x W198mm x H290mm" },
    { title: "外箱尺寸", value: "L420mm x W325mm x H430mm" },
    { title: "净重", value: "14.5 kg" },
    { title: "毛重", value: "14.6 kg" },
    { title: "交流电压输入范围，Volt", value: "200 ~ 300 V" },
    { title: "交流电源输入频率范围，Hz", value: "50 ~ 70 Hz" },
    { title: "交流电流输入范围，Amp", value: "16 A" },
  ];

  return (
    <div className={styles.rewardcontainer}>
      <NativeBar title="充值与奖励" backUrl="/Machine" />
      <div className={styles.conter}>
        <div
          style={{
            height: expanded ? initialHeight : minimizedHeight,
            overflow: "hidden",
          }}
        >
          <div className={styles.contertitle}>{miner?.name}</div>
          <div className={styles.topup}>
            <span>充值</span>
            <span>{miner?.topupNum}</span>
          </div>
          <div className={styles.topup}>
            <span>利息</span>
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
                <span className={styles.Contentlabel}>充值(USDT)</span>
                <div className="tikuan">
                  <Select
                    defaultValue="TRC20USDT"
                    suffixIcon={
                      <CaretDownOutlined style={{ color: "#E89E2C" }} />
                    }
                  >
                    {/* 多链 USDT（TRC20、ERC20、BEP20）：
                        TRC20 USDT 是基于 TRON 网络发行的 USDT，优点是手续费低。波场（TRON）网络
                        ERC20 USDT 是基于以太坊网络的 USDT，通常手续费较高，因为以太坊的网络交易费用较贵。
                        BEP20 USDT 是基于币安智能链（BSC）的 USDT，手续费相对较低。 
                    */}
                    <Option value="TRC20USDT">TRC20 USDT</Option>
                    <Option value="ERC20USDT">ERC20 USDT</Option>
                    <Option value="BEP20USDT">BEP20 USDT</Option>
                  </Select>
                </div>
              </div>
            </Col>
            <Col span={24} style={{ marginTop: 12, marginBottom: 12 }}>
              <Form.Item
                colon={false}
                name="USDTnum"
                rules={[
                  { required: true, message: "请输入数量" },
                  { validator: validateInput },
                ]}
              >
                <InputNumber
                  placeholder="请输入数量"
                  className={styles.inputstyle}
                  style={{ width: "100%" }}
                  min={getMinMax().min}
                  max={
                    getMinMax().max !== Infinity ? getMinMax().max : undefined
                  }
                  step={1}
                  parser={(value) => Math.floor(Number(value || "0"))}
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
                  充值
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
