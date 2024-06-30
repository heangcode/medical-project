import DailyBlog from "@/components/DailyBlog";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Logos from "@/components/Logos";
import PopularCategories from "@/components/PopularCategories";
import PopularProducts from "@/components/PopularProducts";
import SaleOfTheMonthSection from "@/components/SaleOfTheMonthSection";
import React from "react";

interface Category {
  name: string;
  image: string;
}

interface Product {
  name: string;
  price: string;
  originalPrice: string;
  productType: string;
  image: string;
  rating: number;
  discount: number;
}

interface Blog {
  date: string;
  image: string;
  excerpt: string;
}

interface Logo {
  name: string;
  src: string;
  alt: string;
}

interface HomePageProps {
  categories: Category[];
  products: Product[];
  blogs: Blog[];
  logos: Logo[];
}

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  return data;
}

const HomePage: React.FC = async () => {
  const { categories, products, blogs, logos } = await fetchData();

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 w-full">
      <main className="w-full">
        <div className="flex flex-col items-center space-y-[48px] w-full">
          <HeroSection />
          <FeaturesSection />
          <PopularCategories categories={categories} />
          <PopularProducts products={products} />
          <SaleOfTheMonthSection />
          <DailyBlog blogs={blogs} />
          <Logos logos={logos} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
