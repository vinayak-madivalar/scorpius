import { data } from "@/lib/data";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";

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
        <button className="relative px-6 py-3 text-sm border border-neutral-400 shadow-md bg-neutral-50 hover:bg-neutral-100 cursor-pointer font-medium rounded-full">
          <MdOutlineDarkMode size={20} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
