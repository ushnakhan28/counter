import React from "react";

const Form = () => {
  return (
    <>
      <div>
        <form className="bg-white rounded-3xl w-[400px] shadow-2xl px-5 py-6">
          <h1 className="blue text-3xl text-center font-bold">
            Book Your stay Now
          </h1>
          <input
            placeholder="enter full name"
            className="bg-[#F0F0F0] w-full px-5 text-[18px] py-2 rounded-3xl mt-5"
          />
          <div className="grid grid-cols-2">
            <input
              placeholder="enter full name"
              className="bg-[#F0F0F0] w-full px-5 text-[18px] py-2 rounded-3xl mt-3"
            />
            <input
              placeholder="enter full name"
              className="bg-[#F0F0F0] w-full px-5 text-[18px] py-2 rounded-3xl  mt-3"
            />
            <input
              placeholder="enter full name"
              className="bg-[#F0F0F0] w-full px-5 text-[18px] py-2 rounded-3xl  mt-3"
            />
            <input
              placeholder="enter full name"
              className="bg-[#F0F0F0] w-full px-5 text-[18px] py-2 rounded-3xl  mt-3"
            />
          </div>
          <input
            placeholder="enter full name"
            className="bg-[#F0F0F0] w-full px-5 text-[18px] py-2 rounded-3xl  mt-3"
          />
          <button className="bg-[#000041] text-white text-xl border-2 rounded-3xl px-7 py-2 w-full mt-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
