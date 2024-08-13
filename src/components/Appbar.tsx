"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";

const Appbar = () => {
  const { publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const handleWalletAction = () => {
    if (publicKey) {
      disconnect();
    } else {
      setVisible(true);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <p>sendsol.fun</p>
        <Button
          onClick={handleWalletAction}
          className="bg-white hover:bg-fuchsia-50 text-blakc"
        >
          {publicKey
            ? `${publicKey.toBase58().slice(0, 4)}...${publicKey
                .toBase58()
                .slice(-4)}`
            : "connect wallet"}
        </Button>
      </div>
      <div className="border-b-2"></div>
    </>
  );
};
export default Appbar;
