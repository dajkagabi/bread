import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import hero from "../../assets/hero-bg.jpg";

const Hero = () => {
  motion
  return (
    
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      
      <div className="absolute inset-0 bg-black/10" />

     
      <motion.div
        className="relative text-center text-white px-6"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold drop-shadow-lg"
          whileInView={{ scale: [0.9, 1], opacity: [0.8, 1] }}
          transition={{ duration: 0.8 }}
        >
          Friss pékáruk minden reggel
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A kemencéből egyenesen az asztalodra
        </motion.p>

        <motion.button
          className="mt-10 px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-2xl text-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        <Link to="/termekek">Nézd meg kínálatunkat</Link>
          
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
