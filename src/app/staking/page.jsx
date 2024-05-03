'use client'

import React from "react";
import { usePool } from '@/context/useBitcoinContext'; 
import Link from "next/link";
import styles from "./staking.module.css";
import Image from "next/image";
import Timer from "@/components/Timer/Timer";

export default function Home() {

  const { bitcoinPoolBalance } = usePool();

  return (
    
    <main>
      {/* Mobile UI */}
      <div className={styles.pool}>
        <Image
          className={styles.moneyBag}
          src="/bitcoinBag.svg"
          alt="bitcoinBag-icon"
          height={350}
          width={350}
        />
        <div className={styles.balanceTimerDiv}>
          <div className={styles.bitcoinBalanceMainDiv}>
            <h3 className={styles.subTag}>Bitcoin Pool: (satoshi)</h3>
            <h1 className={styles.bitcoinBalanceMain}>{bitcoinPoolBalance}</h1>
          </div>
          <div className={styles.timerDiv}>
            <p className={styles.timerCounter}>
              <Image
                className={styles.timerIcon}
                src="/timer.svg"
                alt="timer-icon"
                height={10}
                width={10}
              />
              <Timer />
            </p>
          </div>
        </div>
        <Link href="/earning">
          <Image
            className={styles.arrowright}
            src="/arrow.svg"
            alt="arrow-icon"
            height={50}
            width={50}
          />
        </Link>
      </div>
    </main>
  );
}
