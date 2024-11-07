import React from "react";
import Head from "./Head";
import Subhead from "./Subhead";
import Form from "./Form";

const Contact = () => {
  const info = [
    {
      icon: "fas fa-map-marker-alt",
      para: "Address:",
      second: "123 Royal Street, Cityville, Country",
    },
    {
      icon: "fas fa-envelope",
      para: "Email:",
      second: "contact@royalretreat.com",
    },
    {
      icon: "fas fa-phone",
      para: "Phone:",
      second: "+1 (123) 456-7890",
    },
  ];

  return (
    <>
      <div className="mt-[120px] max-w-[1200px] mx-auto" id="contact">
        <Head title="CONTACT US" />
        <Subhead title="Get in" content="Touch" extra=" With Us" />
        <div className="flex items-center justify-center lg:md:flex-row flex-col mt-[80px] gap-24">
          <div>
            <Form />
          </div>
          <div className="max-w-[55%]">
            <h1 className="blue text-3xl font-bold">Get in Touch With Us</h1>
            <p className="text-[#666666] text-[18px] mt-3">
              For any inquiries or assistance, please feel free to contact us
              using the details below. Our team is very dedicated to ensuring
              you have a very memorable and comfortable stay. We are always here
              to help with any questions or needs you may have.
            </p>
            <div className="mt-6">
              {info.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <i className={`${item.icon} blue text-xl mr-4`}></i>
                  <div className="ml-3">
                    <p className="blue text-xl font-bold inline">{item.para}</p>
                    <p className="text-[#666666] inline ml-2">{item.second}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
