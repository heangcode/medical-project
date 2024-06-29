"use client";

import DailyBlog from "@/components/DailyBlog";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Logos from "@/components/Logos";
import PopularCategories from "@/components/PopularCategories";
import PopularProducts from "@/components/PopularProducts";
import SaleOfTheMonthSection from "@/components/SaleOfTheMonthSection";
import React, { useEffect, useState } from "react";

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
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

interface Logo {
  name: string;
  src: string;
  alt: string;
}

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      setCategories(data.categories);
      setProducts(data.products);
      setBlogs(data.blogs);
      setLogos(data.logos);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 w-full">
      <main className="w-full">
        <Header />
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
      <Footer />
    </div>
  );
};

export default HomePage;
