"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import MyTeam from "../MyTeam";
import { getContract2 } from "../../public/utils"
import { APIConfig } from "../../abi/APIConfiguration";
import { eth } from "../../abi/ethabi";
import { useActiveAccount } from "thirdweb/react";

const NodestorageData = JSON.parse(localStorage.getItem("Nodestorage") || 'null');

const TeamsSwitchTransactionRecords = () => {
  const [activeTab, setActiveTab] = useState('team'); // 默认选中'我的团队'
  const [activeTextColor, setActiveTextColor] = useState('#e89e2c'); // 初始化字体颜色
  const [depList, setDepList] = useState<any>([]);
  const account: any = useActiveAccount();
  const getDetil = async () => {
    const contract: any = await getContract2(
      NodestorageData.ETHAddress,
      eth
    );
<<<<<<< HEAD

=======
    
    const result2 = await contract.getAllUserBalancesInContract();
    console.log(result2,'result2result2');
    
>>>>>>> cf79d701ce15c921e1fe293b2d8eb008b1e50ac4
    const result = await contract.getDeposits(
      account.address
    );
    setDepList(result)


  }

  useEffect(() => {
    if (account) {
      getDetil()
    }
  }, [account])
  return (
    <div className={styles.Content}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <span
            className={styles.ContentText}
            style={{
              color: activeTab === 'team' ? activeTextColor : '#ffffff',
              borderBottomColor: activeTab === 'team' ? '#e89e2c' : 'transparent',
              marginRight: '30px'
            }}
          >
            充值记录
          </span>
        </div>
      </div>
      <MyTeam Data={depList} />
    </div>
  );
};

export default TeamsSwitchTransactionRecords;