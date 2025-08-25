import { data } from "@/lib/data";

const Navbar = () => {
  return (
    <header className="flex justify-center pt-4">
      <nav className="flex justify-between items-center w-[75vw] py-2 px-6">
        <div>
          <span className="text-[1.6rem] font-semibold uppercase tracking-tight font-manrope">
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
        <button className="relative px-8 py-2 text-sm border border-neutral-700 cursor-pointer font-medium rounded-full">
          <div className="absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent "></div>
          Join Waitlist
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
