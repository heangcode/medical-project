import React from "react";
import FeatureCard from "./FeatureCard";
import Container from "./Container";

const features = [
  {
    icon: "/home/free-shipping.svg",
    title: "Free Shipping",
    description: "Free shipping with discount",
  },
  {
    icon: "/home/support.svg",
    title: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    icon: "/home/secure.svg",
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: "/home/money-back.svg",
    title: "Money-Back Guarantee",
    description: "30 days money-back",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="container mx-auto flex border-b pb-10 justify-between items-center space-x-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
