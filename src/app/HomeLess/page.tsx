"use client";  // 告诉 Next.js 这是一个客户端组件

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
const Content = dynamic(() => import("../../../components/CommBg"), {
  ssr: false,
});
import { MenuProvider } from "../../../components/MenuContext";
import Market from "../../../components/Market";

const contentText: any = {
  EN: {
    title: "ETHVault Pool",
    description: `
      ETHVault Pool is a staking mining platform based on the Ethereum network, 
      designed to help miners achieve stable and global profits by staking funds. 
      Participants can join the pool by staking funds and share in the profits generated from the staked assets. 
      Our platform distributes rewards through transparent rules and automated smart contract mechanisms, 
      ensuring that miners receive fair returns.
    `,
  },
  CN: {
    title: "ETHVault矿池",
    description: `
      ETHVault Pool是一个基于以太坊网络的质押挖矿平台，旨在通过质押资金帮助矿工获得稳定而全球的利润。 
      参与者池可以通过质押资金参与矿池，并根据质押资金而产生的利润分配。 
      我们的平台通过透明的规则和自动化的智能合约机制分配，确保矿工享受公平的收益。
    `,
  },
};

const HomeLess: React.FC = () => {
  const [language, setLanguage] = useState("EN"); // 默认语言为英文

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const currentContent = contentText[language];
  return (
    <MenuProvider>
      <TopMenu />
      <Content
        title={currentContent.title}
        solt={<div>{currentContent.description}</div>}
      />
      <Market />
    </MenuProvider>
  );
};

export default HomeLess;
