"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Perth Carvery
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "The Tasty House" – Great Food, Great Value!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-stone-600 text-sm sm:text-base md:text-lg lg:text-xl text-white px-6 py-3 rounded-lg font-light hover:bg-stone-700 transition"
          >
            Book Now !!
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
