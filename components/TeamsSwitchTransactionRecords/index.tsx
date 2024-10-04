"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import MyTeam from "../MyTeam";
import {getContract2} from "../../public/utils"
import { APIConfig } from "../../abi/APIConfiguration";
import { eth } from "../../abi/ethabi";
import { useActiveAccount } from "thirdweb/react";
const TeamsSwitchTransactionRecords = () => {
  const [activeTab, setActiveTab] = useState('team'); // 默认选中'我的团队'
  const [activeTextColor, setActiveTextColor] = useState('#e89e2c'); // 初始化字体颜色
  const [depList, setDepList] = useState<any>([]); 
  const account: any = useActiveAccount();
  const getDetil = async() => {
    const contract: any = await getContract2(
      APIConfig.ETHAddress,
      eth
    );
    
    const result = await contract.getDeposits(
      account.address
    );
    setDepList(result)
  }

  useEffect(()=>{
    if (account) {
    getDetil()
    }
  },[account])
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
      <MyTeam Data={depList}/>
    </div>
  );
};

export default TeamsSwitchTransactionRecords;