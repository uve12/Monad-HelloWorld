import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ABI, BYTECODE } from "../utils/contract";

const DeployContract = () => {
  const [deploying, setDeploying] = useState(false);
  const [contractAddress, setContractAddress] = useState("");

  const deployContract = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      setDeploying(true);
      const factory = new ethers.ContractFactory(CONTRACT_ABI, BYTECODE, signer);
      const contract = await factory.deploy();
      await contract.deployed();

      setContractAddress(contract.address);
      alert(`Contract Deployed at: ${contract.address}`);
    } catch (error) {
      console.error("Deployment Failed:", error);
      alert("Transaction Failed!");
    } finally {
      setDeploying(false);
    }
  };

  return (
    <div>
      <button onClick={deployContract} disabled={deploying}>
        {deploying ? "Deploying..." : "Deploy Contract"}
      </button>
      {contractAddress && <p>Contract Address: {contractAddress}</p>}
    </div>
  );
};

export default DeployContract;
