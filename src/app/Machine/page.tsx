import React from "react";
import dynamic from "next/dynamic";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
import { MenuProvider } from "../../../components/MenuContext";
import MiningMachine from "../../../components/MiningMachine";
import NativeBar from "../../../components/NativeBar";

const Machine = () => {
  return (
    <MenuProvider>
      <NativeBar title="挖矿" backUrl="/HomeLess" />
      <MiningMachine />
    </MenuProvider>
  );
};

export default Machine;
