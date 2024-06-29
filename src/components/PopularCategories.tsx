import React from "react";
import CategoryCard from "./CategoryCard";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import Container from "./Container";

interface Category {
  name: string;
  image: string;
}

interface PopularCategoriesProps {
  categories: Category[];
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({
  categories,
}) => {
  return (
    <section className="w-full">
      <Container>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-between">
            <h2 className="text-[32px] font-semibold">Popular Categories</h2>
            <div className="flex items-center space-x-2 text-[#008001]">
              <h2 className="text-[16px] font-medium">View All</h2>
              <ArrowRightIcon />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-[32px]">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                image={category.image}
                isSelected={category.name === "Medical Tube"}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularCategories;
