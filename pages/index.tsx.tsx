import React from "react";
import Head from "next/head";
import IndexLayout from "@/app/layout";


const IndexPage = () => {
  return (
    <>
    <Head>
      <title> Benjamin Cordoba - Portfolio </title>
      <link rel="icon" href="/icon.png" />
    </Head>
    <IndexLayout>
      <div>{null}</div>
    </IndexLayout>
  </>
  );
};

export default IndexPage;
