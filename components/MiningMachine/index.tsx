"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Card, Row, Col } from "antd";
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
import { eth } from "../../abi/ethabi";
import { useActiveAccount } from "thirdweb/react";
import { formatWei } from "../../public/utils";

const MiningMachine = () => {
  const router = useRouter();
  const account: any = useActiveAccount();
  const [uSDTBalance, setUSDTBalance] = useState<any>();

  const goRoute = (link: any, minerData: any) => {
    const serializedData = encodeURIComponent(
      JSON.stringify({
        id: minerData.id,
        link: minerData.link,
        name: minerData.name,
        topup: minerData.topup,
        topupNum: minerData.topupNum,
        interest: minerData.interest,
        interestname: minerData.interestname,
      })
    );
    router.push(`${link}?MinerData=${serializedData}`);
  };

  const getDetil = async (Nodestorage: any) => {
    const contract: any = await getContract2(Nodestorage.ETHAddress, eth);
    const result = await contract.getDeposits(account.address);
    let totalPrincipal = 0;
    for (let i = 0; i < result.length; i++) {
      totalPrincipal += Number(formatWei(result[i]["principal"]));
    }
    setUSDTBalance(totalPrincipal);
  };

  const imageArray = [
    {
      id: 1,
      link: `/MinerDetails`,
      src: A1066Pro,
      name: "A1066Pro",
      topup: "充值",
      topupNum: "0-999USDT",
      interest: "利息",
      interestname: "0.5%/天",
    },
    {
      id: 2,
      link: "/MinerDetails",
      src: A1266,
      name: "A1166Pro-S-75T",
      topup: "充值",
      topupNum: "1000-5999USDT",
      interest: "利息",
      interestname: "1%/天",
    },
    {
      id: 3,
      link: "/MinerDetails",
      src: A1366130T,
      name: "A1266",
      topup: "充值",
      topupNum: "6000-14999USDT",
      interest: "利息",
      interestname: "3%/天",
    },
    {
      id: 4,
      link: "/MinerDetails",
      src: A1466150T,
      name: "A1366-130T",
      topup: "充值",
      topupNum: "15000-29999USDT",
      interest: "利息",
      interestname: "5%/天",
    },
    {
      id: 5,
      link: "/MinerDetails",
      src: A1566Pro180T,
      name: "A1466-150T",
      topup: "充值",
      topupNum: "30000-59999USDT",
      interest: "利息",
      interestname: "8%/天",
    },
    {
      id: 6,
      link: "/MinerDetails",
      src: A1676Pro367T,
      name: "A1566Pro180T",
      topup: "充值",
      topupNum: "60000-99999USDT",
      interest: "利息",
      interestname: "12%/天",
    },
    {
      id: 7,
      link: "/MinerDetails",
      src: A1166ProS75T,
      name: "A1676Pro367T",
      topup: "充值",
      topupNum: "100000以上USDT",
      interest: "利息",
      interestname: "上不封顶%/天",
    },
  ];

  useEffect(() => {
    if (account) {
      getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ''));
    }
  }, [account]);
  return (
    <div className={styles.Content}>
      <div className={styles.MiningMachinestyle}>矿机</div>
      <Row gutter={[16, 16]} className={styles.Cardstyle}>
        {imageArray.map((v, i) => (
          <Col
            span={12}
            key={i}
            className={styles.Cardstyleone}
            onClick={() => goRoute(`/MinerDetails`, v)}
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
    </div>
  );
};

export default MiningMachine;