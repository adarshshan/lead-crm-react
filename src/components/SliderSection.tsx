import AccessIcon from "../assets/SliderIcons/AccessIcon";
import BookIcon from "../assets/SliderIcons/BookIcon";
import PointerIcon from "../assets/SliderIcons/PointerIcon";
import ThreeCircle from "../assets/SliderIcons/ThreeCircle";

const SliderSection = () => {
  const cards = [
    { title: "Instant Email Finder", icon: <AccessIcon className="size-12" /> },
    { title: "Custom Field Mapping", icon: <BookIcon className="size-12" /> },
    {
      title: "Advanced WaterFall Enrichment",
      icon: <PointerIcon className="size-12" />,
    },
    {
      title: "Seamless Deal Management",
      icon: <ThreeCircle className="size-12" />,
    },
  ];

  const allCards = [...cards, ...cards, ...cards];

  return (
    <div className="relative overflow-hidden w-full py-8">
      <div
        className="flex animate-slide space-x-6"
        style={{ width: `${allCards.length * 250}px` }}
      >
        {allCards.map((card, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white text-black p-6 rounded-xl flex-shrink-0"
          >
            {card.icon}
            <h3 className="text-lg font-semibold whitespace-nowrap">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-slide {
            animation: slide 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SliderSection;
