"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaOilCan,
  FaCogs,
  FaGlassCheers,
  FaHammer,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry className="text-4xl text-cyan-400" />,
    title: "ALUMINUM",
    description:
      "Providing high-grade raw materials, smelting technology, and sustainability-driven aluminum solutions.",
    // img: "/images/img1.jpg",
  },
  {
    icon: <FaCogs className="text-4xl text-cyan-400" />,
    title: "IRON & STEEL",
    description:
      "Supplying industrial machinery, maintenance tools, and quality steelmaking components for efficiency and safety.",
    // img: "/images/img2.jpeg",
  },
  {
    icon: <FaOilCan className="text-4xl text-cyan-400" />,
    title: "OIL & GAS",
    description:
      "Delivering reliable tools, process equipment, and engineered products for the energy sector.",
    // img: "/images/img3.png",
  },
  {
    icon: <FaHammer className="text-4xl text-cyan-400" />,
    title: "CEMENT INDUSTRY",
    description:
      "Optimizing cement production with process automation, parts supply, and sustainable production solutions.",
    // img: "/images/img4.jpg",
  },
  {
    icon: <FaGlassCheers className="text-4xl text-cyan-400" />,
    title: "GLASS INDUSTRY",
    description:
      "Supporting glass manufacturers with raw materials, processing machinery, and precision technology.",
    // img: "/images/img5.jpeg",
  },
];

// Animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gray-900 text-white py-24 px-6">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-extrabold  inline-block relative pb-3 font-heading"
        >
          Our <span className="text-white">Services</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-1.5 bg-cyan-400 rounded-full"></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl"
        >
          Explore the services we provide across industries with innovation and efficiency.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center"
      >
        {services.slice(0, 3).map((item, index) => (
          <ServiceCard
            key={index}
            item={item}
            hovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
            variants={cardVariants}
          />
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8"
      >
        {services.slice(3, 5).map((item, index) => (
          <ServiceCard
            key={index + 3}
            item={item}
            hovered={hoveredIndex === index + 3}
            onHover={() => setHoveredIndex(index + 3)}
            onLeave={() => setHoveredIndex(null)}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}

// Card Component
function ServiceCard({ item, hovered, onHover, onLeave, variants }) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      variants={variants}
      className="relative bg-gray-800 cursor-pointer flex flex-col justify-between w-full max-w-sm overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300"
    >
      {/* Hover Image Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.25 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        <div className="flex items-start gap-4">
          <div>{item.icon}</div>
          <div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300 text-medium">{item.description}</p>
          </div>
        </div>
        <div className="mt-4 h-[2px] w-16 bg-cyan-400"></div>
      </div>
    </motion.div>
  );
}
