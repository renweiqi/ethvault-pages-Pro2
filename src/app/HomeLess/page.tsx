"use client"; // 告诉 Next.js 这是一个客户端组件

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useEffect } from "react";
const TopMenu = dynamic(() => import("../../../components/TopMenu"), {
  ssr: true,
});
const Content = dynamic(() => import("../../../components/CommBg"), {
  ssr: false,
});
import { MenuProvider } from "../../../components/MenuContext";
import js from "../../../public/images/nhllzh.jpg";
import jsen from "../../../public/images/nhllen.jpg";
import styles from "./index.module.scss";

const HomeLess: React.FC = () => {
  const [language, setLanguage] = useState("EN"); // 默认语言为英文
  const [showLarge, setShowLarge] = useState(false);
  const handleClick = () => {
    setShowLarge(!showLarge); // 切换显示状态
  };
  const contentText: any = {
    EN: {
      title: " CryptoHarvest Mining Pool",
      description: <div>
      <div className={styles.t1}>
        CryptoHarvest: Unlock Your USDT Investment Potential for Exceptional Returns!
      </div>
      <div className={styles.t2}>
        Welcome to CryptoHarvest, a high-yield USDT investment platform! If you're ready to grow
        your crypto assets, CryptoHarvest offers a range of high-return investment options to help
        you reach your financial goals.
      </div>
      <div className={styles.t1}>Why Choose CryptoHarvest?</div>
      <div className={styles.t2}>
        Secure and Reliable: Built on Ethereum blockchain smart contracts, utilizing OpenZeppelin’s
        security protocols to ensure asset safety and transparency.
      </div>
      <div className={styles.t2}>
        AI-Driven Investment Strategies: Our advanced AI algorithms analyze market trends,
        optimize strategies, and dynamically adjust risk, maximizing your returns.
      </div>
      <div className={styles.t2}>
        Diverse Investment Tiers: Whether you’re a newcomer or experienced investor, we provide
        various “Mining Machine” options to match different budgets and risk levels.
      </div>
      <div>
        <Image
          className={styles.m1}
          src={jsen}
          alt="coin"
          width={40}
          height={40}
          onClick={handleClick}
        />
      </div>
      <div className={styles.t2}>
        Flexible Investment Terms: Each mining machine operates on a 30-day cycle, with principal
        and interest withdrawable anytime after the term.
      </div>
      <div className={styles.t2}>
        Convenient Operation: Easily deposit USDT, track earnings in real time, and withdraw funds securely.
      </div>
      <div className={styles.t2}>
        Transparent Operations: Publicly auditable smart contracts ensure transparency and accountability in investment management.
      </div>
      <div className={styles.t2}>
        Growing Investor Community: Join the CryptoHarvest community, share insights, and build wealth with other investors.
      </div>
      <div className={styles.t1}>How It Works:</div>
      <div className={styles.t2}>
        1. Deposit USDT: Choose a mining machine based on your investment amount.
      </div>
      <div className={styles.t2}>
        2. Earn Daily Interest: AI-driven strategies automatically generate daily returns.
      </div>
      <div className={styles.t2}>
        3. Withdraw Anytime: After each 30-day term, withdraw your principal and interest with ease.
      </div>
      <div className={styles.t1}>Start Your Investment Journey</div>
      <div className={styles.t2}>
        With powerful AI investment technology, CryptoHarvest not only boosts your returns but also offers robust risk management in times of market volatility. Discover the future of intelligent investing and join CryptoHarvest today!
      </div>
    </div>
    
    },
    CN: {
      title: "CryptoHarvest矿池",
      description: (
        <div>
          <div className={styles.t1}>
            CryptoHarvest：释放 USDT 投资潜力，赢取高额回报！
          </div>
          <div className={styles.t2}>
            欢迎来到 CryptoHarvest，一个专注于 USDT
            高收益投资的平台！如果您想让加密货币资产增值，CryptoHarvest
            将为您提供多个高回报投资选择，助您达成财务目标。
          </div>
          <div className={styles.t1}>为什么选择 CryptoHarvest？</div>
          <div className={styles.t2}>
            安全可靠：基于 Ethereum 区块链智能合约，采用 OpenZeppelin
            的安全协议，确保您的资产安全、透明。
          </div>
          <div className={styles.t2}>
            AI 智能投资策略：使用先进 AI
            算法实时分析市场、优化投资策略、动态调配风险，为您带来最佳收益。
          </div>
          <div className={styles.t2}>
            多元投资档次：无论是新手还是资深投资者，我们提供不同等级的“矿机”选择，涵盖多种投资额度及风险偏好：
          </div>
          <div>
            <Image
              className={styles.m1}
              src={js}
              alt="coin"
              width={40}
              height={40}
              onClick={handleClick}
            />
          </div>
          <div className={styles.t2}>
            灵活投资期限：每台矿机周期为 30 天，到期后可随时提现本金和利息。
          </div>
          <div className={styles.t2}>
            便捷操作：轻松存入 USDT，实时跟踪收益，安全提现。
          </div>
          <div className={styles.t2}>
            透明运作：公开的智能合约审计记录，确保投资管理透明、公正。
          </div>
          <div className={styles.t2}>
            不断壮大的投资者社区：加入 CryptoHarvest
            社区，与其他投资者共同分享经验和增长财富。
          </div>
          <div className={styles.t1}>如何操作：</div>
          <div className={styles.t2}>
            1.存入 USDT：根据投资额度选择合适的矿机。
          </div>
          <div className={styles.t2}>
            2.赚取日收益：AI 驱动策略每日自动为您积累收益。
          </div>
          <div className={styles.t2}>
            3.随时提现：矿机周期结束后可随时提现本金和利息。
          </div>
          <div className={styles.t1}>开始您的投资之旅</div>
          <div className={styles.t2}>
            凭借强大的 AI 智能投资技术，CryptoHarvest
            不仅为您带来更高收益，还在市场波动中提供更稳健的风险管理。体验智能化投资的未来，今天就加入
            CryptoHarvest ！
          </div>
        </div>
      ),
    },
  };

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
      {showLarge && (
        <div className={styles.overlay} onClick={handleClick}>
          <Image src={language? jsen:js} alt="coin large" className={styles.m2} />
        </div>
      )}
      {/* <Market /> */}
    </MenuProvider>
  );
};

export default HomeLess;
