import React, { useState } from "react";
import DataEnrichmentIcon from "../assets/salesSolutions/DataEnrichmentIcon";
import SyncIcon from "../assets/salesSolutions/SyncIcon";
import BulkExport from "../assets/salesSolutions/BulkExport";
import AIIcon from "../assets/leadIcons/AIIcon";

const SalesSolutions: React.FC = () => {
  const tabItems = [
    {
      title: "CRM Data Enrichment",
      icon: <DataEnrichmentIcon className="size-7" />,
    },
    { title: "CRM Data Sync", icon: <SyncIcon className="size-6" /> },
    {
      title: "Bulk Export and Enrichment",
      icon: <BulkExport className="size-7" />,
    },
    { title: "AI Productivity", icon: <AIIcon className="size-7" /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-[14rem] bg-white py-15">
      <div className="flex flex-col items-center py-6 px-4 sm:px-6 md:px-8 lg:px-36">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#090F4E] pb-1">
          Complete LinkedIn Sales Solutions
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Everything you need for professional LinkedIn prospecting
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[65%] flex justify-around px-3 pt-2 border-b-2 border-gray-300">
          {tabItems.map((item, index) => (
            <div
              key={index}
              className={`flex gap-2 items-center justify-center w-[20%] py-2 cursor-pointer text-center ${
                activeTab === index
                  ? "border-b-8 border-[#090F4E] font-bold text-[#090F4E] "
                  : "text-[#4C4C4C]"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item.icon}
              <p className="whitespace-nowrap">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[65%] flex justify-start py-5 text-center">
          <p className="text-gray-600">
            It’s hard to find the accurate contact data for every prospect by{" "}
            <span className="text-red-500 bg-[#FFDCD4] rounded-full px-3 text-sm py-[.08rem]">
              Incomplete Data
            </span>
          </p>
        </div>
        <div className="w-full max-w-[65%] flex justify-between py-5 space-x-2">
          <div className="w-[49%] rounded-xl bg-[#F0F4FD] p-6 text-blue-800">
            <div className="flex flex-col">
              <h2 className="text-[#262626] font-bold text-xl">
                Get Access to 700M+ Prospects.
              </h2>
              <h3 className="text-[#097737] font-bold">
                Try LeadCRM Data Enrichment
              </h3>
            </div>
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/09101433/CRM-Data-Enrichment-d-768x464.png"
              alt=""
              className="w-full mt-5"
            />
          </div>
          <div className="w-[49%] rounded-xl bg-[#F0F4FD] p-6 text-green-800">
            <div className="flex flex-col">
              <h2 className="text-[#262626] font-normal text-xl">
                If it does not works for you ! try our
                <span className="ms-2 text-xl font-bold text-[#097737]">
                  Advanced Waterfall Enrichment
                </span>
              </h2>
            </div>
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-768x474.webp"
              alt=""
              className="w-full mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSolutions;
