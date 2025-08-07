import React, { useState } from "react";
import { createBlog } from "../apis/blog";

const BlogForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog({ title, description });
      setTitle("");
      setDescription("");
      if (onSuccess) onSuccess(); // refresh blog list
    } catch (error) {
      alert("Failed to create blog. Check console.");
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Create a Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "10px", height: "100px", marginBottom: "10px" }}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default BlogForm;