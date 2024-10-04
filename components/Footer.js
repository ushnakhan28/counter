import React from "react";
import Image from "next/image";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";

const Footer = () => {
  const img = [
    {
      pix: "/pix/pool1.jpg",
    },
    {
      pix: "/pix/pool1.jpg",
    },
    {
      pix: "/pix/pool1.jpg",
    },
    {
      pix: "/pix/pool1.jpg",
    },
    {
      pix: "/pix/pool1.jpg",
    },
    {
      pix: "/pix/pool1.jpg",
    },
  ];

  return (
    <>
      <div className="mt-[120px]">
        <div className="flex">
          {img.map((item, index) => (
            <div key={index} className="relative group">
              <Image
                src={item.pix}
                width={240}
                height={0}
                layout="intrinsic"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 duration-[0.3s] group-hover:mix-blend-multiply"></div>
              <div className=" flex justify-center items-center absolute inset-0 opacity-0 group-hover:opacity-100 duration-[0.3s]">
                <div className="bg-[#000041] py-3 px-4 rounded-full cursor-pointer">
                  <i class="fa-solid fa-magnifying-glass text-white text-2xl hover:text-[#FEA116] duration-[0.3s]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#000041] flex lg:md:flex-row flex-col lg:md:text-start sm:text-center gap-10 items-center justify-around py-16 px-10">
          <Col1 />
          <Col2 />
          <Col3 />
        </div>
        <div className="bg-[#FEA116] flex flex-col items-center justify-center py-2">
          <p className="text-white text-xl">
            Subscribe to our newsletter to receive the latest updates and
            offers.
          </p>
          <p className="text-white text-lg -mt-1">
            © 2024 Royal Retreat Hotel. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
