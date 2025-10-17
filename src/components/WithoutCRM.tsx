import XIcon from "../assets/leadIcons/XIcon";

interface WithoutCRMInterface {}

const WithoutCRM: React.FC<WithoutCRMInterface> = ({}) => {
  return (
    <div className="w-full lg:w-[45%] bg-pink-50 p-6 rounded-2xl shadow-md flex flex-col justify-between border-1 border-transparent hover:border-[#f79595] hover:scale-101 transition-all duration-300 ease-in-out">
      <div>
        <div className="flex items-center mb-4">
          <img
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/08084651/Without-LeadCRM-768x299.webp"
            alt="Sales Navigator"
            className="mr-4"
          />
        </div>
        <h3 className="text-xl font-semibold text-[#D24B68]">
          Without LeadCRM
        </h3>
      </div>
      <ul className="space-y-4 mt-5">
        <li className="flex items-center gap-3">
          <XIcon className="size-4" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              Manual Data Entry{" "}
              <span className="font-semibold text-[#FF4C51] bg-[#FFDCD4] rounded-full px-3 text-sm py-[.05rem]">
                3+ Hours wasted daily
              </span>
            </h3>
            <p className="text-[#4C4C4C]">
              Copying LinkedIn contacts to CRM manually plus losing conversation
              history
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <XIcon className="size-4" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              Incomplete Data
              <span className="font-semibold text-[#FF4C51] bg-[#FFDCD4] rounded-full px-3 text-sm py-[.05rem]">
                60% Data Incomplete
              </span>
            </h3>
            <p className="text-[#4C4C4C]">
              LinkedIn profiles missing Email and Phones from 700M+ Database.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <XIcon className="size-4" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              No CRM Visibility{" "}
              <span className="font-semibold text-[#FF4C51] bg-[#FFDCD4] rounded-full px-3 text-sm py-[.05rem]">
                Zero context available
              </span>
            </h3>
            <p className="text-[#4C4C4C]">
              Can’t see existing CRM contacts when browsing LinkedIn profiles
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <XIcon className="size-4" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#262626]">
              Limited Productivity{" "}
              <span className="font-semibold text-[#FF4C51] bg-[#FFDCD4] rounded-full px-3 text-sm py-[.05rem]">
                No smart assistance
              </span>
            </h3>
            <p className="text-[#4C4C4C]">
              Writing messages manually plus no AI assistant for reply, Invite
              or comments.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WithoutCRM;
