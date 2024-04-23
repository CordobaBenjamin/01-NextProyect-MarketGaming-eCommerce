import React from "react";
import { Metadata } from "next";
import IndexHeader from "@/app/components/index/indexComponents/header";
import IndexArticle from "./components/index/indexComponents/article";
import IndexFooter from "@/app/components/index/indexComponents/footer";
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  const metadata: Metadata = {
    title: "MarketGaming",
    description: "Gaming Products, eCommerce for Computer Components.",
  };

  return (
    <div className={`bg-bodyBg`}>
      <IndexHeader />
      <IndexArticle />
      <IndexFooter />
      {children}
    </div>
  );
};

export default IndexLayout;