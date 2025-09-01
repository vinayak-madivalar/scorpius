import { data } from "@/lib/data";
import BadgeButton from "./ui/BadgeButton";
import { RiFlashlightFill } from "react-icons/ri";
import Image from "next/image";

const Bento = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="mx-auto mb-10 max-w-2xl">
        <div className="flex items-center justify-center mb-4">
          <BadgeButton label="Features" icon={RiFlashlightFill} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-manrope font-medium tracking-tight text-center ">
          Everything you need to dominate{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
            Social Media
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="relative md:col-span-2 md:row-span-1 rounded-2xl px-8 py-8 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:shadow-2xl hover:scale-105 transition-all duration-200">
          {/* <div className="absolute top-0 right-0 w-full h-full overflow-hidden bg-gradient-to-bl from-orange-100 from-5% via-transparent to-transparent rounded-2xl -z-10"></div> */}
          <Image
            src="/dashboard.png"
            alt="analytics"
            width={500}
            height={500}
            className="w-full mb-4"
          />
          <h3 className="text-lg font-manrope font-medium">
            {data.features[0].title}
          </h3>
          <p className="mt-1 text-neutral-600">
            {data.features[0].description}
          </p>
        </div>

        <div className="relative rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-200">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden bg-gradient-to-tl from-orange-100 from-5% via-transparent to-transparent rounded-2xl -z-10"></div>
          <h3 className="text-2xl font-manrope font-medium">
            {data.features[1].title}
          </h3>
          <p className="mt-2 text-neutral-600">
            {data.features[1].description}
          </p>
        </div>

        <div className="relative rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-200">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden bg-gradient-to-tr from-orange-100 from-5% via-transparent to-transparent rounded-2xl -z-10"></div>
          <h3 className="text-2xl font-manrope font-medium">
            {data.features[2].title}
          </h3>
          <p className="mt-2 text-neutral-600">
            {data.features[2].description}
          </p>
        </div>

        <div className="relative  rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-neutral-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-200 backdrop-blur-md">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden bg-gradient-to-br from-transparent via-orange-100 via-60% to-transparent rounded-2xl -z-10"></div>

          <div>
            <h3 className="text-2xl font-manrope font-medium">
              {data.features[3].title}
            </h3>
            <p className="mt-2 text-neutral-600">
              {data.features[3].description}
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl p-6 shadow-sm border border-neutral-200 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden bg-radial from-transparent via-orange-100 via-40% to-transparent rounded-2xl -z-10"></div>
          <h3 className="text-2xl font-manrope font-medium">
            {data.features[4].title}
          </h3>
          <p className="mt-2 text-neutral-600">
            {data.features[4].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bento;
