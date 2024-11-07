import React from "react";
import Hotel from "./Hotel";

const Col1 = () => {
  const icons = [
    {
      icon: "fa-brands fa-facebook-f",
    },
    {
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/",
    },
    {
      icon: "fa-brands fa-twitter",
    },
    {
      icon: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/ushna-khan-b01890320/",
    },
  ];
  return (
    <>
      <div className="md:lg:w-[26%] w-[50%] text-center">
        <Hotel />
        <p className="text-[#D3D3D3] text-[15px] mt-1">
          At the Royal Retreat Hotel, we offer the exceptional hospitality and
          the luxurious accommodations in the heart of America. Enjoy our
          topnotch amenities for an unforgettable stay.
        </p>
        <div className="flex justify-center">
          {icons.map((item, index) => (
            <div key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="group mt-2 mx-4 -ml-1 bg-[#FEA116] rounded-full flex justify-center items-center p-[6px] w-10 h-w-10 hover:scale-125 duration-[0.5s] hover:rotate-[360deg]">
                  <i
                    className={`${item.icon} cursor-pointer text-white text-xl group-hover:text-[#000041]`}
                  ></i>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Col1;
