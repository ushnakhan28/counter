import React from "react";
import Head from "./Head";
import Subhead from "./Subhead";
import Image from "next/image";

const Reviews = () => {
  const msg = [
    {
      head: "Amazing Experience!",
    },
    {
      head: "Amazing Experience!",
    },
    {
      head: "Amazing Experience!",
    },
  ];
  return (
    <>
      <div className="mt-[120px] max-w-[1200px] mx-auto">
        <Head title="Reviews" />
        <Subhead title="What Our" content="Guests" extra="Say" />
        <div>
          {msg.map((index, item) => (
            <div key={index}>
              <Image src="/pix/star.png" width={200} height={100} />
              <h1>{item.head}</h1>
              <div>
                <Image
                  className="rounded-full"
                  src="/pix/client.jpg"
                  width={80}
                  height={80}
                  alt="Client Image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
