import { NextResponse } from "next/server";

const data = {
  categories: [
    { name: "Syringe and needles", image: "/syringe.svg" },
    { name: "Suture", image: "/suture.svg" },
    { name: "Blood Bag", image: "/blood-bag.svg" },
    { name: "Blood Lancet", image: "/blood-lancet.svg" },
    { name: "Urine Bag", image: "/urine-bag.svg" },
    { name: "Medical Tube", image: "/medical-tube.svg" },
  ],
  products: [
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 50,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 0,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 20,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 50,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 0,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 20,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 50,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/products.svg",
      rating: 4.5,
      discount: 0,
    },

    // Add more products as needed
  ],
  blogs: [
    {
      title: "Blog Post 1",
      date: "18 Nov",
      image: "/images/blog1.png",
      excerpt:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    // Add more blogs
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
