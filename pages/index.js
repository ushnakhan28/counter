import About from "@/components/About";
import Header from "@/components/Header";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import React from "react";
import Head from "next/head";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <Header />
      <About />
      <Rooms />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
