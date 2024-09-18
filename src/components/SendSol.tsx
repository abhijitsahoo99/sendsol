import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useState } from "react";

export const SendSol: FC = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");

  const [txSig, setTxSig] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const sendsol = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!connection || !publicKey) {
      alert("connect wallet");
      return;
    }
    try {
      const transaction = new web3.Transaction();
      const recipientPubKey = new web3.PublicKey(address);
      const sendSolInstruction = web3.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: recipientPubKey,
        lamports: LAMPORTS_PER_SOL * amount,
      });

      transaction.add(sendSolInstruction);
      const signature = await sendTransaction(transaction, connection);
      setTxSig(signature);
      setStatus("success");
      toast.success("🦄 send sol!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Transaction failed", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <Card className="w-[500px] m-6 mx-8">
          <CardHeader className="rounded-xl">
            <CardTitle className="text-xl">Send SOL</CardTitle>
            <CardDescription className="font-gilroy">
              Send SOL to your friends with one click
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="address">Wallet Address</Label>
                  <Input
                    id="address"
                    className="rounded-xl"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    className="rounded-xl"
                    type="number"
                    onChange={(event) => {
                      setAmount(Number(event.target.value));
                    }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="rounded-xl">
            <Button
              onClick={sendsol}
              className="border border-neutral-50 rounded-xl bg-fuchsia-50 text-black hover:text-neutral-50"
            >
              Send
            </Button>
          </CardFooter>
        </Card>
        {/* <div>
          <Balance />
          <Airdrop />
        </div> */}
      </div>
      {/* <Transaction txLink={link()} amount={amount} status={status} /> */}
    </div>
  );
};
