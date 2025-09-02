"use client";

import { data } from "@/lib/data";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="flex justify-center w-full pt-4">
      <nav className="flex justify-between items-center max-sm:w-full w-[75vw] py-2 px-4">
        <div>
          <span className="flex items-center gap-2 text-3xl font-medium tracking-tight font-manrope">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            {data.navigation.logo_text}
          </span>
        </div>
        <div className="hidden md:flex sm:space-x-8 lg:space-x-14 items-center font-medium ">
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
        <button
          className="relative px-6 py-3 text-sm border border-neutral-400 shadow-md bg-amber-400 cursor-pointer font-medium rounded-full"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
