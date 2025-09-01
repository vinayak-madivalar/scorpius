import { data } from "@/lib/data";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center flex-col gap-10 py-20">
        <div className=" group bg-muted text-muted-foreground text-sm cursor-pointer px-6 py-1 rounded-full">
          <span className="flex items-center gap-1">
            {data.hero.banner}{" "}
            <FaArrowRight
              size={11}
              className="group-hover:translate-x-1 transform transition-transform duration-300"
            />
          </span>
        </div>
        <div className="flex justify-center items-center font-manrope gap-5 flex-col">
          <h1 className="text-7xl text-center max-w-3xl font-medium tracking-tight bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text py-1">
            {data.hero.title}
          </h1>
          <p className="max-w-2xl text-muted-foreground text-lg text-center">
            {data.hero.subtitle}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-foreground text-background relative px-8 py-3 border border-neutral-700 cursor-pointer font-medium rounded-full text-sm hover:-translate-y-1.5 transition-all duration-200">
            <div className="absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            {data.hero.cta} <FaArrowRightToBracket size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
