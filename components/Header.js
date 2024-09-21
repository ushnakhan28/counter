import React from "react";
import Image from "next/image";
import Btn from "@/components/Btn";
import Nav from "@/components/Nav";

const Header = () => {
  const items = ["Home", "AboutUs", "Services", "Portfolio", "Contact"];
  return (
    <>
      <div className="relative h-[700px] blend">
        <Image
          src="/pix/hotel.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />

        <div className="bg-black bg-opacity-70 relative h-[80px] text-white flex justify-around items-center">
          <div className="leading-[1.7rem]">
            <span className="text-[24px]">Royal Retreat</span> <br />
            <span className="text-[45px] font-bold yellow">HOTEL</span>
          </div>
          <Nav content={items} />
          <Btn text="Log In" />
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
            <Btn text="Book Now" />
            <Btn text="Explore More" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
