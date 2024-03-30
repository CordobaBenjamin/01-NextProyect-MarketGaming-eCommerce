import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './indexComponents/header';
import Footer from './indexComponents/footer';
import Article from './indexComponents/article';
import "./cssStyles/page.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MarketGaming',
  description: 'Gaming Products, eCommerce for Computer Components.',
};

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Header />
      <Article />
      <Footer />
    </html>
  );
};

export default IndexLayout;