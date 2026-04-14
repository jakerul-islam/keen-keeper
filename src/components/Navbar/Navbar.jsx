"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { MdAccessTime } from "react-icons/md";
import ImageLogo from "../../assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li>
        {" "}
        <Link
          className={`${pathName === "/" ? "bg-[#244D3F] text-white" : ""} mr-2`}
          href={"/"}
        >
          <GoHome /> Home
        </Link>
      </li>
      <li>
        {" "}
        <Link
          className={`${pathName === "/timeline" ? "bg-[#244D3F] text-white" : ""} mr-2`}
          href={"/timeline"}
        >
          <MdAccessTime /> Timeline
        </Link>
      </li>
      <li>
        {" "}
        <Link
          className={`${pathName === "/stats" ? "bg-[#244D3F] text-white" : ""} ml-2`}
          href={"/stats"}
        >
          <ImStatsDots /> Stats
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Image src={ImageLogo} alt="KeenKeeper" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
