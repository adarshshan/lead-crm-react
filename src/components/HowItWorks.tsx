import Four from "../assets/howWorks/Four";
import One from "../assets/howWorks/One";
import Three from "../assets/howWorks/Three";
import Two from "../assets/howWorks/Two";
import arrowimage from "../assets/leadIcons/rightArrow.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#EAEFFA] py-9 px-4 sm:px-6 md:px-8 lg:px-36 min-h-[60vh] flex flex-col">
      <div className="w-full sm:px-6xl flex flex-col justify-start mb-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          How It Works
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          From setup to success in <strong>4 simple steps</strong>
        </p>
      </div>
      <div className="relative flex flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center mt-4">
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[50vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full h-full flex flex-col justify-between items-center py-4">
            <One className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Install the Extension
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp"
              alt="Install the Extension"
              className="w-full mt-auto"
            />
          </div>
        </div>
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[50vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full h-full flex flex-col justify-between items-center py-4">
            <Two className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Browse LinkedIn
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Search for leads on LinkedIn and let LeadCRM capture key details
              effortlessly.
            </p>
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-768x533.webp"
              alt="Browse LinkedIn"
              className="w-full mt-auto"
            />
          </div>
        </div>
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[50vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full h-full flex flex-col justify-between items-center py-4">
            <Three className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Get Enriched Data
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Enrich your leads with verified data like emails and company
              insights instantly.
            </p>
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-768x551.webp"
              alt="Get Enriched Data"
              className="w-full mt-auto"
            />
          </div>
        </div>
        <div className="w-full sm:w-[48%] md:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[50vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-50">
          <div className="w-full h-full flex flex-col justify-between items-center py-4">
            <Four className="size-20" />
            <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">
              Sync to CRM
            </h3>
            <p className="text-[#4C4C4C] text-center text-[.9rem]">
              Sync enriched leads to your CRM with one click for immediate
              follow-up.
            </p>
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-768x418.webp"
              alt="Sync to CRM"
              className="w-full mt-auto"
            />
          </div>
        </div>
        <div className="absolute w-full flex justify-center mt-6 top-9 left-2">
          <img
            src={arrowimage}
            alt="Right Arrow"
            className="w-full sm:w-[75%] md:w-[60%]"
          />
        </div>
      </div>
      <div className="flex justify-center py-6  lg:py-9">
        <button className="py-3 px-5 bg-[#B3FC6A] rounded-xl text-[#000000] font-semibold sm:mt-9">
          Try LeadCRM Now
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
