"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import MyTeam from "../MyTeam";
import TransactionRecord from "../TransactionRecord";
import { getContract2 } from "../../public/utils";
import { eth } from "../../abi/ethabi";
import { useActiveAccount } from "thirdweb/react";


const TeamsSwitchTransactionRecords = () => {
  const [activeTab, setActiveTab] = useState("team"); // 默认选中'我的团队'
  const [activeTextColor, setActiveTextColor] = useState("#e89e2c"); // 初始化字体颜色
  const [depList, setDepList] = useState<any>([]);
  const [depList2, setDepList2] = useState<any>([]);
  const account: any = useActiveAccount();
  const [language, setLanguage] = useState("EN"); // Default language is English


  const getDetil = async (NodestorageData: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const result = await contract.getDeposits(account.address);
    setDepList(result);
  };

  const getDetil2 = async (NodestorageData: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const result = await contract.getWithdrawalRequests(account.address);
    setDepList2(result);
  };

  const handleTabClick = (tab: string) => {
    if (tab == "team") {
      getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ''));
    } else {
      getDetil2(JSON.parse(localStorage.getItem("Nodestorage") || ''));
    }
    setActiveTab(tab);
    setActiveTextColor(
      tab === "team" || tab === "transaction" ? "#e89e2c" : "#ffffff"
    );
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    if (account) {
      getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ''));
    }
  }, [account]);
  return (
    <div className={styles.Content}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <span
            className={styles.ContentText}
            style={{
              color: activeTab === "team" ? activeTextColor : "#ffffff",
              borderBottomColor:
                activeTab === "team" ? "#e89e2c" : "transparent",
              marginRight: "30px",
            }}
            onClick={() => handleTabClick("team")}
          >
            {language === "EN" ? "Recharge Record" : "充值记录"}
          </span>
          <span
            className={styles.ContentText}
            style={{
              color: activeTab === "transaction" ? activeTextColor : "#ffffff",
              borderBottomColor:
                activeTab === "transaction" ? "#e89e2c" : "transparent",
            }}
            onClick={() => handleTabClick("transaction")}
          >
            {language === "EN" ? "Withdrawal" : "提现记录"}
          </span>
        </div>
      </div>
      {activeTab === "team" ? (
        <MyTeam Data={depList} />
      ) : (
        <TransactionRecord Data={depList2} />
      )}
    </div>
  );
};

export default TeamsSwitchTransactionRecords;
