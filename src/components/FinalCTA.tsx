import { data } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FinalCTA = () => {
  return (
    <div className="my-16 relative ">
      <div className="absolute inset-0 z-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-"></div>
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] sm:w-[80%] h-32 xs:h-40 sm:h-64 md:h-72 lg:h-80 rounded-b-2xl sm:rounded-b-3xl"
          style={{
            background:
              "radial-gradient(at center bottom, rgb(255, 184, 106) 0%, rgb(255, 137, 4) 40%, transparent 80%)",
            opacity: "0.4",
            filter: "blur(8px)",
          }}
        ></div>
      </div>
      <div className="py-20 max-w-6xl mx-auto rounded-2xl ">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-manrope font-medium tracking-tight max-w-4xl text-center">
              {data.final_CTA.title}
            </h1>
            <p className="max-w-2xl text-center px-2">
              {data.final_CTA.subtitle}
            </p>
          </div>

          <Link href={data.final_CTA.link}>
            <button className="group flex items-center gap-1 bg-foreground text-background relative px-10 py-3 border border-neutral-700 cursor-pointer font-medium rounded-full text-base hover:scale-105 transform transition-transform duration-300">
              <div className="absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              Start your free trial{" "}
              <FiArrowUpRight
                size={20}
                className="group-hover:translate-x-1 transform transition-transform duration-300"
              />
            </button>
          </Link>
        </div>
        {/* <div className="absolute -z-10 bottom-0 bg-gradient-to-t from-orange-300 via-orange-100 to-transparent w-full h-40 rounded-2xl"></div> */}
      </div>
    </div>
  );
};

export default FinalCTA;
