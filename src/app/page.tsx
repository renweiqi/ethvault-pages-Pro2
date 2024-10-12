import React from "react";
import dynamic from "next/dynamic";
import { MenuProvider } from "../../components/MenuContext";
const HomeLess = dynamic(() => import("./HomeLess/page"), { ssr: false });
// import { GlobalProvider } from "../../context/GlobalContext";


const HomePage: React.FC = () => {
  return (
    // <GlobalProvider>
    <MenuProvider>
      <HomeLess />
    </MenuProvider>
    // </GlobalProvider>
  );
};

export default HomePage;
