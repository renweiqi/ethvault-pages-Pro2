"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import MyTeam from "../MyTeam";
import TransactionRecord from "../TransactionRecord";

const TeamsSwitchTransactionRecords = () => {
  const [activeTab, setActiveTab] = useState('team'); // 默认选中'我的团队'
  const [activeTextColor, setActiveTextColor] = useState('#e89e2c'); // 初始化字体颜色

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveTextColor(tab === 'team' || tab === 'transaction' ? '#e89e2c' : '#ffffff');
  };

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
            onClick={() => handleTabClick('team')}
          >
            充值记录
          </span>
          
          {/* <span
            className={styles.ContentText}
            style={{
              color: activeTab === 'transaction' ? activeTextColor : '#ffffff',
              borderBottomColor: activeTab === 'transaction' ? '#e89e2c' : 'transparent'
            }}
            onClick={() => handleTabClick('transaction')}
          >
            交易记录
          </span> */}
        </div>
      </div>

      {activeTab === 'team' ? <MyTeam /> : <TransactionRecord />}
    </div>
  );
};

export default TeamsSwitchTransactionRecords;