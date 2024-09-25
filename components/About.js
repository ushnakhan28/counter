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
        <div className="flex flex-wrap justify-between items-start gap-8 mt-[80px]">
          <div className="flex-1 max-w-[48%]">
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
              <Button content="Explore More" />
            </div>
          </div>

          <div className="flex-1 max-w-[48%]">
            <div className="grid grid-cols-2 gap-2">
              <Image
                src={"/pix/pool1.jpg"}
                width={210}
                height={180}
                className="mt-[40px] ml-[72px]"
              />
              <Image src={"/pix/pool2.jpg"} width={270} height={250} />
              <Image
                src={"/pix/pool2.jpg"}
                width={270}
                height={250}
                className="ml-[12px]"
              />
              <Image src={"/pix/pool1.jpg"} width={210} height={180} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
