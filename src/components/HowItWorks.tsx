import { data } from "@/lib/data";
import React from "react";
import Image from "next/image";
import BadgeButton from "./ui/BadgeButton";
import { RiFlashlightFill } from "react-icons/ri";

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <BadgeButton label="Quick & Easy" icon={RiFlashlightFill} />
        <div className="flex flex-col justify-center gap-2 items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-manrope font-medium tracking-tight text-center ">
            How It <span className="text-gradient-primary">Works</span>
          </h1>
          <p className="max-w-xl text-sm md:text-base text-center text-muted-foreground">
            Easily link your platforms, organize content in one place, and let
            automation handle posting across channels.
          </p>
        </div>
      </div>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          {data.howItWorks.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start max-w-xl py-4 px-6 border border-muted rounded-2xl shadow-md"
            >
              <div className="pt-6">
                <Image
                  src={`/${item.img_id}`}
                  alt="number"
                  width={45}
                  height={45}
                  className="w-8 sm:w-10 lg:w-12"
                />
              </div>
              <div className="py-6">
                <h3 className="text-xl md:text-2xl font-manrope font-semibold tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
