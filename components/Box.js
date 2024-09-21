import React from "react";

const Box = () => {
  const data = [
    { count: 50, para: "Suites" },
    { count: 100, para: "Rooms" },
    { count: 5, para: "Pools" },
    { count: "5k+", para: "Clients" },
  ];

  return (
    <>
      <div className="flex justify-between mt-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[139px] h-[120px] text-[#666666] rounded-2xl shadow-xl flex justify-center items-center flex-col hover:bg-[#FEA116] duration-[0.5s] hover:text-white hover:shadow-none"
          >
            <h1 className="text-center text-[#000041] font-bold text-[50px] -mt-2">
              {item.count}
            </h1>
            <p className="text-center text-[20px] -mt-[15px]">{item.para}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Box;

// hover:h1-text-white ese hover nh de skty kia k agr is div pr mouse lao tou usi div ki p tag ka color white hojye hala k phly grey tha
