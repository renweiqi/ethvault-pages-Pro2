"use client";
import React, { useState, useEffect } from "react";
import { Button, Input, Form, List, Row, Col, Empty,message } from "antd";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei,getContract2,getTokenBalance } from "../../../../../public/utils";
import { copyToClipboard } from "../../../../../public/clipboard";
import { eth } from "../../../../../abi/ethabi";
import { useActiveAccount } from "thirdweb/react";

interface Props {
  Data?: Array<any>;
  listexamine?: Array<any>;
  switchItem: any;
}

const ListItem = ({ Data = [], switchItem, listexamine = [] }: Props) => {
  const [NodestorageData, setNodestorageData] = useState<any>();
  const account: any = useActiveAccount();
  const [num, setNum] = useState("");
  const [list, setlist] = useState<any>([]);

  //获取用户余额
  const getUserBalance = async(NodestorageData: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);

    for (let i = 0; i < Data.length; i++) {
      const balance = await contract.getTokenBalance(NodestorageData.BUSDaddress,Data[i].walletAddress)
      Data[i].realBalance = formatWei(balance)
    }
    setlist(Data)
    console.log(Data,'klsmjshjkdshjhasjkd');

  }
  const btnFun = async (id: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const result = await contract.approveWithdrawal(id);
  };

  const drawp2 = async () => {
    if (!num) {
      message.warning('请输入钱包地址')
      return
    }
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const res = await contract.adminWithdrawUser(num);
  };
  useEffect(() => {
    getUserBalance(JSON.parse(localStorage.getItem("Nodestorage") || ""))
  }, [Data]);
  useEffect(() => {
    setNodestorageData(JSON.parse(localStorage.getItem("Nodestorage") || ""));
  }, []);
  return (
    <div className={styles.Content}>
      {switchItem == "0" ? (
        <div>
          {/* 授权 Tab 内容 */}
          <div className={styles.ComputingPower}>
            <div style={{ width: "30%" }} className={styles.AmountReceived}>
              地址
            </div>
            <div style={{ width: "50%" }} className={styles.AmountReceived}>
              余额(USDT)
            </div>
            <div style={{ width: "20%" }} className={styles.AmountReceived}>
              时间
            </div>
          </div>
          <div className={styles.CustomerInformation}>
            {list.length > 0 ? (
              <div
                id="scrollableDiv"
                style={{
                  height: "100vh",
                  overflow: "auto",
                  padding: "0 5px",
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}
              >
                <List
                  dataSource={list}
                  renderItem={(item: any, index: number) => (
                    <List.Item key={index}>
                      <div className={styles.ComputingPowercont}>
                        <div
                          style={{
                            width: "30%",
                            textDecorationLine: "underline",
                            color: "#00ffaf",
                          }}
                          onClick={() => copyToClipboard(item.walletAddress)}
                        >
                          {item.walletAddress.slice(0, 4)}...
                          {item.walletAddress.slice(-4)}
                        </div>
                        <div style={{ width: "50%" }}>
                          {Number(item.realBalance).toFixed(3)}
                        </div>
                        <div style={{ width: "20%" }}>
                          {formatTimestamp(item.createTime / 1000)}
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            ) : (
              <Empty
                description={<span style={{ color: "#FFFFFF" }}>暂无数据</span>}
              />
            )}
          </div>
          <div>下滑加载更多</div>
        </div>
      ) : switchItem == "1" ? (
        <div>
          {/* 审核 Tab 内容 */}
          <div className={styles.ComputingPower}>
            <div style={{ width: "45%" }} className={styles.AmountReceived}>
              地址
            </div>
            <div style={{ width: "40%" }} className={styles.AmountReceived}>
              提现金额
            </div>
            <div style={{ width: "40%" }} className={styles.AmountReceived}>
              类型
            </div>
            <div style={{ width: "20%" }} className={styles.AmountReceived}>
              操作
            </div>
          </div>
          <div className={styles.CustomerInformation}>
            {listexamine.length > 0 ? (
              <div
                id="scrollableDiv"
                style={{
                  height: "100vh",
                  overflow: "auto",
                  padding: "0 5px",
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}
              >
                <List
                  dataSource={listexamine}
                  renderItem={(item: any, index: number) => (
                    <List.Item key={index}>
                      <div className={styles.ComputingPowercont}>
                        <div
                          className={styles.walletAddress}
                          onClick={() => copyToClipboard(item.walletAddress)}
                        >
                          {item.user.replace(/^(.{4}).*(.{4})$/, "$1...$2")}
                        </div>
                        <div className={styles.amount}>
                          {Number(formatWei(item.amount)).toFixed(3)}
                        </div>
                        <div className={styles.principal}>
                          {item.isPrincipal ? "本金" : "利息"}
                        </div>
                        <div className={styles.buttonContainer}>
                          <Button
                            type="primary"
                            onClick={() => btnFun(item["id"])}
                          >
                            审核
                          </Button>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            ) : (
              <Empty
                description={<span style={{ color: "#FFFFFF" }}>暂无数据</span>}
              />
            )}
          </div>
        </div>
      ) : (
        <Row style={{ marginTop: 80 }}>
          <Input
            placeholder="请输入划转的钱包地址"
            className={styles.inputstyle}
            value={num}
            onChange={(e: any) => {
              setNum(e.target.value);
            }}
          />
          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.buttonstyle}
                onClick={drawp2}
              >
                划转
              </Button>
            </Form.Item>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ListItem;
