"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col, Select, message } from "antd";
import { useActiveAccount } from "thirdweb/react";
import { CaretDownOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { ethers } from "ethers";
import { getContract2 } from "../../public/utils";
import { APIConfig } from "../../abi/APIConfiguration";
import { eth } from "../../abi/ethabi";
import { formatWei } from "../../public/utils";

const { Option } = Select;

const NodestorageData = JSON.parse(localStorage.getItem("Nodestorage") || 'null');

const Commonform = () => {
  const [form] = Form.useForm();
  const account: any = useActiveAccount();
  const [depList, setDepList] = useState<any>([]);
  const [num, setNum] = useState("");
  const [bjlx, setBjlx] = useState<any>("bj");
  const [selectItem, setSelectItem] = useState<any>([]);

  const selectAfterone = (
    <div
      className="select-after"
      onClick={() => {
        setNum(
          bjlx == "bj" ? formatWei(selectItem[0]) : formatWei(selectItem[1])
        );
      }}
    >
      MAX
    </div>
  );

  const getDetil = async () => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const result = await contract.getDeposits(account.address);
    setDepList(result);
  };

  useEffect(() => {
    if (account) {
      getDetil();
    }
  }, [account]);

  //取利息
  const withdrawInterest = async () => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    try {
      await contract.withdrawInterest(selectItem[5]);
      message.success("操作成功");
      setTimeout(() => {
        getDetil();
      }, 2000);
    } catch (error: any) {
      if (error.reason == "execution reverted: No interest to withdraw") {
        message.error("没有可提取的利息");
      } else {
        message.error("操作失败");
      }
    }
  };

  //取本金
  const withdrawPrincipal = async () => {
    const nums = ethers.utils.parseUnits(num, 18);
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    try {
      await contract.withdrawPrincipal(selectItem[5], nums);
      message.success("操作成功");
      setTimeout(() => {
        getDetil();
      }, 2000);
    } catch (error: any) {
      if (
        error.reason ==
        "execution reverted: Cannot withdraw principal before lifespan ends"
      ) {
        message.error("矿机寿命未到期");
      } else {
        message.error("操作失败");
      }
    }
  };
  const drawp = () => {
    if (selectItem.length == 0) {
      message.warning("请选择记录");
      return;
    }
    if (bjlx === "bj") {
      withdrawPrincipal();
    } else {
      withdrawInterest();
    }
  };

  useEffect(() => {
    if (account) {
      getDetil();
    }
  }, [account]);

  return (
    <>
      <div className={styles.Content}>
        <span className={styles.ContentText}>提款</span>
        <Form
          name="amount"
          form={form}
          layout="vertical"
          style={{
            color: "white",
          }}
        >
          <Row>
            <Col span={24}>
              <div>
                <Select
                  defaultValue="选择记录"
                  style={{ width: "100%", margin: "20px 0" }}
                  onChange={(e: any) => {
                    setSelectItem(e.split(","));
                  }}
                >
                  {depList.map((item: any, index: number) => {
                    return (
                      <Option value={item + "," + index} key={index}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <div>本金:</div>
                            <div>{formatWei(item["principal"])},</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <div>利息:</div>
                            <div>{formatWei(item["interest"])}</div>
                          </div>
                        </div>
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={styles.Contentinterest}>
                <span className={styles.Contentlabel}>取出(USDT)</span>

                <div className="tikuan">
                  <Select
                    defaultValue="bj"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{
                          color: "#E89E2C !important",
                        }}
                      />
                    }
                    onChange={(e: any) => {
                      setBjlx(e);
                    }}
                  >
                    <Option value="bj">本金</Option>
                    <Option value="lx">利息</Option>
                  </Select>
                </div>
              </div>
            </Col>

            <Col span={24} style={{ marginTop: 12, marginBottom: 12 }}>
              <Form.Item colon={false} name="USDT_one_amount">
                <Input
                  addonAfter={selectAfterone}
                  placeholder="请输入提取数量"
                  className={styles.inputstyle}
                  value={num}
                  onChange={(e: any) => {
                    let value = e.target.value.replace(/\D/g, "");
                    const total = Number(
                      bjlx == "bj"
                        ? selectItem.length != 0
                          ? formatWei(selectItem[0])
                          : 0
                        : selectItem.length != 0
                          ? formatWei(selectItem[1])
                          : 0
                    );
                    if (bjlx == "lx") {
                      value = total;
                    } else {
                      if (total < value) {
                        value = total;
                      }
                    }

                    setNum(value);
                  }}
                />
                {bjlx == "bj" ? (
                  <div className="allqina">
                    全部本金 ：
                    {selectItem.length != 0 ? formatWei(selectItem[0]) : 0}{" "}
                  </div>
                ) : (
                  <div className="allqina">
                    全部利息 ：
                    {selectItem.length != 0 ? formatWei(selectItem[1]) : 0}
                  </div>
                )}
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
                  onClick={drawp}
                >
                  取款
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
