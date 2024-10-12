import dynamic from "next/dynamic";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
const Content = dynamic(() => import("../../../components/CommBg"), {
  ssr: false,
});
import { MenuProvider } from "../../../components/MenuContext";
import Market from "../../../components/Market";

const HomeLess: React.FC = () => {
  return (
    <MenuProvider>
      <TopMenu />
      <Content
        title={"ETHVault矿池"}
        solt={
          <div>
            ETHVault
            Pool是一个基于以太坊网络的质押挖矿平台，旨在通过质押资金帮助矿工获得稳定而全球的利润。参与者池可以通过质押资金参与矿池，并根据质押资金而产生的利润分配。我们的平台通过透明的规则和自动化的智能合约机制分配，确保矿工享受公平的收益。
          </div>
        }
      ></Content>
      <Market />
    </MenuProvider>
  );
};

export default HomeLess;