"use client";

import { data } from "@/lib/data";
import BadgeButton from "./ui/BadgeButton";
import { RiFlashlightFill } from "react-icons/ri";
import Image from "next/image";
import { easeOut, motion } from "motion/react";

const Bento = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="mx-auto mb-10 max-w-2xl">
        <div className="flex items-center justify-center mb-4">
          <BadgeButton label="Features" icon={RiFlashlightFill} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-manrope font-medium tracking-tight text-center ">
          Everything you need to dominate{" "}
          <span className="text-gradient-primary">Social Media</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="relative md:col-span-2 md:row-span-1 rounded-2xl px-6 py-6 border border-neutral-200 dark:border-muted hover:shadow-2xl hover:scale-[102%] transistion-all duration-300 shadow-orange-300">
          <Image
            src="/dashboard.png"
            alt="analytics"
            width={500}
            height={500}
            className="w-full mb-6 rounded-2xl"
          />
          <h3 className="text-xl font-manrope font-medium">
            {data.features[0].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[0].description}
          </p>
        </div>

        <div className="relative rounded-2xl p-6  border border-neutral-200 dark:border-muted hover:shadow-2xl hover:scale-[102%] transistion-all duration-300 shadow-orange-300">
          <Image
            src="/collaboration.png"
            alt="collaboration"
            width={500}
            height={500}
            className="w-full mb-6"
          />
          <h3 className="text-xl font-manrope font-medium">
            {data.features[1].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[1].description}
          </p>
        </div>

        <div className="relative rounded-2xl p-6  border border-neutral-200 dark:border-muted hover:shadow-2xl hover:scale-[102%] transistion-all duration-300 shadow-orange-300">
          <Image
            src="/social.png"
            alt="analytics"
            width={500}
            height={500}
            className="w-full mb-6"
          />
          <h3 className="text-xl font-manrope font-medium">
            {data.features[2].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[2].description}
          </p>
        </div>

        <div className="relative  rounded-2xl p-6 flex flex-col justify-between border border-neutral-200 dark:border-muted hover:shadow-2xl hover:scale-[102%] transistion-all duration-300 shadow-orange-300">
          <Image
            src="/schedule.png"
            alt="analytics"
            width={500}
            height={500}
            className="w-full mb-6"
          />
          <div>
            <h3 className="text-xl font-manrope font-medium">
              {data.features[3].title}
            </h3>
            <p className="mt-1.5 text-muted-foreground">
              {data.features[3].description}
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl p-6 border border-neutral-200 dark:border-muted hover:shadow-2xl hover:scale-[102%] transistion-all duration-300 shadow-orange-300">
          <Image
            src="/listening.png"
            alt="analytics"
            width={200}
            height={500}
            className="w-full mb-6"
          />
          <h3 className="text-xl font-manrope font-medium">
            {data.features[4].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[4].description}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Bento;
