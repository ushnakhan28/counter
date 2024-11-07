import React from "react";
import Image from "next/image";
import Box from "./Box";
import Button from "./Button";
import Head from "./Head";
import Subhead from "./Subhead";
const About = () => {

  return (
    <>
      <div className="mt-[120px] max-w-[1200px] mx-auto" id="about">
        <Head title="ABOUT US" />
        <Subhead title="Explore Our" content="Luxuries" />
        <div className="flex lg:md:flex-row flex-col justify-center gap-10 mt-[80px]">
          <div className="lg:md:max-w-[50%]">
            <div className="">
              <div className="relative">
                <Image
                  src={"/pix/picture.jpg"}
                  width={550}
                  height={550}
                  className="sm:w-full"
                />
                <div className="absolute bg-black bg-opacity-30 inset-0 sm:w-full"></div>
              </div>
            </div>
          </div>

          <div className="lg:md:max-w-[50%]">
            <h1 className="text-[#000041] font-bold text-3xl mb-4">
              Welcome To Our Hotel
            </h1>
            <p className="text-[#666666] text-[18px]">
              Discover the elegance of our beautifully designed rooms and the
              suites, unwind our stunning swimming pools, and a experience the
              world-class service from our dedicated staff. At the Royal Retreat
              Hotel, every detail is crafted to offer you an unforgettable stay.
            </p>
            <Box />
            <div className="mt-5">
              <Button content="Explore More" targetId={"home"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
