
import React from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Layout from "@/app/layout";
import Header from "@/app/components/index/indexComponents/header";
import Article from "@/app/components/index/indexComponents/article";
import Footer from "@/app/components/index/indexComponents/footer";

import '../../css/globals.css'

const Index = () => {
  return (
    <Layout >

        <Header />
        <Article />
        <Footer />

    </Layout>
  );
};

export default Index;
