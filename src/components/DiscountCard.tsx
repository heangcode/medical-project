import React from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const DiscountCard: React.FC = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center rounded-lg h-[584px]"
      style={{ backgroundImage: `url('/home/discount.png')` }}
    >
      <div className="relative z-10 space-y-[20px] p-6 flex flex-col items-center text-center w-full">
        <p className="text-sm text-[#1A1A1A] capitalize tracking-[1px]">
          Summer Sale
        </p>
        <h3 className="text-4xl font-bold text-[#1A1A1A]">Discount</h3>
        <span className="text-[#1A1A1A]">
          Up to{" "}
          <strong className="text-[#FCC900] bg-black px-[12px] py-[6px] rounded">
            64% OFF
          </strong>
        </span>
        <button className="mt-6 px-10 py-[13.5px] font-semibold bg-white text-[#008001] rounded-full border-[#008001] border-2 flex items-center justify-center space-x-2">
          <span>Shop Now</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
