import React from "react";

const Col3 = () => {
  const contact = [
    {
      icon: "fas fa-map-marker-alt",
      head: "Address: ",
      para: "123 Luxury Lane, America",
    },
    {
      icon: "fas fa-envelope",
      head: "Email: ",
      para: "ushnakhanmaait@gmail.com",
    },
    {
      icon: "fas fa-phone",
      head: "Phone: ",
      para: "+1 (123) 456-7890",
    },
  ];
  return (
    <>
      <div className="lg:md:w-[20%] sm:w-full">
        <h1 className="text-white text-2xl font-semibold">Contact Details</h1>
        <div className="mt-5">
          {contact.map((item, index) => (
            <div
              key={index}
              className="flex md:lg:flex-col sm:flex-row md:lg:space-x-0 sm:space-x-3 mt-2 justify-center"
            >
              <div className="flex items-center gap-3">
                <i className={`${item.icon} yellow text-[18px]`}></i>
                <p className="text-white text-[18px]">{item.head}</p>
              </div>
              <div>
                <p className="text-white">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Col3;
