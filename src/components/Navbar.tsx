import { data } from "@/lib/data";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex justify-center pt-4">
      <nav className="flex justify-between items-center w-[75vw] py-2 ">
        <div>
          <span className="flex items-center gap-2 text-3xl font-medium tracking-tight font-manrope">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            {data.navigation.logo_text}
          </span>
        </div>
        <div className="flex space-x-14 items-center font-medium ">
          {data.navigation.links.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:scale-110 tracking-wide transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="relative px-8 py-2 text-sm border border-neutral-700 cursor-pointer font-medium rounded-full  hover:-translate-y-1 transition duration-200">
          <div className="absolute inset-x-0 -bottom-px w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent "></div>
          Join Waitlist
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
