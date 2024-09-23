import React from "react";
import dynamic from "next/dynamic";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
import IndividualCenter from "../../../components/IndividualCenter";
import TeamsSwitchTransactionRecords from "../../../components/TeamsSwitchTransactionRecords";
import { MenuProvider } from "../../../components/MenuContext";

const Personal = () => {
  return (
    <MenuProvider>
      <TopMenu />
      <IndividualCenter />
      <TeamsSwitchTransactionRecords />
    </MenuProvider>
  );
};

export default Personal;