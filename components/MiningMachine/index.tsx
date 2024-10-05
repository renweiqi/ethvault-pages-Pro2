"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { Card, Row, Col, Modal, message } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";
import A1066Pro from "../../public/MiningMachine/A1066Pro.png";
import A1266 from "../../public/MiningMachine/A1266.png";
import A1366130T from "../../public/MiningMachine/A1366-130T.png";
import A1466150T from "../../public/MiningMachine/A1466-150T_.png";
import A1566Pro180T from "../../public/MiningMachine/A1566Pro180T.png";
import A1676Pro367T from "../../public/MiningMachine/A1676Pro367T.png";
import A1166ProS75T from "../../public/MiningMachine/A1166Pro-S-75T_.png";
import { getContract2 } from "../../public/utils";
import { APIConfig } from "../../abi/APIConfiguration";
import { eth } from "../../abi/ethabi";
import { ethers } from "ethers";
import { tree } from "next/dist/build/templates/app-page";
const MiningMachine = () => {
  const router = useRouter();
  const [topUpNum, setTopUpNum] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goRoute = (link: any) => {
    router.push(link);
  };

  const imageArray = [
    {
      link: `/MinerDetails`,
      src: A1066Pro,
      name: "A1066Pro",
      topup: "充值",
      topupNum: "0-999USDT",
      interest: "利息",
      interestname: "0.5%/天",
    },
    {
      link: "/MinerDetails",
      src: A1266,
      name: "A1266",
      topup: "充值",
      topupNum: "1000-4999USDT",
      interest: "利息",
      interestname: "1%/天",
    },
    {
      link: "/MinerDetails",
      src: A1366130T,
      name: "A1366 130T",
      topup: "充值",
      topupNum: "5000-9999USDT",
      interest: "利息",
      interestname: "1.5%/天",
    },
    {
      link: "/MinerDetails",
      src: A1466150T,
      name: "A1466 150T",
      topup: "充值",
      topupNum: "10000-19999USDT",
      interest: "利息",
      interestname: "2%/天",
    },
    {
      link: "/MinerDetails",
      src: A1566Pro180T,
      name: "A1566Pro 180T",
      topup: "充值",
      topupNum: "20000-49999USDT",
      interest: "利息",
      interestname: "2.5%/天",
    },
    {
      link: "/MinerDetails",
      src: A1676Pro367T,
      name: "A1676Pro 367T",
      topup: "充值",
      topupNum: "50000-99999USDT",
      interest: "利息",
      interestname: "3%/天",
    },
    {
      link: "/MinerDetails",
      src: A1166ProS75T,
      name: "A1166Pro S 75T",
      topup: "充值",
      topupNum: "100000USDT以上",
      interest: "利息",
      interestname: "3.5%/天",
    },
  ];
  const transfer = async (v: any) => {
    const contract: any = await getContract2(APIConfig.ETHAddress, eth);
    const num = ethers.utils.parseUnits(topUpNum, 18);
    const result = await contract.deposit(num);

    // const result = await contract.decimals();
    // const machineCount = await contract.miningMachines.length;
    //         let machines = [];
    //         for (let i = 0; i < machineCount; i++) {
    //             const machine = await contract.getMiningMachineDetails(i);
    //             machines.push(machine);
    //         }
    const machine = await contract.getMiningMachineDetails(1);
    message.success("充值成功");
    setIsModalOpen(false);
    setTopUpNum("");
    console.log(result, "bscTestnet", machine);
  };
  const handleCancel = async () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.Content}>
      <div className={styles.MiningMachinestyle}>矿机</div>
      <Row gutter={[16, 16]} className={styles.Cardstyle}>
        {imageArray.map((v, i) => (
          <Col
            span={12}
            key={i}
            className={styles.Cardstyleone}
            // onClick={() => goRoute(`/MinerDetails?id=${v.name}`)}
            onClick={() => setIsModalOpen(true)}
          >
            <Card hoverable className={styles.Card} bodyStyle={{ padding: 0 }}>
              <div className={styles.CardImageWrapper}>
                <Image
                  src={v.src}
                  alt={v.name}
                  width={122}
                  height={90}
                  className={styles.CardImage}
                />
              </div>

              <div className={styles.BGconter}>
                <div className={styles.CardTitle}>{v.name}</div>
                <div className={styles.Cardcenter}>
                  <div>{v.topup}</div>
                  <div>{v.topupNum}</div>
                </div>
                <div className={styles.Cardcenter}>
                  <div>{v.interest}</div>
                  <div>{v.interestname}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        cancelText={"取消"}
        closable={false}
        okText={"确认"}
        title={"请输入充值金额"}
        centered
        open={isModalOpen}
        onOk={transfer}
        onCancel={handleCancel}
      >
        <input
          className={styles.input}
          type="text"
          style={{
            width: "342px",
            borderRadius: "8px 8px 8px 8px",
            border: "1px solid #eef0f3",
            margin: " 20px 0",
            padding: "10px",
          }}
          maxLength={6}
          value={topUpNum}
          placeholder={"请输入充值金额"}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[a-zA-Z0-9]*$/.test(value)) {
              setTopUpNum(value);
            }
          }}
        />
      </Modal>
    </div>
  );
};

export default MiningMachine;
