import React from "react";
import WithCRM from "./WithCRM";
import WithoutCRM from "./WithoutCRM";
import signImg from "../assets/leadIcons/signimage.png";
import CustomButton from "./CustomButton";

const LeadCRMSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 pt-2 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#090F4E] text-center mb-8">
        Every LinkedIn Prospector faces these daily challenges
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 relative">
        <WithoutCRM />
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full text-xl font-semibold text-gray-500">
            VS
          </div>
        </div>
        <WithCRM />
      </div>
      <div className="flex relative justify-center py-6  lg:py-9">
        <img
          src={signImg}
          className="hidden sm:absolute w-[12rem] right-4/12"
          alt="sign image"
        />
        <CustomButton
          text="Start Using LeadCRM Now"
          bgColor="#B3FC6A"
          textColor="#000000"
        />
      </div>
    </section>
  );
};

export default LeadCRMSection;
