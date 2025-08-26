import { data } from "@/lib/data";

const Bento = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="mx-auto mb-10 max-w-2xl">
        <h2 className="text-5xl font-manrope font-medium tracking-tight text-center leading-snug">
          Everything you need to dominate <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
            Social Media
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[250px]">
        <div className="bg-gradient-to-br from-black/70 via-neutral-900/90 to-black text-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:shadow-2xl hover:scale-105 transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            {data.features[0].title}
          </h3>
          <p className="mt-2 text-neutral-400">
            {data.features[0].description}
          </p>
        </div>

        <div className="bg-gradient-to-bl from-black/60 via-neutral-900/95 to-black rounded-2xl p-6 shadow-sm border text-white border-neutral-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            {data.features[1].title}
          </h3>
          <p className="mt-2 text-neutral-400">
            {data.features[1].description}
          </p>
        </div>

        <div className="bg-gradient-to-tr from-black/70 via-neutral-900/90 to-black text-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            {data.features[2].title}
          </h3>
          <p className="mt-2 text-neutral-400">
            {data.features[2].description}
          </p>
        </div>

        <div className="col-span-2 row-span-1 bg-gradient-to-br from-black via-neutral-900/95 via-60% to-black/65 text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-neutral-200 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-200 backdrop-blur-md">
          <div>
            <h3 className="text-2xl font-manrope font-medium">
              {data.features[3].title}
            </h3>
            <p className="mt-2 text-neutral-400">
              {data.features[3].description}
            </p>
          </div>
        </div>

        <div className="bg-radial from-black/70 via-neutral-900/90 via-40% to-black text-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            {data.features[4].title}
          </h3>
          <p className="mt-2 text-neutral-400">
            {data.features[4].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bento;
