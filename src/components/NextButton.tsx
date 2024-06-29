import React from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const NextButton = () => {
  return (
    <button className="text-gray-700 bg-[#F2F2F2] p-[10px] hover:bg-[#008001] hover:text-white rounded-full flex items-center justify-center">
      <ArrowRightIcon className="w-[24px] h-[24px]" />
    </button>
  );
};

export default NextButton;
