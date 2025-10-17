import React from "react";
import WithCRM from "./WithCRM";
import WithoutCRM from "./WithoutCRM";

const LeadCRMSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 pt-2 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 text-center mb-8">
        Every LinkedIn Prospector faces these daily challenges
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 relative">
        <WithoutCRM />
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-300" />
        <WithCRM />
      </div>
    </section>
  );
};

export default LeadCRMSection;
