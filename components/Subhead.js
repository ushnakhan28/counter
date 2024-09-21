import React from "react";

const Subhead = ({ title, content, extra }) => {
  return (
    <>
      <div>
        <h1 className="blue text-4xl font-bold text-center">
          {title} <span className="text-[#FEA116]">{content}</span>
          {extra}
        </h1>
      </div>
    </>
  );
};

export default Subhead;
