import { data } from "@/lib/data";
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="max-w-6xl px-6 mx-auto py-10 border-t border-muted">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-manrope">
          <h3>
            <span className="font-medium">{data.navigation.logo_text}</span>
            {data.footer.copyright}
          </h3>
        </div>
        <div className="flex items-center space-x-12">
          {data.footer.links.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:text-neutral-400 transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <Link
            href={"https://instagram.com"}
            className="hover:scale-110 transition duration-200"
          >
            <BsInstagram size={20} />
          </Link>
          <Link
            href={"https://www.linkedin.com"}
            className="hover:scale-110 transition duration-200"
          >
            <BsLinkedin size={20} />
          </Link>
          <Link
            href={"https://x.com"}
            className="hover:scale-110 transition duration-200"
          >
            <BsTwitterX size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
