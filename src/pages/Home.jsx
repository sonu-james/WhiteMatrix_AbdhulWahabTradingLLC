'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from './About';
import ServicesNew from './ServicesNew';
import ProductSection from '../components/ProductSection';
import WhyChooseUs from '../components/WhyChooseUs';
import OfficeSupplies from '../components/OfficeSupplies';
import Contact from './Contact';
import Footer from '../components/Footer';
import Services from './Services';

function Home() {
  return (
    <>
      <Navbar />
      
      <section id="HOME">
        <Hero />
      </section>

      <section id="ABOUT">
        <About />
      </section>

      <section id="SERVICES">
        <Services />
      </section>

      <section id="PRODUCT">
        <ProductSection />
      </section>

      <section id="WHY US">
        <WhyChooseUs />
      </section>

      <section id="CONTACT">
        <OfficeSupplies />
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;
