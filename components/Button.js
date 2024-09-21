import React from "react";
import Btn from "./Btn";

const Button = ({ content }) => {
  return (
    <>
      <button className="bg-[#000041] text-white text-xl border-2 rounded-3xl px-7 py-2 ">
        {content}
      </button>
    </>
  );
};

export default Button;
