"use client";

import DailyBlog from "@/components/DailyBlog";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularCategories from "@/components/PopularCategories";
import PopularProducts from "@/components/PopularProducts";
import SaleOfTheMonth from "@/components/SaleOfTheMonth";
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

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      setCategories(data.categories);
      setProducts(data.products);
      setBlogs(data.blogs);
    };

    fetchData();
  }, []);

  return (
    <div>
      <main>
        <Header />
        <div className="flex flex-col items-center space-y-[48px] w-full">
          <HeroSection />
          <FeaturesSection />
          <PopularCategories categories={categories} />
          <PopularProducts products={products} />
          <SaleOfTheMonth />
          <DailyBlog blogs={blogs} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
