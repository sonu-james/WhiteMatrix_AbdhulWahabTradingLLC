"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import thermowell from '../assets/images/thermowell.avif'
import guages from '../assets/images/guages.webp'
import indicators from '../assets/images/indicators.jpg'
import cables from '../assets/images/cables.jpg'
import steelShots from '../assets/images/steelShots.jpg'
import solenoidValves from '../assets/images/solenoidValves.jpg'
import Collectors from '../assets/images/Collectors-Hepas.jpg'
import ceramicBlanket from '../assets/images/ceramicBlanket.jpeg'
import bricks from '../assets/images/bricks.jpeg'
import mortar from '../assets/images/mortar.jpeg'
import steel from '../assets/images/steel.jpg'
import processValves from '../assets/images/processValves.jpeg'
import cylinders from '../assets/images/cylinders.png'
import gaskets from '../assets/images/gaskets.jpeg'
import coating from '../assets/images/marineCoating.jpg'
import battery from '../assets/images/battery.jpg'
import liquidFilter from '../assets/images/liquidFilter.jpg'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const allProducts = [
  // === EXISTING PRODUCTS ===
  {
    title: "THERMOCOUPLE / THERMOWELL / RTD’S",
    desc: "High accuracy and durable temperature sensors for industrial applications.",
    category: "Temperature",
    image: thermowell,
  },
  {
    title: "GAUGES / TRANSMITTERS",
    desc: "Reliable measurement and transmission of pressure and process data.",
    category: "Pressure",
    image: guages,
  },
  {
    title: "INDICATORS / CONTROLLERS",
    desc: "Smart display and control systems for industrial automation.",
    category: "Automation",
    image: indicators,
  },
  {
    title: "CABLES",
    desc: "Premium-grade thermocouple and signal cables with superior insulation.",
    category: "Electrical",
    image: cables,
  },
  {
    title: "STEEL SHOTS / GRITS",
    desc: "High-strength blasting materials for cleaning and surface finishing.",
    category: "Materials",
    image: steelShots,
  },

  // === NEW PRODUCTS (from your slide) ===
  {
    title: "CERAMIC BLANKETS & ACCESSORIES",
    desc: "High-temperature insulation materials for furnace and kiln applications.",
    category: "Refractory",
    image: ceramicBlanket,
  },
  {
    title: "REFRACTORY BRICKS",
    desc: "Durable heat-resistant bricks for lining furnaces, kilns, and reactors.",
    category: "Refractory",
    image: bricks,
  },
  {
    title: "REFRACTORY MORTAR",
    desc: "High-bonding mortar for joining refractory bricks in high-temperature systems.",
    category: "Refractory",
    image: mortar,
  },
  {
    title: "STEEL ROUND BARS",
    desc: "Precision-engineered round bars with high tensile strength for industrial use.",
    category: "Materials",
    image: steel,
  },

  // === ADDITIONAL PRODUCTS COMPLETED ===
  {
    title: "PROCESS VALVES",
    desc: "Durable industrial valves for precise control of process flow and pressure.",
    category: "Flow Control",
    image: processValves,
  },
  {
    title: "SOLENOID VALVES",
    desc: "Electrically operated valves for automation of fluid and gas control systems.",
    category: "Automation",
    image: solenoidValves,
  },
  {
    title: "PNEUMATIC CYLINDERS",
    desc: "High-performance actuators for efficient motion control in automation systems.",
    category: "Pneumatics",
    image: cylinders,
  },
  {
    title: "FILTER SOLUTIONS (DUST FILTER)",
    desc: "Industrial dust filtration systems ensuring clean air and equipment protection.",
    category: "Filtration",
    image: Collectors,
  },
  {
    title: "FILTER SOLUTIONS (LIQUID FILTER)",
    desc: "Reliable liquid filtration ensuring purity, system efficiency, and reduced maintenance.",
    category: "Filtration",
    image: liquidFilter,
  },
  {
    title: "METALLIC GASKETS (ALL TYPES)",
    desc: "Leak-proof sealing solutions designed for high-pressure and high-temperature applications.",
    category: "Sealing Solutions",
    image: gaskets,
  },
  {
    title: "INDUSTRIAL / MARINE COATINGS",
    desc: "Protective coatings engineered to resist corrosion and harsh marine environments.",
    category: "Surface Protection",
    image: coating,
  },
  {
    title: "BATTERY HEALTH MONITORING SYSTEM",
    desc: "Real-time monitoring solution to track battery performance and prevent failures.",
    category: "Electronics",
    image: battery,
  },
];


export default function Commodities() {
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    // Always scroll to top when Products page mounts
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredProducts =
    filter === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === filter);
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-20 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" z-10 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl ]]]
                 font-poppins font-thin text-[#1A83C7]  \ ">
              Our Industrial Products
            </h2>
            <p className="text-sm md:m-10 m-5 font-light font-roboto md:text-base text-gray-700 leading-snug">

              Through our strong global sourcing network, <span className="font-bold">
                ABDULWAHAB TRADING LLC
              </span>{" "} connects you to world-class manufacturers and suppliers, offering only the finest quality products.
              <br />

            </p>
          </motion.div>

        </motion.div>
        <section className="relative max-w-7xl mx-auto px-6 py-1 flex gap-10">

          {/* PRODUCT GRID */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
          >
            {filteredProducts.map((product, idx) => {
              const columns = 3; // adjust if you change grid-cols
              const row = Math.floor(idx / columns);
              const isEvenRow = row % 2 === 0; // alternate motion direction

              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      x: isEvenRow ? -60 : 60, // alternate from left/right
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      transition: {
                        duration: 0.7,
                        delay: row * 0.25, // row-by-row stagger
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  className="relative flex flex-col bg-white overflow-hidden border-l-2 border-l-[#1A83C7]  cursor-pointer"
                >
                  {/* Default: Title & Description */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <h2 className="font-light font-roboto">
                      {product.title}
                    </h2>
                    <p className="text-sm font-light font-roboto my-2 text-gray-700">{product.desc}</p>
                  </motion.div>

                  {/* Hover: Image with overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h2 className="text-white text-lg font-bold text-center px-4">
                        {product.title}
                      </h2>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}
