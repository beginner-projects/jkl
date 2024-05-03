"use client";

import { usePool } from "@/context/useBitcoinContext";
import { useMetaMask } from "@/context/useMetaMask";
import styles from "./earning.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Web3 from "web3";
import FLTABI from "@/lib/FLTABI.json";
import { formatBalanceEight } from "@/utils";


export default function Home() {
  const { bitcoinPoolBalance } = usePool();
  const { wallet } = useMetaMask();
  const [usersFLTBalance, setUsersFLTBalance] = useState(0);

  // stake
  const myStake = (usersFLTBalance / 100000000) * 100;

  // my income
  const myNextPayout = (bitcoinPoolBalance * myStake) / 100;

  // --------------------------------------

  // fetch FLT token balance
  const tokenAddress = "0x965F527D9159dCe6288a2219DB51fc6Eef120dD1";

  useEffect(() => {
    const fetchFLTBalance = async () => {
      try {
        const web3 = new Web3(
          Web3.givenProvider || "https://bsc-dataseed.binance.org/"
        );
        const tokenContract = new web3.eth.Contract(FLTABI, tokenAddress);
        const tokenBalanceScientific = await tokenContract.methods
          .balanceOf(wallet.accounts[0])
          .call();
        const formattedTokenBalanceScientific = formatBalanceEight(
          tokenBalanceScientific
        );
        setUsersFLTBalance(parseFloat(formattedTokenBalanceScientific));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    const updateUserFltBalance = () => {
      if (!wallet.accounts[0]) {
        setUsersFLTBalance("00");
      }
    }
    updateUserFltBalance();
    fetchFLTBalance();

    const interval = setInterval(fetchFLTBalance, 15000);

    return () => clearInterval(interval);
  }, [wallet.accounts[0], tokenAddress]);

  // --------------------------------------

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.greenDiv}>
        <div>
          <div>
            <p className={styles.pTagOnBoard}>My Balance:</p>
            <h1 className={styles.h1TagOnBoard}>
              {usersFLTBalance > 0
                ? `${usersFLTBalance.toFixed(8)} FLT`
                : "00 FLT"}
            </h1>
          </div>
          <div className={styles.dwBtn}>
            <button className={styles.DBtn}>Deposit</button>
            <button className={styles.WBtn}>Withdraw</button>
          </div>
        </div>
        <Image
          className={styles.flashLogoOnBoard}
          priority="true"
          src="/flash.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.orangeDiv}>
        <div>
          <div>
            <p className={styles.pTagOnBoard}>My Next Payout:</p>
            <h1 className={styles.h1TagOnBoard}>
              {usersFLTBalance > 0
                ? `${myNextPayout.toFixed(0)} sats`
                : "00 sats"}
            </h1>
          </div>

          <h3>⚡ xyz.satoshi</h3>
        </div>
        <Image
          className={styles.bitcoinLogoOnBoard}
          src="/bitcoinFinal.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.footerNav}>
        <Link href="/staking">
          <Image src="/back.svg" alt="back-icon" width={100} height={100} />
        </Link>
        <Link href="/">
          <Image src="/home.svg" alt="home-icon" width={100} height={100} />
        </Link>
        <Link href="/about">
          <Image src="/info.svg" alt="info-icon" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
}
