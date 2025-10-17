import Four from "../assets/howWorks/Four";
import One from "../assets/howWorks/One";
import Three from "../assets/howWorks/Three";
import Two from "../assets/howWorks/Two";
import arrowimage from "../assets/leadIcons/rightArrow.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#EAEFFA] py-5 px-4 sm:px-6 md:px-8 lg:px-36 min-h-[60vh] flex flex-col">
      <div className="w-full flex flex-col justify-start mb-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          How It Works
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          From setup to success in <strong>4 simple steps</strong>
        </p>
      </div>
      <div className="relative flex flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center mt-4">
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full flex flex-col justify-center items-center py-4">
            <One className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Install the Extension
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
          </div>
          <img
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full flex flex-col justify-center items-center py-4">
            <Two className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Install the Extension
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
          </div>
          <img
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-768x533.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full flex flex-col justify-center items-center py-4">
            <Three className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Install the Extension
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
          </div>
          <img
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-768x551.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full flex flex-col justify-center items-center py-4">
            <Four className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Install the Extension
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
          </div>
          <img
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-768x418.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute w-full flex justify-center mt-6 top-9 left-2">
          <img
            src={arrowimage}
            alt="Right Arrow"
            className="w-full sm:w-[75%] md:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
