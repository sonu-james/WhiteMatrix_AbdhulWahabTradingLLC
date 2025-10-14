"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BentoGrid from "./bentogrid";
import { ArrowForward, ArrowRightAlt } from "@mui/icons-material";


export default function ProductSection() {
  
  const navigate = useNavigate()

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
     <div className="w-full min-h-[90vh] items-center px-8 py-10 md:px-19 bg-white overflow-hidden">
          {/* LEFT TEXT */}
    
    <div className="flex w-full flex-col justify-center items-start md:items-center  px-5  text-center md:text-left">
     
     
    {/* <motion.div
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
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black 
        opacity-0 animate-fade-in-down">
                Explore Our Products
              </h2>

            </motion.div>
            <p className="text-lg leading-relaxed mb-6  text-gray-800
        opacity-0 animate-fade-in-up animation-delay-300">
              
              Through our strong global sourcing network, <span className="font-bold">
ABDULWAHAB TRADING LLC
              </span>{" "} connects you to world-class manufacturers and suppliers, offering only the finest quality products. 
              <br />
             
            </p>
          </motion.div> */}
 <div className="text-center my-12 px-4">
      {/* Heading Animation */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-thin mb-4 tracking-wide font-roboto"
      >
        Explore Our Products
      </motion.h1>

      {/* Paragraph Animation with Delay */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto font-thin font-roboto"
      >
        Through our strong global sourcing network,{" "}
        <span className="font-semibold">ABDULWAHAB TRADING LLC</span> connects you to
        world-class manufacturers and suppliers, offering only the finest quality products.
      </motion.p>

      {/* Optional subtle hover effect for fun */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* You can place a button or arrow icon here if needed */}
      </motion.div>
    </div>
    
    
    
     
    
      {/* Button */}
     {/* <motion.button
      className="relative px-8 py-3 rounded-full font-semibold text-white  bg-gradient-to-b from-[#004848] to-[#012b2b] text-white border border-cyan-400 transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] hover:scale-105 m-10"
      onClick={() => navigate("/products")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
    >
      <div className="flex">
        Explore
        <motion.span
          className="ms-3 flex"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowForward />
        </motion.span>
      </div>
    </motion.button>  */}
   {/*  <div className="m-5">
      <Fab variant="extended">
   <span className="font-light font-roboto font-bold"> Explore</span>
       <ArrowRightAlt sx={{ mr: 1 }} className="ms-2" />

  </Fab>
    </div> */}
    
    
    </div>
      <div className=""><BentoGrid/></div>
      {/* Button */}
     <div className="w-full flex justify-center">
       <motion.button
        className="relative px-8 py-3 rounded-full font-light font-roboto text-white  bg-gradient-to-b from-[#1A83C7] to-[#1A83C7] text-white border  transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] hover:scale-105 m-10"
        onClick={() => navigate("/products")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <div className="flex">
          Explore
          <motion.span
            className="ms-3 flex"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowForward />
          </motion.span>
        </div>
      </motion.button>  
     </div>
      </div>

  );
}
