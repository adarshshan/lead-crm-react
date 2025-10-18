import CustomButton from "./CustomButton";
import messageBox from "../assets/message_box.png";
import spaceImg from "../assets/spaceImg.png";

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
      className={`min-h-[14rem] pt-15 ${className} relative`}
    >
      {!rightArrow && (
        <img
          src={messageBox}
          alt=""
          className="absolute left-3/5 top-0 size-28 hidden sm:block"
        />
      )}
      {!rightArrow && (
        <img
          src={spaceImg}
          alt=""
          className="absolute right-0 -bottom-6 hidden sm:block size-28"
        />
      )}

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
