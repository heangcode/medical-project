import React from "react";
import Container from "./Container";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#F2F2F2]">
      <Container>
        <div className="container mx-auto flex items-center text-left space-x-10">
          <img
            src="medical-images.svg"
            alt="Medical Equipment"
            className="object-cover"
          />
          <div className="flex flex-col">
            <div className="flex flex-col w-full items-start">
              <span className="text-[#008001] text-[18px] font-semibold">
                Medicom experienced since 1993 in
              </span>
              <h1 className="text-[52px] font-extrabold">
                Medical Equipment Provider
              </h1>
            </div>
            <div className="flex flex-col items-start mt-10">
              <p className="text-[32px]">
                Sale up to {""}
                <strong className="text-[#FF8A00] font-medium">30% OFF</strong>
              </p>
              <span>
                Medicom is one of the major supplier of medical and Laboratory
                Equipment throughout the kingdome.
              </span>
              <button className="mt-6 px-8 py-4 bg-[#008001] text-white rounded-full flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
