import React from "react";
import Four from "../assets/howWorks/Four";
import One from "../assets/howWorks/One";
import Three from "../assets/howWorks/Three";
import Two from "../assets/howWorks/Two";
import arrowimage from "../assets/leadIcons/rightArrow.png";
import PlayStoreIcon from "../assets/PlayStoreIcon";
import StarIcon from "../assets/StarIcon";

const cardData = [
  {
    name: "David Fincher",
    desig: "On Capterra",
    avatarImg:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/18160607/olivia.jpg",
    description:
      "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
  },
  {
    name: "Lillian Williams",
    desig: "On Capterra",
    avatarImg:
      "https://img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png",
    description:
      "“My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”",
  },
  {
    name: "Michael",
    desig: "On Capterra",
    avatarImg:
      "https://img.leadcrm.io/wp-content/uploads/2025/02/18095636/Avatar-Users2_50.png",
    description:
      "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
  },
];

const ReviewRateComponent: React.FC<any> = (props) => {
  return (
    <div {...props}>
      <PlayStoreIcon className="size-8 bg-[#ffffff] rounded-md p-1" />
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className="size-4 fill-[black]" />
      ))}
    </div>
  );
};

interface HowItWorksCardProps {
  card: { name: string; desig: string; avatarImg: string; description: string };
}

const ReviewCard: React.FC<HowItWorksCardProps> = ({ card }) => {
  return (
    <div className="w-full flex flex-col justify-between md:w-[48%] lg:w-[27%] min-h-[30vh] sm:min-h-[40vh] shadow-md rounded-2xl p-4 bg-[#F9F0F8] z-50 hover:scale-99 border-transparent hover:border hover:border-[#f79595] hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer pt-9">
      <p className="text-[#2C2C2C] text-start text-[1.1rem] font-semibold">
        {card?.description}
      </p>
      <ReviewRateComponent className="flex gap-1 items-center py-3" />
      <div className="flex gap-4 items-center border-t border-[#7A7A7A4F] pt-4 mt-auto">
        <img
          src={card?.avatarImg}
          alt={card?.name}
          className="w-10 h-10 mb-3 rounded-full"
        />
        <h3 className="flex flex-col gap-0 font-bold text-[1.2rem] text-[#090F4E]">
          <h4 className="leading-3">{card?.name}</h4>
          <p className="text-[#696969] font-normal">{card?.desig}</p>
        </h3>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="bg-[#EAEFFA] py-9 px-4 sm:px-6 md:px-8 lg:px-36 min-h-[60vh] flex flex-col">
      <div className="w-full sm:px-[8rem] flex flex-col justify-start mb-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          What people are saying about LeadCRM
        </h2>
      </div>
      <div className="relative flex flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center mt-4">
        {cardData.map((card, index) => (
          <ReviewCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
