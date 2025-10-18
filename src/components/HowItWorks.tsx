import React from "react";
import Four from "../assets/howWorks/Four";
import One from "../assets/howWorks/One";
import Three from "../assets/howWorks/Three";
import Two from "../assets/howWorks/Two";
import arrowimage from "../assets/leadIcons/rightArrow.png";
import CustomButton from "./CustomButton";

const cardData = [
  {
    icon: One,
    title: "Install the Extension",
    description:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and\n              seamless.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp",
    alt: "Install the Extension",
  },
  {
    icon: Two,
    title: "Browse LinkedIn",
    description:
      "Search for leads on LinkedIn and let LeadCRM capture key details\n              effortlessly.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-768x533.webp",
    alt: "Browse LinkedIn",
  },
  {
    icon: Three,
    title: "Get Enriched Data",
    description:
      "Enrich your leads with verified data like emails and company\n              insights instantly.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-768x551.webp",
    alt: "Get Enriched Data",
  },
  {
    icon: Four,
    title: "Sync to CRM",
    description:
      "Sync enriched leads to your CRM with one click for immediate\n              follow-up.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-768x418.webp",
    alt: "Sync to CRM",
  },
];

interface HowItWorksCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  icon: Icon,
  title,
  description,
  image,
  alt,
}) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[20%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[50vh] shadow-md rounded-2xl p-4 bg-[#ffffff] z-40 hover:scale-99 border-transparent hover:border hover:border-[#2D96BC] hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
      <div className="w-full h-full flex flex-col justify-between items-center py-4">
        <Icon className="size-20" />
        <h3 className="font-semibold text-lg mt-5 text-[#090F4E]">{title}</h3>
        <p className="text-[#4C4C4C] text-center text-[.9rem]">{description}</p>
        <img src={image} alt={alt} className="w-full mt-auto" />
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="bg-[#EAEFFA] py-9 px-4 sm:px-6 md:px-8 lg:px-36 min-h-[60vh] flex flex-col">
      <div className="w-full sm:px-[8rem] flex flex-col justify-start mb-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          How It Works
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          From setup to success in <strong>4 simple steps</strong>
        </p>
      </div>
      <div className="relative flex flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center mt-4">
        {cardData.map((card, index) => (
          <HowItWorksCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            image={card.image}
            alt={card.alt}
          />
        ))}
        <div className="absolute w-full flex justify-center mt-6 top-9 left-2">
          <img
            src={arrowimage}
            alt="Right Arrow"
            className="w-full sm:w-[75%] md:w-[60%]"
          />
        </div>
      </div>
      <div className="flex justify-center py-6  lg:py-9">
        <CustomButton
          text="Try LeadCRM Now"
          bgColor="#B3FC6A"
          textColor="#000000"
          rightArrow
        />
      </div>
    </div>
  );
};

export default HowItWorks;
