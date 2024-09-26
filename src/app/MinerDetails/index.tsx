"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col, Collapse } from "antd";
import {
  CaretDownOutlined
} from '@ant-design/icons';
import styles from "./index.module.scss";

const Commonform = () => {
  const [formONE] = Form.useForm();
  const [form] = Form.useForm();

  const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );

  const onFinish = () => {

  }

  useEffect(() => {

  }, []);
  return (
    <>
      <div className={styles.Content}>
        <Form
          name="amountUSDT"
          form={formONE}
          onFinish={onFinish}
          layout="vertical"
          style={{
            color: "white",
          }}
        >
          <Row>
            {/* <Col span={24}>
              <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                  {text}
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  {text}
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  {text}
                </Panel>
              </Collapse>
            </Col> */}

            <Col span={24}>
              <div className={styles.ComputingPower}><span className={styles.Contentlabel}>充值（USDT）</span> <span className={styles.power}>USDT <CaretDownOutlined twoToneColor="#E89E2C" /></span></div>
            </Col>
            <Col span={24}>
              <Form.Item
                colon={false}
                name="USDT_one_SingleCharge"
              >
                <Input
                  placeholder="请输入充入金额"
                  className={styles.inputstyle}
                />
                <Col span={24}>
                  <div className={styles.labelContainer}>
                    <span className={styles.labelLeft}>USDT可用余额 ：1000</span>
                    <span className={styles.labelRight}> </span>
                  </div>
                </Col>
              </Form.Item>
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
                  充值
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