import React from "react";

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, image, excerpt }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={image} alt={title} className="mx-auto mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">{date}</p>
      <p>{excerpt}</p>
      <a href="#" className="mt-4 inline-block text-green-500">
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
