import React from "react";
const Col2 = () => {
  const bullet1 = [
    {
      para: "Home",
      link: "#home",
    },
    {
      para: "AboutUs",
      link: "#about",
    },
    {
      para: "Rooms",
      link: "#rooms",
    },
    {
      para: "Services",
      link: "#services",
    },
    {
      para: "Contact",
      link: "#contact",
    },
  ];

  const bullet2 = [
    {
      para: "Face book",
    },
    {
      para: "Instagram",
      link: "https://www.instagram.com/",
    },
    {
      para: "Twitter",
    },
    {
      para: "Linkedin",
      link: "https://www.linkedin.com/in/ushna-khan-b01890320/",
    },
    {
      para: "YouTube",
    },
  ];

  const bullet3 = [
    {
      para: "Events",
      link: "#services",
    },
    {
      para: "WiFi",
      link: "#services",
    },
    {
      para: "Pools",
      link: "#services",
    },
    {
      para: "Fitness",
      link: "#services",
    },
    {
      para: "Restaurant",
      link: "#services",
    },
  ];
  return (
    <>
      <div className="flex md:lg:justify-between sm:justify-center sm:space-x-9 md:lg:w-[35%] sm:w-full relative">
        <div>
          <h1 className="text-white text-2xl font-semibold">Quick Links</h1>
          <div className="mt-7">
            {bullet1.map((item, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <i className="fa-solid fa-angle-right text-xl yellow"></i>
                <a
                  href={item.link}
                  className="text-white text-[18px] hover:tracking-[3px] hover:text-[#FEA116] duration-[0.2s] cursor-pointer"
                >
                  {item.para}
                </a>
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
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[18px] hover:tracking-[3px] hover:text-[#FEA116] duration-[0.2s] cursor-pointer"
                >
                  {item.para}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Our Services</h1>
          <div className="mt-5 absolute">
            {bullet3.map((item, index) => (
              <div key={index} className="flex gap-2 mt-2">
                <i className="fa-solid fa-angle-right text-xl yellow"></i>
                <a
                  href={item.link}
                  className="text-white text-[18px] hover:tracking-[3px] hover:text-[#FEA116] duration-[0.2s] cursor-pointer"
                >
                  {item.para}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Col2;
