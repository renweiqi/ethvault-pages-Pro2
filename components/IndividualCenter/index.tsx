"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useActiveAccount } from "thirdweb/react";
import { getContract2 } from "../../public/utils";
import { eth } from "../../abi/ethabi";
import { formatWei } from "../../public/utils";

const Commonform = () => {
  const [zSDBalance, setZSDBalance] = useState<any>();
  const [uSDTBalance, setUSDTBalance] = useState<any>();
  const account: any = useActiveAccount();
  const [language, setLanguage] = useState("EN"); // Default language is English


  const getDetil = async (Nodestorage: any) => {
    const contract: any = await getContract2(Nodestorage.ETHAddress, eth);
    const result = await contract.getDeposits(account.address);
    let totalPrincipal = 0; // 本金
    let totalInterest = 0; // 利息

    for (let i = 0; i < result.length; i++) {
      totalPrincipal += Number(formatWei(result[i]["principal"]));
      totalInterest += Number(formatWei(result[i]["interest"]));
    }
    setUSDTBalance(totalPrincipal);
    setZSDBalance(Number(totalInterest).toFixed(3));
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
    <>
      <div className={styles.Content}>
        <span className={styles.ContentText}>{language === "EN" ? "My account" : "我的账户"}</span>
        <div className={styles.currencycontainer}>
          <div className={styles.currencyrow}>
            <div className={styles.USDTnuber}>{uSDTBalance}</div>
            <div className={styles.USDTstyle}>{language === "EN" ? "Principal（USDT）" : "本金（USDT）"}</div>
          </div>
          <div className={styles.currencyrow}>
            <div className={styles.USDTnuber}>{zSDBalance}</div>
            <div className={styles.USDTstyle}>{language === "EN" ? "Interest（USDT）" : "利息(USDT)）"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commonform;