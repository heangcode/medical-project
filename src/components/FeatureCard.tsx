import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="rounded-full p-4">
        <img
          src={icon}
          alt={title}
          className="w-[72px] h-[72px] object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
