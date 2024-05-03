"use client";

import { useMetaMask } from "@/context/useMetaMask";
import { formatAddress } from "@/utils";
import styles from "./withdrawBtn.module.css";
import Link from "next/link";

export default function WithdrawButton() {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();

  return (
    
    <>
      {typeof window !== 'undefined' && window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
        <button
          className={styles.withdrawBtn}
          disabled={isConnecting}
          onClick={connectMetaMask}
        >
          Connect MetaMask
        </button>
      )}
      {hasProvider && wallet.accounts.length > 0 && (
        <button className={styles.withdrawBtn}>
          {formatAddress(wallet.accounts[0])}
        </button>
      )}
    </>
  );
}

