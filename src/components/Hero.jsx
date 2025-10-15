// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/bg9.jpg";

const listVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-gray-950 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

      {/* Content block (left side, vertically centered) */}
      <motion.div
        initial={{ opacity: 0, x: -36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-6 md:px-20 py-16 flex flex-col justify-center min-h-screen text-left"
      >
        {/* Masked Company Name */}
        <div className="mb-6">
        <h1
  className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextStroke: "0.13px white", // 👈 white border for readability
  }}
>
  ABDULWAHAB TRADING LLC
</h1>
          <p
            dir="rtl"
            className="text-2xl md:text-3xl font-bold text-yellow-300 tracking-wide mt-2"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            عبدالوهاب للتجارة ش.ذ.م.م
          </p>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="flex items-center gap-4 text-sm md:text-base text-gray-300 mb-3">
            <span className="inline-block w-10 h-[1px] bg-gradient-to-r from-yellow-400 to-white opacity-80" />
            <span className="font-medium tracking-wide text-gray-200">
              Beyond Borders —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-300 font-semibold">
                Trade that builds trust
              </span>
            </span>
          </p>

          <h2 className="text-lg md:text-2xl font-semibold text-gray-100 leading-snug">
Providing specialized products and services with uncompromised quality and trust.
 </h2>
        </motion.div>

        {/* Feature Cards with subtle border */}
        <motion.ul
          variants={listVariant}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl"
        >
          {[
            {
              title: "Global Sourcing",
              desc: "Curated suppliers, verified quality across continents.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12h20M12 2c2.5 3 2.5 9 0 12M12 22c-2.5-3-2.5-9 0-12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              title: "Regional Distribution",
              desc: "Reliable MENA network with compliant, timely delivery.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 7h11v10H3zM14 10h4l3 4v3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="7.5" cy="18.5" r="1.5" fill="currentColor" />
                  <circle cx="18.5" cy="18.5" r="1.5" fill="currentColor" />
                </svg>
              ),
            },
            {
              title: "Custom Logistics",
              desc: "Warehousing, kitting & tailored fulfillment solutions.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 16V8l-9-5-9 5v8l9 5 9-5zM3.5 8.5l8.5 5 8.5-5"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              title: "Quality Assurance",
              desc: "Inspections, certifications & compliance checks.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l7 4v6c0 5-3.134 9.5-7 10-3.866-.5-7-5-7-10V6l7-4zM9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              title: "Market Intelligence",
              desc: "Data-driven insights and demand forecasting.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 19V9M10 19V5M16 19v-7M22 19v-3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
          ].map((card, i) => (
            <motion.li
              key={i}
              variants={itemVariant}
              className="flex gap-4 p-4 rounded-xl border border-white/15 hover:border-yellow-400/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] bg-transparent transition-all duration-300 transform hover:scale-[1.03]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg text-yellow-300 transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-100">{card.title}</p>
                <p className="text-sm text-gray-300">{card.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Right Accent Glow */}
      <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-yellow-500 via-yellow-200 to-transparent opacity-30 blur-3xl hidden md:block" />
    </section>
  );
}