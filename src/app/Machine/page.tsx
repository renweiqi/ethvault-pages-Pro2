import React from "react";
import dynamic from "next/dynamic";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
import { MenuProvider } from "../../../components/MenuContext";
import MiningMachine from "../../../components/MiningMachine";

const Machine = () => {
  return (
    <MenuProvider>
      <TopMenu />
      <MiningMachine />
    </MenuProvider>
  );
};

export default Machine;
