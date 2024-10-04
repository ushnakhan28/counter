import React from "react";
import Btn from "./Btn";

const Button = ({ targetId, content }) => {
  const scrollToHeader = () => {
    document.getElementById(targetId).scrollIntoView();
  };

  return (
    <>
      <button
        onClick={scrollToHeader}
        className="bg-[#000041] text-white text-xl border-2 rounded-3xl px-7 py-2"
      >
        {content}
      </button>
    </>
  );
};

export default Button;
