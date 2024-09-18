import React, { FC } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as web3 from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export const Airdrop: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function requestAirdrop() {
    setIsLoading(true);
    try {
      if (publicKey) {
        await connection.requestAirdrop(
          publicKey,
          amount * web3.LAMPORTS_PER_SOL
        );
        alert("airdrop successful");
      }
    } catch (error) {
      console.error("Airdrop failed", error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex justify-between">
      <Card className="w-[500px] m-6 mx-8">
        <CardHeader className="rounded-xl">
          <CardTitle className="text-xl">SOL faucet</CardTitle>
          <CardDescription className="font-gilroy">
            Airdrop some devnet SOL
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
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
            onClick={requestAirdrop}
            className="border border-neutral-50 rounded-xl bg-fuchsia-50 text-black hover:text-neutral-50"
          >
            {isLoading ? "dropping some sol..." : "airdrop"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Airdrop;
