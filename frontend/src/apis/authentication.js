import { DOMAIN } from "./config"; 

export const registerApi = async (bodyObject) => {
  const response = await fetch(`${DOMAIN}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObject),
  });
  const data = await response.json();

  if (!response.ok) {
    return { result: null, error: data.errors || "Something went wrong" };
  }
  return { result: data, error: null };
};

export const loginApi = async (bodyObject) => {
  const response = await fetch(`${DOMAIN}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObject),
  });
  const data = await response.json();

  if (!response.ok) {
    return { result: null, error: data.errors || "Invalid credentials" };
  }
  return { result: data, error: null };
};
