"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import leftarraw from "../../public/images/leftarraw.png";
import { useRouter } from "next/navigation";

interface TopProps {
  title: string;
  backUrl: string;
}

const NativeBar: React.FC<TopProps> = ({ title, backUrl }) => {
  const router = useRouter();
  const goBack = () => {
    router.push(backUrl);
  };

  return (
    <div className={styles.nativeBar}>
      <div className={styles.leftarraw}>
        <Image
          onClick={() => goBack()}
          className={styles.m1}
          src={leftarraw}
          alt="coin"
          width={50}
          height={50}
        />
        <div className={styles.t1}>{title}</div>
      </div>
    </div>
  );
};

export default NativeBar;
