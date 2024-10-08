import React from "react";
import dynamic from "next/dynamic";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
import { MenuProvider } from "../../../components/MenuContext";
import NativeBar from "../../../components/NativeBar";


const Personal = () => {
  return (
    <MenuProvider>
      <NativeBar title="" backUrl="/Machine" />
      1111111111111
    </MenuProvider>
  );
};

export default Personal;
