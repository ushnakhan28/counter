import React, { useState } from "react";
import Image from "next/image";
import Btn from "@/components/Btn";
import Nav from "@/components/Nav";
import Form from "./Form";
import Hotel from "./Hotel";

const Header = () => {
  const [form, setForm] = useState(false);

  const items = [
    { name: "Home", link: "#home" },
    { name: "AboutUs", link: "#about" },
    { name: "Rooms", link: "#rooms" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  const button = () => {
    setForm(!form);
  };

  return (
    <>
      <div className="relative h-[700px] blend" id="home">
        <Image
          src="/pix/hotel.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />
        <div className="bg-black bg-opacity-70 relative h-[80px] text-white flex justify-around items-center">
          <Hotel />
          <Nav content={items} />
          <Btn onClick={button} text="Book Online" />
        </div>

        <div className="mt-[120px]">
          <h1 className="text-center text-white text-[95px] leading-[4rem] tracking-wider">
            Welcome to <br />
            <span className="purple tracking-widest text-[65px] font-bold">
              Royal Retreat Hotel
            </span>
          </h1>
          <p className="text-[#D3D3D3] text-[20px] mt-9 tracking-wider text-center">
            Enjoy an Unforgettable Stay with the Exceptional Comfort, World{" "}
            Class Amenities, <br /> and a Stunning Environment, Surrounded by
            the Breathtaking <br /> Views and a Relaxing Atmosphere.
          </p>
          <div className="mt-9 space-x-8 flex justify-center">
            <Btn text="Book Now" onClick={button} />
            <Btn text="Explore More" />
          </div>
        </div>
        {form && (
          <div className="flex justify-center items-center bg-black bg-opacity-60 top-0 left-0 w-full h-full fixed z-10">
            <div className="p-5 relative">
              <div className="top-0 right-0 absolute">
                <div className=" bg-[#000041] rounded-full w-10 h-10 flex justify-center items-center">
                  <i
                    className="fa-solid fa-xmark text-2xl text-white"
                    onClick={button}
                  ></i>
                </div>
              </div>
              <Form />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
