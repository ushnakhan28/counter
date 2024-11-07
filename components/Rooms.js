import React, { useState } from "react";
import Head from "./Head";
import Subhead from "./Subhead";
import Image from "next/image";
import Button from "./Button";

const Rooms = () => {
  const [openImg, setOpenImg] = useState(false);
  const [selectedImg, setSelectedImage] = useState("");

  const openModel = (pic) => {
    setSelectedImage(pic);
    setOpenImg(true);
  };

  const closeImg = () => {
    setOpenImg(false);
    setSelectedImage("");
  };

  const cards = [
    {
      pic: "/pix/pool2.jpg",
      head: "Executive Suite",
      para: "Experience comfort and elegance with modern amenities.",
    },
    {
      pic: "/pix/hotel1.jpg",
      head: "Honeymoon Suite",
      para: "Extra space with a cozy living area and premium amenities.",
    },
    {
      pic: "/pix/hotel.jpg",

      head: "Presidential Suite",
      para: "Ultimate luxury with expansive areas and exquisite décor.",
    },
  ];
  return (
    <>
      <div className="mt-[120px] max-w-[1200px] mx-auto" id="rooms">
        <Head title="ROOMS" />
        <Subhead title="Explore Our" content="Rooms" />
        <div className="grid lg:md:grid-cols-3 sm:grid-cols-1 gap-10 mt-[80px] ">
          {cards.map((item, index) => (
            <div
              key={index}
              className="relative bg-white w-[330px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-3"
            >
              <div
                className="relative w-[350px] h-[180px] overflow-hidden group cursor-zoom-in"
                onClick={() => openModel(item.pic)}
              >
                <Image
                  src={item.pic}
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
              <div className="px-10 py-5">
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
                  <Button content="Book Now" targetId={"home"} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {openImg && (
          <div className="flex justify-center items-center h-full w-full bg-black bg-opacity-50 fixed top-0 left-0 z-50">
            <div className="relative">
              <i
                className="fa-solid cursor-pointer fa-xmark text-4xl text-[white] absolute top-1 right-5 z-50"
                onClick={closeImg}
              ></i>
              <div className="relative w-[80vw] h-[80vh]">
                <Image src={selectedImg} layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Rooms;
