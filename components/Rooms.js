import React from "react";
import Head from "./Head";
import Subhead from "./Subhead";
import Image from "next/image";
import Button from "./Button";

const Rooms = () => {
  const cards = [
    {
      head: "Executive Suite",
      para: "Experience comfort and elegance with modern amenities.",
    },
    {
      head: "Honeymoon Suite",
      para: "Extra space with a cozy living area and premium amenities.",
    },
    {
      head: "Presidential Suite",
      para: "Ultimate luxury with expansive areas and exquisite décor.",
    },
  ];
  return (
    <>
      <div className="mt-[120px] max-w-[1200px] mx-auto">
        <Head title="ROOMS" />
        <Subhead title="Explore Our" content="Rooms" />
        <div className="flex justify-between mt-[80px]">
          {cards.map((item, index) => (
            <div
              key={index}
              className="relative bg-white w-[330px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-3"
            >
              <div className="relative w-[350px] h-[180px] overflow-hidden group">
                <Image
                  src={"/pix/pool2.jpg"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
              <div className="absolute mx-[10px] w-20 h-20 rounded-full text-center bg-[#000041] flex justify-center items-center flex-col -mt-[40px]">
                <p className="text-white text-2xl -mt-3">300</p>
                <p className="yellow font-bold text-2xl leading-[1.1rem]">
                  USD
                </p>
              </div>
              <div className="px-10 py-5 ab">
                <h1 className="yellow text-[25px] text-center font-bold mt-3">
                  {item.head}
                </h1>
                <p className="text-[#666666] text-center leading-[1.2rem] mt-3">
                  {item.para}
                </p>
                <div className="flex justify-between mt-3">
                  <p className="yellow">3 Bed</p>
                  <span className="w-[2px] h-7 bg-[#666666]"></span>
                  <p className="yellow">3 Bath</p>
                  <span className="w-[2px] h-7 bg-[#666666]"></span>
                  <p className="yellow">Wifi</p>
                </div>
                <div className="flex justify-center mt-4">
                  <Button content="Book Now" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
