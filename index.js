import ConnectWallet from "../components/ConnectWallet";
import DeployContract from "../components/DeployContract";

export default function Home() {
  return (
    <div>
      <h1>Hello World Contract on Monad</h1>
      <ConnectWallet />
      <DeployContract />
    </div>
  );
}
