import React from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import CountdownTimer from "./CountdownTimer";

const SaleOfTheMonthCard: React.FC = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center rounded-lg h-[584px]"
      style={{
        backgroundImage: `url('/home/sale-of-the-month.png')`,
        objectFit: "cover",
      }}
    >
      <div className="relative z-10 space-y-[20px] p-6 flex flex-col items-center text-center w-full">
        <p className="text-sm text-gray-500 capitalize tracking-[1px]">
          BEST DEALS
        </p>
        <h3 className="text-4xl font-bold text-gray-800">Sale of the Month</h3>
        <CountdownTimer targetDate="2024-12-31T23:59:59" />
        <button className="mt-6 px-8 py-4 bg-[#008001] text-white rounded-full flex items-center justify-center space-x-2">
          <span>Shop Now</span>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default SaleOfTheMonthCard;
