import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, 
});

export const fetchBlogs = () => api.get("/blogs");

export const createBlog = (blogData) => {
  return api.post("/blogs", { blog: blogData });
};

export default api;
