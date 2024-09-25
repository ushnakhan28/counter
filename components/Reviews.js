import React from "react";
import Head from "./Head";
import Subhead from "./Subhead";
import Image from "next/image";

const Reviews = () => {
  const msg = [
    {
      head: "Amazing Experience!",
      para: "Michael Smith",
      work: "Business Consultant",
    },
    {
      head: "Amazing Experience!",
      para: "Michael Smith",
      work: "Business Consultant",
    },
    {
      head: "Amazing Experience!",
      para: "Michael Smith",
      work: "Business Consultant",
    },
  ];
  return (
    <>
      <div className="mt-[120px] max-w-[1200px] mx-auto">
        <Head title="Reviews" />
        <Subhead title="What Our" content="Guests" extra=" Say" />
        <div className="flex justify-between items-center mt-[80px]">
          {msg.map((item, index) => (
            <div
              key={index}
              className="bg-white px-[70px] py-7 shadow-2xl rounded-xl"
            >
              <div className="flex justify-center">
                <Image src="/pix/star.png" width={200} height={100} />
              </div>
              <h1 className="blue text-2xl font-bold mt-6">{item.head}</h1>
              <div className="flex justify-between mt-6">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src="/pix/person1.jpg"
                    width={60}
                    height={60}
                    alt="Client Image"
                  />
                </div>
                <div>
                  <p className="text-[23px]">{item.para}</p>
                  <p className="text-lg -mt-1">{item.work}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
