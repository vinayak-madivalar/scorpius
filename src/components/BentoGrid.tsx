"use client";

import { data } from "@/lib/data";
import { useState } from "react";
import BadgeButton from "./ui/BadgeButton";
import { RiFlashlightFill } from "react-icons/ri";
import { easeOut, motion } from "motion/react";
import { GoDotFill } from "react-icons/go";
import { LuLightbulb } from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { SlMicrophone } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const Bento = () => {
  const [tab, setTab] = useState<"best" | "queue" | "zones">("best");

  const renderButton = (label: string, value: typeof tab) => (
    <button
      className={`
                rounded-full px-4 py-2 text- flex items-center gap-1 cursor-pointer transition-colors duration-200
                ${
                  tab === value
                    ? "bg-orange-400 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
            `}
      onClick={() => setTab(value)}
      type="button"
    >
      <GoDotFill size={18} />
      {label}
    </button>
  );

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Smart scheduling */}
        <div className="rounded-2xl p-6 border dark:border-muted border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-orange-400/20 hover:scale-102 ease-in-out duration-500 transition-all bg-gradient-to-br from-[#FD6F01]/20 from-0% via-[#FFB000]/20 via-30% to-transparent to-60%">
          <h3 className="text-2xl font-manrope font-semibold ">
            {data.features[0].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[0].description}
          </p>
          <div className="mt-6 flex gap-4">
            {renderButton("Sync", "best")}
            {renderButton("Plan", "queue")}
          </div>
          <div className="mt-3">{renderButton("Tune", "zones")}</div>
        </div>

        {/* Advanced analytics */}
        <div className="rounded-2xl p-6 border dark:border-muted border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-orange-400/20 hover:scale-102 duration-500 ease-in-out transition-all bg-gradient-to-bl from-[#FD6F01]/20 from-0% via-[#FFB000]/20 via-30% to-transparent to-60%">
          <h3 className="text-2xl font-manrope font-semibold">
            {data.features[1].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[1].description}
          </p>
          <div className=" rounded-lg p-4 mt-4 border bg-background border-lime-500/20">
            <div className="flex items-start">
              <div className="bg-orange-400 text-black p-1 rounded mr-3">
                <LuLightbulb size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  AI‑Powered Insights
                </h3>
                <ul className="text-muted-foreground text-sm mt-2 list-disc list-inside space-y-1">
                  <li>
                    AI-powered insights for advanced analytics deliver
                    data-driven results.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Team Collaboration */}
        <div className="rounded-2xl p-6 border dark:border-muted border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-orange-400/20 hover:scale-102 duration-500 ease-in-out transition-all bg-gradient-to-tr from-[#FD6F01]/20 from-0% via-[#FFB000]/20 via-30% to-transparent to-60%">
          <h3 className="text-2xl font-manrope font-semibold ">
            {data.features[2].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[2].description}
          </p>

          <div className="mt-6 flex items-center justify-between bg-background rounded-lg border border-gray-200 dark:border-muted px-4 py-3">
            <div className="text-foreground text-sm">
              Learn More about Roles
            </div>
            <button className="bg-orange-400 rounded-full p-2 transition-colors">
              <FiArrowUpRight size={18} color="black" />
            </button>
          </div>
        </div>

        {/* 4. Social Listening (Spans 2 columns) */}
        <div className="md:col-span-2 rounded-2xl p-6 flex flex-col justify-between border border-neutral-200 dark:border-muted  shadow-sm hover:shadow-xl hover:shadow-orange-400/20 hover:scale-102 duration-500 ease-in-out transition-all bg-gradient-to-bl from-[#FD6F01]/20 from-0% via-[#FFB000]/20 via-30% to-transparent to-60%">
          <div>
            <h3 className="text-2xl font-manrope font-semibold">
              {data.features[3].title}
            </h3>
            <p className="mt-1.5 text-muted-foreground">
              {data.features[3].description}
            </p>
          </div>
          <div className="mt-4 rounded-lg p-4 border bg-background border-lime-500/20 max-w-lg">
            <div className="flex items-start">
              <div className="bg-orange-400 p-1 rounded mr-3">
                <span className="font-mono">
                  <SlMicrophone size={18} />
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  Listening Rule
                </h3>
                <ul className="text-muted-foreground text-sm mt-2 list-disc list-inside space-y-1">
                  <li>Rule: Brand Reputation.</li>
                  <li>
                    Monitor keywords: &#34;@yourbrand,&#34;
                    &#34;#brandlove.&#34; Alert: &#34;negative.&#34;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Multi-Platform Publishing */}
        <div className="rounded-2xl p-6 border border-neutral-200 dark:border-muted shadow-sm hover:shadow-xl hover:shadow-orange-400/20 hover:scale-102 duration-500 ease-in-out transition-all bg-radial from-[#FD6F01]/20 from-0% via-[#FFB000]/20 via-30% to-transparent to-60%">
          <h3 className="text-2xl font-manrope font-semibold ">
            {data.features[4].title}
          </h3>
          <p className="mt-1.5 text-muted-foreground">
            {data.features[4].description}
          </p>

          <div className="mt-6 flex space-x-3 items-center">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-background">
              <FaFacebookF size={20} />
            </div>
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center  text-xs font-bold text-background">
              <FaInstagram size={23} />
            </div>
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-background">
              <FaXTwitter size={20} />
            </div>
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-background text-xs font-bold">
              <FaLinkedinIn size={20} />
            </div>
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-background text-xs font-bold">
              <FaYoutube size={22} />
            </div>
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-background text-xs font-bold">
              <FaTiktok size={22} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Bento;
