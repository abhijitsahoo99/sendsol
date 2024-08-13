// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Balance } from "@/components/Balance";

// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import * as web3 from "@solana/web3.js";
// import { LAMPORTS_PER_SOL } from "@solana/web3.js";
// import { FC, useState } from "react";

// export const SendSol = () => {
//   const [address, setAddress] = useState("");
//   const [amount, setAmount] = useState(0);

//   const [txSig, setTxSig] = useState("");
//   const {connection} = useConnection();
//   const { publicKey, sendTransaction } = useWallet();
//   const link = () => {
//     return txSig
//       ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
//       : "";
//   };
// const sendsol = async (event: React.FormEvent) => {
//     event.preventDefault()
//     if(!connection || !publicKey){
//         alert("connect wallet")
//     }
//     const transaction = new web3.Transaction()
//     const recipientPubKey = new web3.PublicKey(address)
//     const sendSolInstruction = web3.SystemProgram.transfer({
//         fromPubkey: publicKey,
//         toPubkey: recipientPubKey,
//         lamports: LAMPORTS_PER_SOL * amount,
//     })

//     transaction.add(sendSolInstruction)
//     sendTransaction(transaction, connection).then(sig => {
//         setTxSig(sig)
//     })

//   return (
//     <div>
//       <div className="flex justify-between">
//         <Card className="w-[350px] m-6">
//           <CardHeader>
//             <CardTitle>send sol</CardTitle>
//             <CardDescription>
//               send sol to your friends with one click
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form>
//               <div className="grid w-full items-center gap-4">
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="address">wallet address</Label>
//                   <Input
//                     id="address"
//                     className="rounded-xl"
//                     onChange={(event) => {
//                       setAddress(event.target.value);
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="amount">amount</Label>
//                   <Input
//                     id="amount"
//                     className="rounded-xl"
//                     onChange={(event) => {
//                       setAmount(Number(event.target.value));
//                     }}
//                   />
//                 </div>
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter className="">
//             <Button onClick={sendsol}>send</Button>
//           </CardFooter>
//         </Card>
//         <div>
//           <Balance />
//         </div>
//       </div>
//     </div>
//   );
// };

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
import { Balance } from "@/components/Balance";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useState } from "react";

export const SendSol: FC = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);

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
    } catch (error) {
      console.error("Transaction failed", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <Card className="w-[350px] m-6">
          <CardHeader>
            <CardTitle>Send SOL</CardTitle>
            <CardDescription>
              Send SOL to your friends with one click
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
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
          <CardFooter>
            <Button onClick={sendsol}>Send</Button>
          </CardFooter>
        </Card>
        <div>
          <Balance />
        </div>
      </div>
      {txSig && (
        <div>
          <p>
            Transaction Signature:{" "}
            <a href={link()} target="_blank" rel="noopener noreferrer">
              {txSig}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
