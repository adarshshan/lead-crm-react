import React from "react";
import RocketIcon from "../assets/RocketIcon";
import WorkIcon_1 from "../assets/WorkIcon_1";
import WorkIcon_3 from "../assets/WorkIcon_3";
import WorkIcon_2 from "../assets/WorkIcon_2";
import ChromeIcon from "../assets/ChromeIcon";
import PlayStoreIcon from "../assets/PlayStoreIcon";
import StarIcon from "../assets/StarIcon";
import ChromeCircle from "../assets/ChromeCircle";

const Hero: React.FC = () => {
  return (
    <div className="relative isolate px-6 pt-2 lg:px-8">
      <div className="mx-auto max-w-8xl pt-32 sm:pt-48 lg:pt-44 pb-16 sm:pb-24 lg:pb-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="flex items-center gap-2 rounded-full px-3 py-2 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 border border-[#9ACCFF]">
            <RocketIcon className="size-5" />
            <p className="text-[#63657E]">
              Thousands of Professional using LeadCRM
            </p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-[#121212] sm:text-6xl text-center">
            LinkedIn CRM Integration<br></br>
            Capture, Sync and Enrich in{" "}
            <span className="text-[#2D96BC]">Both Ways</span>
          </h1>
          <div className="flex justify-center">
            <p className="sm:w-[50%] mt-8 text-lg font-medium text-pretty text-[#363636] sm:text-xl/8">
              Automatically sync LinkedIn prospects to your CRM and overlay
              existing CRM contacts on LinkedIn profiles. Complete
              bi-directional integration with HubSpot, Salesforce, and
              Pipedrive.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-between items-center w-[20%] h-[5rem] bg-gradient-to-r from-[#5ED3FF] via-[#6EC6FE] via-[#EB65F4] to-[#FD58F2] rounded-xl px-5 py-3 mt-10">
              <p className="text-[#2E2E2E] test-2xl font-semibold">
                Works With
              </p>
              <div className="flex items-center gap-1">
                <WorkIcon_1 className="size-14" />
                <WorkIcon_2 className="size-14" />
                <WorkIcon_3 className="size-14" />
              </div>
            </div>
            <div className="flex justify-between gap-3 items-center w-[23%] h-[5rem] py-3 mt-5">
              <div className="flex justify-between items-center gap-2">
                <div className="flex justify-center items-center rounded-xl bg-white p-3 shadow-sm shadow-[0_0_10px_#9aa1a7]">
                  <ChromeIcon className="size-8" />
                </div>

                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
                <p>5/5</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="flex justify-center items-center rounded-xl bg-white p-3 shadow-sm shadow-[0_0_10px_#9aa1a7]">
                  <PlayStoreIcon className="size-8" />
                </div>

                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
                <p>5/5</p>
              </div>
            </div>
            <div className="flex mt-5 gap-3 items-center">
              <div className="flex gap-2 items-center rounded-lg py-2 px-3 bg-[#373737] text-[#ffffff]">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[12px]">Available in</p>
                  <h4 className="text-[.9rem] font-semibold">
                    Chrome Web Store
                  </h4>
                </div>
                <ChromeCircle className="size-8" />
              </div>
              <div className="flex items-center rounded-lg py-4 px-4 font-semibold bg-[#B3FC6A] text-[#242424] text-center">
                Get a Free Trial Now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
