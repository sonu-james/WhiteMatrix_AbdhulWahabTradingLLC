"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { TextField, Button } from "@mui/material";
import contactImg from '../assets/images/contactnew.jpg'

export default function ContactModernFlipped() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = encodeURIComponent("New Message from Contact Form");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:raju@wahabintl.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE - TRANSPARENT FORM ON GRADIENT BG */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full flex items-center justify-center py-16 px-6 bg-[#1A83C7]"
      >
        <div
          className="w-full max-w-md p-8 sm:p-10 
        border border-white/60"
        >
          <h2 className="text-4xl font-thin font-roboto text-center text-white  mb-8">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth

              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.73)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#06b6d4",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#06b6d4",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "rgba(255,255,255,0.6)",
                  "&.Mui-focused": {
                    color: "white",
                    transform: "translate(14px, -9px) scale(0.75)", // ensures label goes up left corner
                  },
                },
              }}
            />

            <TextField
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth

              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.73)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#06b6d4",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#06b6d4",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "rgba(255,255,255,0.6)",
                  "&.Mui-focused": {
                    color: "white",
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
              }}
            />

            <TextField
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth

              InputProps={{
                sx: {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.73)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#06b6d4",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#06b6d4",
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "rgba(255,255,255,0.6)",
                  "&.Mui-focused": {
                    color: "white",
                    transform: "translate(14px, -9px) scale(0.75)",
                  },
                },
              }}
            />

            <Button

              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#ffffffff",
                "&:hover": { backgroundColor: "#11ccfaff" },
                fontWeight: "thin",
                fontFamily: "roboto",
                color: "black",
                py: 1.3,
              }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>

      {/* RIGHT SIDE - IMAGE BACKGROUND WITH OVERLAY + TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-auto bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center md:text-left text-white px-6 sm:px-10 py-10 md:py-16 space-y-5 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-roboto">
            Let’s Connect
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-md leading-relaxed mx-auto md:mx-0">
            Reach out to us for inquiries, collaborations, or project discussions.
            We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-200 text-sm sm:text-base">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="text-[#1A83C7]" size={20} />
              <span>+971 55 801 6768</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="text-[#1A83C7]" size={20} />
              <a
                href="mailto:raju@wahabintl.com"
                className="text-[#1A83C7] hover:underline break-all"
              >
                raju@wahabintl.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="text-[#1A83C7] mt-1" size={20} />
                <div className="text-sm sm:text-base">
                  Abdulwahab Trading LLC <br />
                  Silver Home, Hor Al Anz East <br />
                  Abu Hail, Dubai
                </div>
              </div>

              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="text-[#1A83C7] mt-1" size={20} />
                <div className="text-sm sm:text-base">
                  EHAB8674, Bldg: 8674 <br />
                  King Khalid Ibn Abdulaziz <br />
                  Dammam, KSA
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
