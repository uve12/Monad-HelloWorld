import { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = () => {
  const [wallet, setWallet] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected!");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWallet(accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Connection failed!");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {wallet ? `Connected: ${wallet.slice(0, 6)}...` : "Connect Wallet"}
      </button>
    </div>
  );
};

export default ConnectWallet;
