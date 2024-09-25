import React from "react";
import Head from "./Head";
import Subhead from "./Subhead";

const Services = () => {
  const cards = [
    {
      head: "Room Service",
      para: "Delicious meals and beverages delivered to your room on day.",
      icon: "fas fa-concierge-bell",
    },
    {
      head: "Games Room",
      para: "Enjoy board and video games in our lively entertainment space, for all ages.",
      icon: "fas fa-gamepad",
    },
    {
      head: "Fitness Center",
      para: "Maintain your fitness routine with our 24/7 state of the art gym facilities.",
      icon: "fas fa-dumbbell",
    },
    {
      head: "Events",
      para: "Host memorable events at our versatile venue, tailored to your every need.",
      icon: "fas fa-calendar-alt",
    },
    {
      head: "Restaurants",
      para: "Savor culinary delights at our restaurant, where every dish is a celebration of flavor.",
      icon: "fas fa-utensils",
    },
    {
      head: "Swimming Pool",
      para: "Relax and unwind by our sparkling outdoor pool, perfect for a refreshing dip.",
      icon: "fas fa-swimmer",
    },
  ];

  return (
    <>
      <div className="mt-[120px] max-w-[1200px] mx-auto" id="services">
        <Head title="SERVICES" />
        <Subhead title="Explore Our" content="Services" />
        <div className="grid grid-cols-3 gap-16 mt-[80px]">
          {cards.map((item, index) => (
            <div key={index}>
              <div className="group flex items-center flex-col justify-center px-5 bg-white w-[350px] h-[320px] shadow-2xl rounded-xl hover:bg-[#FEA116] duration-[0.6s] hover:shadow-none ">
                <div className="flex justify-center mb-4">
                  <i
                    className={`${item.icon} text-8xl yellow group-hover:text-[#ffffff] duration-[0.6s]`}
                  ></i>
                </div>
                <h1 className="blue text-2xl text-center font-bold group-hover:text-[#000041] duration-[0.6s]">
                  {item.head}
                </h1>
                <p className="mt-4 text-lg text-[#666666] text-center group-hover:text-[#fff2f2] duration-[0.6s]">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
