import RightArrow from "../assets/RightArrow";

interface CustomButtonInterface {
  text: string;
  bgColor?: string;
  textColor?: string;
  rightArrow?: boolean;
}
const CustomButton: React.FC<CustomButtonInterface> = ({
  text,
  bgColor,
  textColor,
  rightArrow,
}) => {
  return (
    <button
      style={{
        background: bgColor ?? "#B3FC6A",
        color: textColor ?? "#000000",
      }}
      className="flex gap-1 items-center py-3 px-5 rounded-xl font-semibold mt-4 sm:mt-9"
    >
      {text}
      {rightArrow && <RightArrow className="size-4" />}
    </button>
  );
};

export default CustomButton;
