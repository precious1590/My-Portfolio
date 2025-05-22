"use client";
import React from "react";
import Image from "next/image";

import { navItems } from "@/constant/data";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pink-600 to-pink-900 text-white w-full h-[80px] flex justify-between items-center px-5 font-poppins">
      <div className="flex justify-center items-center rounded-full h-[60px] w-[60px] overflow-hidden">
        <Image
          src="/image/mylogo.png"
          width={60}
          height={60}
          alt="logo"
          className="rounded-full"
        />
      </div>
      <ul className="flex gap-6 max-sm:hidden list-none">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.route}
              className="hover:underline cursor-pointer transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
