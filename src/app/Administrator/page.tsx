"use client";
import React, { useEffect, useState } from "react";
import { MenuProvider } from "../../../components/MenuContext";
import NativeBar from "../../../components/NativeBar";
import styles from "./index.module.scss";
import ListItem from "./components/ListItem";
import { Tabs } from "antd";
import axios from "axios";
import { getContract2 } from "../../../public/utils";
import { eth } from "../../../abi/ethabi";

const Personal = () => {
  const [switchItem, setSwitch] = useState("0");
  const [list, setList] = useState([]);
  const [listexamine, setListexamine] = useState([]);
  const [language, setLanguage] = useState("EN");


  const getDetil = async (Nodestorage: any) => {
    try {
      const contract: any = await getContract2(Nodestorage.ETHAddress, eth);
      const result = await contract.getAllPendingWithdrawalRequests();
      const newresult = result.map((res:any)=>{
        if(!res['rejected']){
          return res
        }
      }).filter((res:any)=>res)
      setListexamine(newresult);
    } catch (error) {
      console.error("Error fetching withdrawal requests:", error);
    }
  };

  const getWallet = async () => {
    const url = "https://app.myoilfield.org/api/wallet/getWallet";
    try {
      const response = await axios.get(url);
      setList(response.data.result);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
  };

  const TabItems = [
    {
      label: language == "EN" ? 'Accredit' : '授权',
      key: "0",
    },
    {
      label: language == "EN" ? 'Examine' : '审核',
      key: "1",
    },
    {
      label: language == "EN" ? 'Withdraw' : '提取',
      key: "2",
    },
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    getWallet();
    getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ""));
  }, [switchItem]);

  const handleTabChange = (key: string) => {
    setSwitch(key);

    if (key === "0") {
      getWallet();
    } else if (key === "1") {
      getDetil(JSON.parse(localStorage.getItem("Nodestorage") || ""));
    }
  };

  return (
    <MenuProvider>
      <div className={styles.Personal}>
        <NativeBar title={language == "EN" ? 'Administrator' : '管理员'} backUrl="/HomeLess" />
        <Tabs
          tabBarStyle={{
            padding: "0 24px",
            fontSize: "18px",
            border: "none",
            margin: 0,
          }}
          className={styles.Tabs}
          items={TabItems}
          onChange={handleTabChange}
        />
        {
          <ListItem
            Data={list}
            switchItem={switchItem}
            listexamine={listexamine}
          />
        }
      </div>
    </MenuProvider>
  );
};

export default Personal;
