import React from "react";

const Head = ({ title }) => {
  return (
    <>
      <div className="flex justify-center items-center space-x-1">
        <span className="h-[3px] bg-[#FEA116] w-10"></span>
        <p className="text-[#FEA116] font-bold text-[20px]"> {title} </p>
        <span className="h-[3px] bg-[#FEA116] w-10"></span>
      </div>
    </>
  );
};

export default Head;
