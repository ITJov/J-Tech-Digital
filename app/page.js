'use client';
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Order from "@/components/Order";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Portofolio from "@/components/Portofolio";
import Footer from "@/components/Footer";
import ERPFeatures from "@/components/Future";
import Head from "next/head";
import { assets } from "@/assets/assets";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/sun_icon.png" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Order />
      <Services />
      <Portofolio />
      {/* <Contact /> */}
      <ERPFeatures />
      <Footer />
    </>
  );
}
