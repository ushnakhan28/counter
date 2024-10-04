import Link from "next/link";
import React from "react";

const Nav = ({ content }) => {
  return (
    <>
      <ul className="text-2xl flex space-x-8">
        <li className="cursor-pointer">
          <Link href={"#home"}>
            <span className="relative z-10 text-[#FEA116]">Home</span>
          </Link>
          <span className="absolute -bottom-0 w-16 -ml-16 h-1 bg-[#FEA116] transform scale-x-100 origin-bottom-left"></span>
        </li>
        {content.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <Link href={item.link}>
              <span className="relative z-10 hover:text-[#FEA116] duration-[0.3s]">
                {item.name}
              </span>
            </Link>
            <span className="absolute left-0 -bottom-6 w-full h-1 bg-[#FEA116] transform scale-x-0 origin-bottom-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
