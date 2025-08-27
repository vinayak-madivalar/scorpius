import { data } from "@/lib/data";
import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col justify-center gap-0.5 items-center mb-10">
        <h1 className="text-5xl font-manrope font-medium tracking-tight text-center leading-snug">
          How It{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
            Works
          </span>
        </h1>
        <p className="max-w-xl text-center text-muted-foreground">
          Easily link your platforms, organize content in one place, and let
          automation handle posting across channels.
        </p>
      </div>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10">
          {data.howItWorks.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start py-4 px-6 border border-neutral-200 rounded-2xl shadow-md"
            >
              <div className="pt-4">
                <Image
                  src={`/${item.img_id}`}
                  alt="number"
                  width={40}
                  height={40}
                />
              </div>
              <div className="py-4">
                <h3 className="text-2xl font-manrope font-semibold tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground  text-s">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
