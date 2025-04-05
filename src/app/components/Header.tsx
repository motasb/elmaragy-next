import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header-page flex justify-between items-center p-1 text-white">
      <nav className="sm:mr-10">
        <ul className="flex items-center justify-between gap-4 flex-row-reverse capitalize sm:gap-15 sm:text-2xl sm:mr-10 mr-4">
          <Link href={"/"} className=" hover:text-gray-400 border-b-1 border-b-white/60 pb-1 hover:cursor-pointer">
            home
          </Link>
          <Link href={"/about"} className=" hover:text-gray-400 border-b-1 border-b-white/60 pb-1 hover:cursor-pointer">
            About
          </Link>
          <Link href={"/contact"} className=" hover:text-gray-400 border-b-1 border-b-white/60 pb-1 hover:cursor-pointer">
            contact
          </Link>
          <Link href={"/courses"} className=" hover:text-gray-400 border-b-1 border-b-white/60 pb-1 hover:cursor-pointer">
            courses
          </Link>
        </ul>
      </nav>
      <div className="logo hover:cursor-pointer">
        <Link href={"/"}>
          <Image
            src={"/images/logo.jpg"}
            alt={"Logo"}
            width={66}
            height={66}
            priority
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
