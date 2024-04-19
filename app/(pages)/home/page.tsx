import React from "react";
import Layout from "@/app/layout";
import Product_div from "@/app/components/shoppingPage/shoppingComponents/main";
import Aside from "@/app/components/shoppingPage/shoppingComponents/aside";
import Footer from "@/app/components/shoppingPage/shoppingComponents/footer";

const Shop = () => {
  return (
    <Layout>
      <main className="product">
        <article>
          <Product_div />
          <Aside />
        </article>
      </main>
      <Footer />
    </Layout>
  );
};

export default Shop;
