interface CustomButtonInterface {
  text: string;
  bgColor?: string;
  textColor?: string;
}
const CustomButton: React.FC<CustomButtonInterface> = ({
  text,
  bgColor,
  textColor,
}) => {
  return (
    <button
      style={{
        background: bgColor ?? "#B3FC6A",
        color: textColor ?? "#000000",
      }}
      className="py-3 px-5 rounded-xl font-semibold sm:mt-9"
    >
      {text}
    </button>
  );
};

export default CustomButton;
