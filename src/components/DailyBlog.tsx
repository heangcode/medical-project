import React from "react";
import BlogCard from "./BlogCard";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Container from "./Container";

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
    <section className="w-full">
      <Container>
        <div className="container mx-auto text-center">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-8">Daily Blog</h2>
            <div className="flex items-center space-x-2">
              <PrevButton />
              <NextButton />
            </div>
          </div>
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
      </Container>
    </section>
  );
};

export default DailyBlog;
