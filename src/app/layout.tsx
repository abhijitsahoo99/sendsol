import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { WalletContextProvider } from "./context/WalletContextProvider";
import Appbar from "@/components/Appbar";


const denton = localFont({ 
  src: '../../public/fonts/Denton-Font-Family/Denton Test Thin 100.otf',
  variable: '--font-denton'
})
const gilroy = localFont({ 
  src: '../../public/fonts/gilroy/Gilroy-Regular.ttf',
  variable: '--font-gilroy'
})

export const metadata: Metadata = {
  title: "sendsol.fun",
  description: "send sol to your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${denton.className} ${gilroy.className}`}>
        <WalletContextProvider>
          <Appbar />
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
