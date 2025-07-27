"use client";

import { motion } from "motion/react";

import { GradientBackground } from "@/components/global/backgrounds";

function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-4 py-16 md:gap-8 md:py-24">
      <GradientBackground />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-4xl font-bold md:text-6xl"
      >
        Take control of your
        <span className="text-primary relative mx-1 inline-block stroke-current text-4xl font-extrabold uppercase md:text-6xl">
          money
          <svg
            className="absolute -bottom-0.5 max-h-1.5 w-full"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              strokeWidth="1.5"
            ></path>
          </svg>
        </span>
        with <br className="hidden md:block" /> sensible finance tracking
      </motion.h1>
    </section>
  );
}

export default Hero;
