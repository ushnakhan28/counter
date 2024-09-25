import React from "react";

const Col3 = () => {
  const contact = [
    {
      icon: "fas fa-map-marker-alt",
      head: "Address",
      para: "123 Luxury Lane, Heart of America",
    },
    {
      icon: "fas fa-envelope",
      head: "Email:",
      para: "contact@royalretreat.com",
    },
    {
      icon: "fas fa-phone",
      head: "Phone:",
      para: "+1 (123) 456-7890",
    },
  ];
  return (
    <>
      <div className="w-[20%]">
        <h1 className="text-white text-2xl font-semibold">Contact Details</h1>
        <div className="mt-5">
          {contact.map((item, index) => (
            <div key={index} className="flex flex-col mt-2">
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
