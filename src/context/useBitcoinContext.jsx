"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import btcbABI from "@/lib/btcbABI";
import { formatBitcoinBalanceInSats } from "@/utils";

const PoolContext = createContext();

export const usePool = () => useContext(PoolContext);

// bitcoin balance
const fetchBitcoinBalance = async (
  web3,
  tokenAddress,
  walletAddress,
  setBalance
) => {
  try {
    const tokenContract = new web3.eth.Contract(btcbABI, tokenAddress);
    const tokenBalanceScientific = await tokenContract.methods
      .balanceOf(walletAddress)
      .call();
    const tokenBalanceDecimal = formatBitcoinBalanceInSats(
      tokenBalanceScientific
    );
    setBalance(parseFloat(tokenBalanceDecimal));
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

export const PoolProvider = ({ children }) => {
  const [bitcoinPoolBalance, setBitcoinPoolBalance] = useState(null);

  const walletAddress = "0x1eED63EfBA5f81D95bfe37d82C8E736b974F477b";
  const tokenAddress = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";

  useEffect(() => {
    const fetchBalance = async () => {
      const web3 = new Web3(
        Web3.givenProvider || "https://bsc-dataseed.binance.org/"
      );
      await fetchBitcoinBalance(
        web3,
        tokenAddress,
        walletAddress,
        setBitcoinPoolBalance
      );
    };

    fetchBalance();

    const interval = setInterval(fetchBalance, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PoolContext.Provider value={{ bitcoinPoolBalance }}>
      {children}
    </PoolContext.Provider>
  );
};
