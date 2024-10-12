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
  const [NodestorageData, setNodestorageData] = useState<any>();

  const getDetil = async () => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);

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
    if (account) {
      setNodestorageData(JSON.parse(localStorage.getItem("Nodestorage") || ''))
      getDetil();
    }
  }, [account]);

  return (
    <>
      <div className={styles.Content}>
        <span className={styles.ContentText}>我的账户</span>
        <div className={styles.currencycontainer}>
          <div className={styles.currencyrow}>
            <div className={styles.USDTnuber}>{uSDTBalance}</div>
            <div className={styles.USDTstyle}>本金（USDT）</div>
          </div>
          <div className={styles.currencyrow}>
            <div className={styles.USDTnuber}>{zSDBalance}</div>
            <div className={styles.USDTstyle}>利息(USDT)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commonform;
