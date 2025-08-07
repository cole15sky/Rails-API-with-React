import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../apis/blog";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    try {
      const res = await fetchBlogs();
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={{ border: "1px solid #ddd", marginBottom: "10px", padding: "10px" }}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
