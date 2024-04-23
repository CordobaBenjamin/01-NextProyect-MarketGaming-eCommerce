
import React from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Layout from "@/app/layout";
import IndexHeader from "@/app/components/index/indexComponents/header";
import IndexArticle from "@/app/components/index/indexComponents/article";
import IndexFooter from "@/app/components/index/indexComponents/footer";

import '../../css/globals.css'

const Index = () => {
  return (
    <Layout >

        <IndexHeader />
        <IndexArticle />
        <IndexFooter />

    </Layout>
  );
};

export default Index;
