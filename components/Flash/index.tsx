"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col, Select, message } from "antd";
import { useActiveAccount } from "thirdweb/react";
import { CaretDownOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { ethers } from "ethers";
import { getContract2 } from "../../public/utils";
import { eth } from "../../abi/ethabi";
import { formatWei } from "../../public/utils";
const { Option } = Select;

const Commonform = () => {
  const [form] = Form.useForm();
  const account: any = useActiveAccount();
  const [depList, setDepList] = useState<any>([]);
  const [num, setNum] = useState("");
  const [bjlx, setBjlx] = useState<any>("bj");
  const [selectItem, setSelectItem] = useState<any>([]);
  const [language, setLanguage] = useState("EN");

  const selectAfterone = (
    <div
      className="select-after"
      onClick={() => {
        setNum(
          bjlx == "bj"
            ? Number(formatWei(selectItem[0])).toFixed(3)
            : Number(formatWei(selectItem[1])).toFixed(3)
        );
      }}
    >
      MAX
    </div>
  );

  const getDetil = async (Nodestorage: any) => {
    const contract: any = await getContract2(Nodestorage.ETHAddress, eth);
    const result = await contract.getDeposits(account.address);
    setDepList(result);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (account) {
      getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ''));
    }
  }, [account]);

  const drawp = async () => {
    const NodestorageData = JSON.parse(localStorage.getItem("Nodestorage") || '')

    if (selectItem.length == 0) {
      message.warning(language == "EN" ? 'Please select a record' : '请选择记录');
      return;
    }
    const nums = ethers.utils.parseUnits(num, 18);
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    try {
      console.log(selectItem[5], nums, bjlx == "bj" ? true : false, 'vselectItem[5], nums,bjlx == "bj"?true:false');

      await contract.requestWithdrawal(selectItem[5], nums, bjlx == "bj" ? true : false);
      message.success(language == "EN" ? 'Successful operation' : '操作成功');
      setTimeout(() => {
        getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ''));
      }, 2000);
    } catch (error: any) {
      if (
        error.reason ==
        "execution reverted: Cannot withdraw principal before lifespan ends"
      ) {
        message.error(language == "EN" ? 'Miner life is not expired' : '矿机寿命未到期');
      } else {
        message.error(language == "EN" ? 'Operation failure' : '操作失败');
      }
    }
  };

  useEffect(() => {
    if (account) {
      getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ''));
    }
  }, [account]);

  return (
    <>
      <div className={styles.Content}>
        <span className={styles.ContentText}>{language == "EN" ? 'Withdraw money' : '提款'}</span>
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
                  defaultValue={language == "EN" ? 'Selective record' : '选择记录'}
                  style={{ width: "100%", margin: "20px 0" }}
                  onChange={(e: any) => {
                    setSelectItem(e.split(","));
                    setNum("");
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
                            <div>{language == "EN" ? 'principal' : '本金'} :</div>
                            <div>{formatWei(item["principal"])},</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <div>{language == "EN" ? 'Interest' : '利息'} :</div>
                            <div>
                              {Number(formatWei(item["interest"])).toFixed(3)}
                            </div>
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
                <span className={styles.Contentlabel}>{language == "EN" ? 'TakeOut' : '取出(USDT)'}</span>

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
                      setNum("");
                    }}
                  >
                    <Option value="bj">{language == "EN" ? 'principal' : '本金'}</Option>
                    <Option value="lx">{language == "EN" ? 'Interest' : '利息'}</Option>
                  </Select>
                </div>
              </div>
            </Col>

            <Col span={24} style={{ marginTop: 12, marginBottom: 12 }}>
              <Form.Item colon={false} name="USDT_one_amount">
                <Input
                  addonAfter={selectAfterone}
                  placeholder={language == "EN" ? 'Please enter the extraction quantity' : "请输入提取数量"}
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
                    ).toFixed(3);
                    if (Number(total) < Number(value)) {
                      value = total;
                    }

                    setNum(value);
                  }}
                />
                {bjlx == "bj" ? (
                  <div className="allqina">
                    {language == "EN" ? 'Total principal:' : "全部本金 ："}
                    {selectItem.length != 0 ? formatWei(selectItem[0]) : 0}{" "}
                  </div>
                ) : (
                  <div className="allqina">
                    {language == "EN" ? 'Total interest:' : "全部利息 ："}
                    {selectItem.length != 0
                      ? Number(formatWei(selectItem[1])).toFixed(3)
                      : 0}
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
                  {language == "EN" ? 'Submit' : "提交取款申请"}
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
