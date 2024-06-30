import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <Container>
        <Breadcrumb />
        <h1>Blog</h1>
      </Container>
    </div>
  );
};

export default Blog;
