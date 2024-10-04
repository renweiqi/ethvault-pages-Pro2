"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col, Select, message } from "antd";

import { useSendTransaction, useActiveAccount } from "thirdweb/react";
import { CaretDownOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

import {getContract2} from "../../public/utils"
import { APIConfig } from "../../abi/APIConfiguration";
import { eth } from "../../abi/ethabi";
import {  formatWei } from "../../public/utils";
import { ethers } from "ethers";

const { Option } = Select;
const Commonform = () => {
  const [form] = Form.useForm();
  const account: any = useActiveAccount();
  const [price, SetPrice] = useState<any>(0);
  const [flg, setFlg] = useState<boolean>(false);

  const selectAfterone = (
    <Select defaultValue="MAX" className="select-after">
      <Option value="MAX">MAX</Option>
    </Select>
  );

  const selectAftertwo = (
    <Select defaultValue="USDT" className="select-after">
      <Option value="USDT">USDT</Option>
    </Select>
  );  

  //取利息
  const withdrawInterest = async () => {
    const contract: any = await getContract2(
      APIConfig.ETHAddress,
      eth
    );
    const result = await contract.withdrawInterest(
      account.address
    );
  }

  //取本金
  const withdrawPrincipal = async () => {
    const contract: any = await getContract2(
      APIConfig.ETHAddress,
      eth
    );
    const result = await contract.withdrawPrincipal(
      account.address
    );
  }

  const onFinish = async () => {
    setFlg(true);
  };

  useEffect(() => {
    if (account) {
    }
  }, [account]);

  return (
    <>
      <div className={styles.Content}>
        <span className={styles.ContentText}>提款</span>
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
              <div className={styles.Contentinterest}>
                <span className={styles.Contentlabel}>取出(USDT)</span>

                <div>
                  <span className={styles.interest}>利息</span>
                  <CaretDownOutlined twoToneColor="#E89E2C" />
                </div>
              </div>
            </Col>

            <Col span={24} style={{ marginTop: 12, marginBottom: 12 }}>
              <Form.Item colon={false} name="USDT_one_amount">
                <Input
                  addonAfter={selectAfterone}
                  placeholder="请输入提取数量"
                  className={styles.inputstyle}
                  onChange={(e: any) => {
                    const tokenValue = (e.target.value / price) * 10 ** 18;
                    form.setFieldsValue({
                      ZSD_two_amount: tokenValue,
                    });
                  }}
                />

                <Col span={11} className="Colstyle">
                  <span style={{ color: "#d8d8d8" }}>全部利息 ：1200USDT</span>
                </Col>
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ marginTop: 12 }}>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.buttonstyle}
                >
                  取款
                </Button>
              </Form.Item>
            </Col>
          </Row>
          {/* <Row style={{ marginTop: 12 }}>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={flg ? styles.buttonstyleflg : styles.buttonstyle}
                  disabled={flg}
                >
                  {flg ? '今日已兑换' : '取款'}
                </Button>
              </Form.Item>
            </Col>
          </Row> */}
        </Form>
      </div>
    </>
  );
};

export default Commonform;
