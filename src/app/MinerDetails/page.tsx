"use client";

import React, { Suspense, useState } from "react";
import { Button, Form, Input, Row, Col, Select } from "antd";
import { DownOutlined, UpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useSearchParams } from "next/navigation";
import { APIConfig } from "../../../abi/APIConfiguration";
import NativeBar from "../../../components/NativeBar";
import { getContract2 } from "../../../public/utils";
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
  const searchParams = useSearchParams(); // 使用 hook 获取查询参数
  const minerData = searchParams?.get("MinerData") || null;
  console.log("minerData:", minerData);

  let miner;
  try {
    if (minerData) {
      miner = JSON.parse(minerData);
    } else {
      miner = null;
    }
    console.log("miner:", miner);
  } catch (error) {
    console.error("解析 MinerData 时出错:", error);
    miner = null;
  }


  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const specifications = [
    { title: "额定算力", value: "180TH/s, -9%~+9%" },
    { title: "能效比", value: "23.5J/TH, -7%~+7%" },
    { title: "功耗", value: "3259W, -10%~+10%" },
    { title: "连接方式", value: "RJ45 LLK 100M" },
    { title: "风扇", value: "4* 12050 FAN" },
    { title: "风量，CFM", value: "420MAX" },
    { title: "运行温度", value: "-7°C~39°C" },
    { title: "裸机尺寸", value: "L271mm x W198mm x H2" },
    { title: "外箱尺寸", value: "L420MM x W325mm x H4" },
    { title: "净重", value: "14.5kg" },
    { title: "毛重", value: "14.6kg" },
    { title: "交流电压输入范围，Volt", value: "200~300" },
    { title: "交流电源输入频率范围，Hz", value: "50~70" },
    { title: "交流电流输入范围，Amp", value: "16" },
  ];

  const onFinish = async (value: any) => {
    const contract: any = await getContract2(APIConfig.ETHAddress, eth);
    const num = ethers.utils.parseUnits(value.USDTnum, 18);
    const result = await contract.deposit(num);
    form.resetFields();
  };

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
                    defaultValue="USDT"
                    suffixIcon={<CaretDownOutlined style={{ color: "#E89E2C" }} />}
                  >
                    <Option value="USDT">USDT</Option>
                  </Select>
                </div>
              </div>
            </Col>
            <Col span={24} style={{ marginTop: 12, marginBottom: 12 }}>
              <Form.Item colon={false} name="USDTnum">
                <Input placeholder="请输入数量" className={styles.inputstyle} />
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ marginTop: 24 }}>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.buttonstyle}>
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