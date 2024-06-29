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
      date: "18 Nov",
      image: "/blog-01.png",
      excerpt:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      date: "18 Nov",
      image: "/blog-02.png",
      excerpt:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      date: "18 Nov",
      image: "/blog-03.png",
      excerpt:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
  ],
  logos: [
    { name: "steps", src: "/Vector.png", alt: "Steps Logo" },
    { name: "mango", src: "/mango-1.png", alt: "Mango Logo" },
    { name: "food", src: "/food.png", alt: "Food Logo" },
    { name: "Group", src: "/Group.png", alt: "Group Logo" },
    {
      name: "book-off",
      src: "bookoff-corporation-logo.png",
      alt: "Book-Off Logo",
    },
    { name: "gseries", src: "/Group-1.png", alt: "G Series Logo" },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
