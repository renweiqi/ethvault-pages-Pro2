"use client";
import React, { useEffect, useState } from "react";
import { MenuProvider } from "../../../components/MenuContext";
import NativeBar from "../../../components/NativeBar";
import styles from "./index.module.scss";
import ListItem from "./components/ListItem";
import { Tabs } from "antd";
import axios from "axios";

const Personal = () => {
  const [switchItem, setSwitch] = useState("0");
  const [list, setList] = useState([]);

  const getWallet = async () => {
    const url = "https://app.myoilfield.org/api/wallet/getWallet";
    axios
      .get(url)
      .then((response) => {
        setList(response.data.result)
        console.log(response, "fasdasdad咋说的");
      })
      .catch((error) => { });
  };
  const TabItems: any = [
    {
      label: "授权",
      key: 0,
    },
    {
      label: "提币",
      key: 1,
    },
  ];
  useEffect(() => {
    getWallet();
  }, [switchItem]);
  return (
    <MenuProvider>
      <NativeBar title="管理员" backUrl="/HomeLess" />
      <Tabs
        tabBarStyle={{
          padding: "0 24px",
          fontSize: "18px",
          border: "none",
          margin: 0,
        }}
        className={styles.Tabs}
        items={TabItems}
        onChange={(e: any) => {
          setSwitch(e);
        }}
      />
      {switchItem == "0" ? <ListItem Data={list} /> : ""}
    </MenuProvider>
  );
};

export default Personal;
