import Facebook from "@/assets/shared/desktop/icon-facebook.svg";
import Instagram from "@/assets/shared/desktop/icon-instagram.svg";
import Twitter from "@/assets/shared/desktop/icon-twitter.svg";
import Logo from "@/assets/shared/desktop/logo.svg";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "HOME", to: "/" },
  { name: "HEADPHONES", to: "/headphones" },
  { name: "SPEAKERS", to: "/speakers" },
  { name: "EARPHONES", to: "/earphones" },
];

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="w-full bg-foreground text-white pt-12 pb-8 px-6 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-40 md:left-20 w-28 h-1 bg-primary " />
      {/* Desktop/Tablet Layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-y-0">
        {/* Left: Logo and Description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-y-8 lg:gap-y-6 flex-1">
          <Link to="/" className="flex items-center justify-center lg:justify-start">
            <img src={Logo} alt="audiophile" className="h-8" />
          </Link>
          {/* Nav Links (Tablet/Mobile) */}
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 md:justify-center md:items-center lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`subtitle tracking-[2px] transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="body text-[#F1F1F1] max-w-lg mx-auto lg:mx-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </p>
          <p className="body font-bold text-[#F1F1F1] mt-8 lg:mt-auto">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        {/* Right: Nav Links (Desktop) and Socials */}
        <div className="flex flex-col items-center lg:items-end justify-between flex-1 gap-y-8 lg:gap-y-0">
          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex gap-x-8 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`subtitle tracking-[2px] transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex gap-x-4 mt-8 lg:mt-auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
              <span className="inline-block p-1 rounded-sm group-hover:bg-primary transition-colors">
                <img src={Facebook} alt="Facebook" className="h-6 w-6" />
              </span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group">
              <span className="inline-block p-1 rounded-sm group-hover:bg-primary transition-colors">
                <img src={Twitter} alt="Twitter" className="h-6 w-6" />
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
              <span className="inline-block p-1 rounded-sm group-hover:bg-primary transition-colors">
                <img src={Instagram} alt="Instagram" className="h-6 w-6" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
