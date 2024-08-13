"use client";
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
import { useState } from "react";

const SendSol = () => {
  const [balance, setBalance] = useState(0);
  return (
    <div className="flex justify-between">
      <Card className="w-[350px] m-6">
        <CardHeader>
          <CardTitle>send sol</CardTitle>
          <CardDescription>
            send sol to your friends with one click
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">wallet address</Label>
                <Input id="address" className="rounded-xl" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">amount</Label>
                <Input id="amount" className="rounded-xl" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="">
          <Button>send</Button>
        </CardFooter>
      </Card>
      <div>
        <div className="m-6 border-2 px-4 py-1 ">balance : {balance} </div>
      </div>
    </div>
  );
};
export default SendSol;
