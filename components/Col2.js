import React from "react";
const Col2 = () => {
  const bullet1 = [
    {
      para: "Home",
    },
    {
      para: "AboutUs",
    },
    {
      para: "Rooms",
    },
    {
      para: "Services",
    },
    {
      para: "Contact",
    },
  ];

  const bullet2 = [
    {
      para: "Face book",
    },
    {
      para: "Instagram",
    },
    {
      para: "Twitter",
    },
    {
      para: "Linkedin",
    },
    {
      para: "YouTube",
    },
  ];

  const bullet3 = [
    {
      para: "Events",
    },
    {
      para: "WiFi",
    },
    {
      para: "Pools",
    },
    {
      para: "Fitness",
    },
    {
      para: "Restaurant",
    },
  ];
  return (
    <>
      <div className="flex justify-between w-[35%] relative">
        <div>
          <h1 className="text-white text-2xl font-semibold">Quick Links</h1>
          <div className="mt-5">
            {bullet1.map((item, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <i className="fa-solid fa-angle-right text-xl yellow"></i>
                <p className="text-white text-[18px] hover:tracking-[3px] hover:text-[#FEA116] duration-[0.2s] cursor-pointer">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Follow us</h1>
          <div className="mt-5 absolute">
            {bullet2.map((item, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <i className="fa-solid fa-angle-right text-xl yellow"></i>
                <p className="text-white text-[18px] hover:tracking-[3px] hover:text-[#FEA116] duration-[0.2s] cursor-pointer">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Services</h1>
          <div className="mt-5 absolute">
            {bullet3.map((item, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <i className="fa-solid fa-angle-right text-xl yellow"></i>
                <p className="text-white text-[18px] hover:tracking-[3px] hover:text-[#FEA116] duration-[0.2s] cursor-pointer">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Col2;
