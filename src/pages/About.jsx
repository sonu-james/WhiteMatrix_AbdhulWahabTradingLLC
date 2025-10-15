"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import aboutImg from "../assets/images/image.jpg";

export default function AboutSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full overflow-hidden font-inter">
      {/* ABOUT US SECTION */}
      <div className="flex flex-col md:flex-row md:min-h-screen">
        {/* LEFT TEXT */}
        <div className="relative flex-1 flex items-center justify-center bg-[#1A83C7] text-white px-6 py-10 md:p-16 overflow-hidden group">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl z-10 text-center md:text-left"
          >
              <motion.h1
                 initial={{ y: -50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="text-3xl sm:text-5xl md:text-6xl font-thin mb-4 tracking-wide font-roboto text-white text-center"
               >
                About Us
               </motion.h1>

            <p className="text-base sm:text-lg md:text-[17px] leading-relaxed  font-light font-roboto text-gray-100 text-center md:text-center">
              <span className="font-semibold text-white">
                ABDULWAHAB TRADING LLC
              </span>{" "}
              has established a strong reputation as one of the leading suppliers of specialized
              industrial goods and services in the Middle East. We proudly deliver high-quality
              products sourced from top global manufacturers, supporting industries across Saudi
              Arabia, the United Arab Emirates, and beyond.
              <br />
              <br />
              Through innovation, integrity, and consistency, we have built long-term partnerships
              with our clients and adapted to the evolving demands of the global and GCC markets.
              Our unwavering focus on quality and service has positioned us as a key collaborator
              for industries seeking excellence and reliability.
            </p>
          </motion.div>

          {/* Quarter Circle Glow */}
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-tr-full 
                       opacity-0 blur-3xl scale-75
                       transition-all duration-[1500ms] ease-out 
                       group-hover:opacity-90 group-hover:scale-125 group-hover:blur-2xl"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex-1 overflow-hidden group cursor-pointer h-[300px] sm:h-auto">
          <div
            className="w-full h-[300px] sm:h-[400px] md:h-full bg-center bg-cover transition-transform duration-[1500ms] ease-in-out group-hover:scale-125"
            style={{ backgroundImage: `url(${aboutImg})` }}
          ></div>
          <div className="absolute inset-0 mix-blend-multiply transition-all duration-[1500ms] ease-in-out group-hover:bg-cyan-800/20" />
        </div>
      </div>

      {/* MISSION & VISION SECTION */}
     <div className="w-full  font-inter px-4 md:px-12 py-12 md:py-16 min-h-[200px] flex items-center bg-gray-800">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-10">
    
    {/* MISSION */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex-1"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-light tracking-tight text-center mb-3 text-white">
        Our Mission
      </h2>
      <div className="space-y-3 text-xs sm:text-sm font-light font-roboto text-gray-700 leading-relaxed text-white text-justify">
        <p>Engage in trade with a focus on quality services to customers and professional competences.</p>
        <p>Develop new markets and products, and expand business in Industrial Raw Materials, Commodities, and Engineering Equipment and Projects.</p>
        <p>Serve as an effective instrument of public policy and social responsibility.</p>
      </div>
    </motion.div>

    {/* VISION */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex-1"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-light tracking-tight text-center mb-3 text-white">
        Our Vision
      </h2>
      <p className="text-xs sm:text-sm font-light font-roboto text-gray-700 leading-relaxed text-center text-white">
        To be the trading company of choice of the customers, principals, and investors through dedicated professionalism.
      </p>
    </motion.div>

  </div>
</div>

    </section>
  );
}
