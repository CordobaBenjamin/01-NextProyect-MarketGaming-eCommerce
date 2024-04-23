import React from "react";
import Header from "@/app/components/index/indexComponents/header";
import Footer from "@/app/components/index/indexComponents/footer";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarketGaming",
  description: "Gaming Products, eCommerce for Computer Components.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className={`bg-bodyBg`}>
        {children}
      </div>
  );
};

export default Layout;
