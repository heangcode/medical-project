import React from "react";
import BlogCard from "./BlogCard";

interface Blog {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

interface DailyBlogProps {
  blogs: Blog[];
}

const DailyBlog: React.FC<DailyBlogProps> = ({ blogs }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Daily Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              date={blog.date}
              image={blog.image}
              excerpt={blog.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyBlog;
