import React from "react";
import Head from "./Head";
import Subhead from "./Subhead";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <Head title="REVIEWS" />
        <Subhead title="What Our" content="Guests" extra=" Say" />
        <Slider
          {...settings}
          className="mt-[80px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:w-full"
        >
          {msg.map((item, index) => (
            <div
              key={index}
              className="bg-white mx-3 my-8 lg:md:max-w-[350px] lg:md:h-[270px] px-7 text-center py-7 shadow-lg rounded-xl"
            >
              <div className="flex justify-center">
                <Image src="/pix/star.png" width={200} height={100} />
              </div>
              <h1 className="blue text-2xl font-bold mt-6">{item.head}</h1>
              <div className="flex justify-evenly mt-6">
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
        </Slider>
      </div>
    </>
  );
};

export default Reviews;
