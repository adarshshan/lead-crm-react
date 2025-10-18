import CustomButton from "./CustomButton";

interface SingleSourceOfTruthInterface {
  title: string;
  description?: string;
  imgUrl: string;
  buttonTitle: string;
  bgColor?: string;
  className?: string;
  rightArrow?: boolean;
}
const SingleSourceOfTruth: React.FC<SingleSourceOfTruthInterface> = ({
  title,
  description,
  imgUrl,
  buttonTitle,
  bgColor,
  className,
  rightArrow,
}) => {
  return (
    <div
      style={{ background: bgColor ?? "white" }}
      className={`min-h-[14rem] py-15 ${className}`}
    >
      <div className="flex flex-col items-center py-6 px-4 sm:px-6 md:px-8 lg:px-20">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#090F4E] pb-1 text-center">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 text-center text-lg mt-2 w-[60%]">
            {description}
          </p>
        )}
        <img src={imgUrl} alt="" className="w-[75%] mt-8" />
        <CustomButton
          text={buttonTitle}
          bgColor="#B3FC6A"
          textColor="#000000"
          rightArrow={rightArrow}
        />
      </div>
    </div>
  );
};

export default SingleSourceOfTruth;
