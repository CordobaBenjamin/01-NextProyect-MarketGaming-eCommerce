import React from "react";
import { useMode } from "@/app/css/colors Switcher/modeSwitcher";
import Header from "@/app/components/index/indexComponents/header";
import Footer from "@/app/components/index/indexComponents/footer";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModeProvider } from "@/app/css/colors Switcher/modeSwitcher";
import "./css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarketGaming",
  description: "Gaming Products, eCommerce for Computer Components.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Market Gaming</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>

      <body className={``}>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
};

export default Layout;
