"use client";
import { SendSol } from "@/components/SendSol";
import { Balance } from "@/components/Balance";
import { Airdrop } from "@/components/Airdrop";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 min-h-screen">
      <div className="w-full md:w-[50%] text-lg md:text-4xl text-center md:text-left mb-8 md:mb-0 ">
        gm, <br></br> welcome to sendsol.fun, add some devnet sol to your wallet
        address, see the changes in the balance and send SOL to your friends -
        in case you wanna launch your own token- head over to{" "}
        <Link href="www.tokendelegation.fun" className="text-violet-500">
          {" "}
          tokendelegation.fun
        </Link>{" "}
        enjoy :)
      </div>
      <div className="w-full md:w-auto">
        <Balance />
        <Airdrop />
        <SendSol />
      </div>
    </div>
  );
};
export default Home;
