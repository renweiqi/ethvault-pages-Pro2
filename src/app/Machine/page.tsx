
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
import { MenuProvider } from "../../../components/MenuContext";
import MiningMachine from "../../../components/MiningMachine";
import NativeBar from "../../../components/NativeBar";

const Machine = () => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <MenuProvider>
      <NativeBar title={language == "EN" ? 'dig for coal or minerals' : '挖矿'} backUrl="/HomeLess" />
      <MiningMachine />
    </MenuProvider>
  );
};

export default Machine;
