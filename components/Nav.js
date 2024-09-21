import React from "react";

const Nav = ({ content }) => {
  return (
    <>
      <ul className="text-2xl flex space-x-8">
        {content.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <span className="relative z-10 hover:text-[#FEA116] duration-[0.3s]">
              {item}
            </span>
            <span className="absolute left-0 -bottom-6 w-full h-1 bg-[#FEA116] transform scale-x-0 origin-bottom-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
