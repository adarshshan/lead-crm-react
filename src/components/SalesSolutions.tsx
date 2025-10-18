import React, { useEffect, useState, type ReactNode } from "react";
import DataEnrichmentIcon from "../assets/salesSolutions/DataEnrichmentIcon";
import SyncIcon from "../assets/salesSolutions/SyncIcon";
import BulkExport from "../assets/salesSolutions/BulkExport";
import AIIcon from "../assets/leadIcons/AIIcon";
import androidImg from "../assets/androidimg.png";

interface SalesSolutionsInterface {
  title: ReactNode;
  subTitle?: ReactNode;
  imgUrl: string;
  bgColor: string;
}

const SalesSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentSolution, setCurrentSolution] = useState<
    SalesSolutionsInterface[]
  >([]);

  useEffect(() => {
    setCurrentSolution(tabItems[activeTab].solutions);
  }, []);

  const tabItems = [
    {
      title: "CRM Data Enrichment",
      icon: <DataEnrichmentIcon className="size-7" />,
      solutions: [
        {
          title: (
            <h2 className="text-[#262626] font-bold text-xl">
              Get Access to 700M+ Prospects.
            </h2>
          ),
          subTitle: (
            <h3 className="text-[#097737] font-bold">
              Try LeadCRM Data Enrichment
            </h3>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/09101433/CRM-Data-Enrichment-d-768x464.png",
          bgColor: "#F0F4FD",
        },
        {
          title: (
            <h2 className="text-[#262626] font-normal text-xl">
              If it does not works for you ! try our
              <span className="ms-2 text-xl font-bold text-[#097737]">
                Advanced Waterfall Enrichment
              </span>
            </h2>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-768x474.webp",
          bgColor: "#F0F4FD",
        },
      ],
    },
    {
      title: "CRM Data Sync",
      icon: <SyncIcon className="size-6" />,
      solutions: [
        {
          title: (
            <h2 className="text-[#262626] font-bold text-xl">
              The Solution? LeadCRM's Instant Data Sync
            </h2>
          ),
          subTitle: (
            <h3 className="text-[#097737] font-bold">Try LeadCRM Data Sync</h3>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11075917/CRM-Data-Sync.png",
          bgColor: "rgb(255, 255, 206)",
        },
        {
          title: (
            <h2 className="text-[#262626] font-bold text-xl">
              Unlock instant CRM insights on every profile you visit.
            </h2>
          ),
          subTitle: (
            <h3 className="text-[#097737] font-bold">
              Try LeadCRM Data Overlay
            </h3>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11080104/CRM-Data-Sync-1.png",
          bgColor: "rgb(255, 255, 206)",
        },
      ],
    },
    {
      title: "Bulk Export and Enrichment",
      icon: <BulkExport className="size-7" />,
      solutions: [
        {
          title: (
            <h2 className="text-[#262626] font-bold text-xl">
              Enrich & Export 250 Profiles in Just 60 Seconds.
            </h2>
          ),
          subTitle: (
            <h3 className="text-[#097737] font-bold">
              Try LeadCRM Bulk Export
            </h3>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11075922/Bulk-Export-Enrichment.png",
          bgColor: "#F0F4FD",
        },
        {
          title: (
            <h2 className="text-[#262626] font-bold text-xl">
              Export & enrich profiles to the CRM or G-Sheet
            </h2>
          ),
          subTitle: (
            <h3 className="text-[#097737] font-bold">
              Try LeadCRM Bulk Export
            </h3>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/07/11075921/Bulk-Export-Enrichment-1.png",
          bgColor: "#F0F4FD",
        },
      ],
    },
    {
      title: "AI Productivity",
      icon: <AIIcon className="size-7" />,
      solutions: [
        {
          title: (
            <h2 className="text-[#262626] font-bold text-xl">
              Get the same high-impact engagement in 80% less time.
            </h2>
          ),
          subTitle: (
            <h3 className="text-[#097737] font-bold">
              Try LeadCRM AI Response
            </h3>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/05/28111308/AI-Comment-image-1-768x603.webp",
          bgColor: "rgb(255, 233, 254)",
        },
        {
          title: (
            <h2 className="text-[#262626] font-bold text-xl">
              Use Shortcuts to reply faster.
            </h2>
          ),
          subTitle: (
            <h3 className="text-[#097737] font-bold">Try LeadCRM Templates</h3>
          ),
          imgUrl:
            "https://img.leadcrm.io/wp-content/uploads/2025/05/29113839/Template-imges-2-768x529.webp",
          bgColor: "rgb(255, 233, 254)",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-[14rem] bg-white py-15">
      <img
        src={androidImg}
        alt=""
        className="absolute left-0 top-4 w-18 hidden sm:block"
      />
      <div className="flex flex-col items-center py-6 px-4 sm:px-6 md:px-8 lg:px-20">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#090F4E] pb-1 text-center">
          Complete LinkedIn Sales Solutions
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Everything you need for professional LinkedIn prospecting
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row md:justify-around px-3 pt-2 border-b-2 border-gray-300">
          {tabItems.map((item, index) => (
            <div
              key={index}
              className={`flex gap-2 items-center justify-center w-full md:w-auto py-2 cursor-pointer text-center ${
                activeTab === index
                  ? "font-bold text-[#090F4E] bg-gray-100 md:bg-transparent md:border-b-8 border-[#090F4E]"
                  : "text-[#4C4C4C]"
              }`}
              onClick={() => {
                setActiveTab(index);
                setCurrentSolution(item.solutions);
              }}
            >
              {item.icon}
              <p className="whitespace-normal md:whitespace-nowrap">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4">
        <div className="w-full max-w-7xl flex justify-center md:justify-start py-5 text-center">
          <p className="text-gray-600">
            It’s hard to find the accurate contact data for every prospect by{" "}
            <span className="text-red-500 bg-[#FFDCD4] rounded-full px-3 text-sm py-[.08rem]">
              Incomplete Data
            </span>
          </p>
        </div>
        <div className="w-full min-h-[54vh] max-w-7xl flex flex-col gap-2 md:flex-row justify-between py-5 md:space-x-2">
          {currentSolution?.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesSolutions;

interface SolutionCardInterface {
  solution: SalesSolutionsInterface;
}

const SolutionCard: React.FC<SolutionCardInterface> = ({ solution }) => {
  return (
    <div
      className={`flex flex-col justify-between w-full md:w-[49%] rounded-xl p-6 text-green-800`}
      style={{ background: solution.bgColor }}
    >
      <div className="flex flex-col">
        {solution?.title}
        {solution?.subTitle && solution.subTitle}
      </div>
      <img
        src={solution?.imgUrl}
        alt="second image//"
        className="w-full mt-auto"
      />
    </div>
  );
};
