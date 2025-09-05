"use client";

import { data } from "@/lib/data";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { easeOut, motion } from "motion/react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="mx-auto"
    >
      <div className="flex justify-center items-center flex-col gap-10 py-20">
        <div className=" group bg-muted text-muted-foreground max-[375px]:text-[8px] max-[400px]:text-[10px] text-xs sm:text-sm cursor-pointer px-6 py-1 rounded-full">
          <span className="flex items-center gap-1">
            {data.hero.banner}{" "}
            <FaArrowRight
              size={11}
              className="group-hover:translate-x-1 transform transition-transform duration-300"
            />
          </span>
        </div>
        <div className="flex justify-center items-center font-manrope gap-5 flex-col">
          <h1 className="sm:text-7xl text-5xl text-center max-w-3xl font-medium tracking-tight text-gradient-primary py-1">
            {data.hero.title}
          </h1>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg text-center">
            {data.hero.subtitle}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="group flex items-center gap-2 bg-foreground text-background relative px-8 py-3 border border-neutral-700 cursor-pointer font-medium rounded-full text-sm hover:-translate-y-1.5 transition duration-200">
            <div className="absolute -bottom-px inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent w-3/4 mx-auto"></div>
            {data.hero.cta}{" "}
            <FaArrowRightToBracket
              size={15}
              className="group-hover:translate-x-0.5 transform transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
