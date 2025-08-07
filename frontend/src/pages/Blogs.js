import React, { useState } from "react";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";

const BlogsPage = () => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogs</h1>
      <BlogForm onSuccess={triggerRefresh} />
      <BlogList key={refresh} />
    </div>
  );
};

export default BlogsPage;
