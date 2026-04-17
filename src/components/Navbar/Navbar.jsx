"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { MdAccessTime } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import ImageLogo from "../../assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <GoHome /> },
    { href: "/timeline", label: "Timeline", icon: <MdAccessTime /> },
    { href: "/stats", label: "Stats", icon: <ImStatsDots /> },
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Image
            src={ImageLogo}
            alt="KeenKeeper"
            className="w-28 sm:w-36 md:w-44 h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  className={`${
                    pathName === href ? "bg-[#244D3F] text-white" : ""
                  } mx-1 flex items-center gap-1`}
                  href={href}
                >
                  {icon} {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex-none">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-sm text-xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-200 px-4 pb-4">
          <ul className="menu menu-vertical w-full">
            {navLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  className={`${
                    pathName === href ? "bg-[#244D3F] text-white" : ""
                  } flex items-center gap-2`}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {icon} {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;