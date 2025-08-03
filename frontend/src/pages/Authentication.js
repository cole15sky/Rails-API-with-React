import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { validateEmail, validatePassword } from "../utilities/validations";
import { Link, useNavigate } from "react-router-dom";
import { registerApi, loginApi } from "../apis/authentication";

export const PageType = Object.freeze({
  LOGIN: 0,
  REGISTER: 1,
});

const initialErrorState = {
  email: "",
  password: "",
  api: "",
};

const Authentication = ({ pageType }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(initialErrorState);

  // Redirect away if already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) return;

    if (pageType === PageType.LOGIN) {
      try {
        const { result, error } = await loginApi({ user: { email, password } });

        if (error) {
          setErrors((prev) => ({ ...prev, api: error }));
          return;
        }

        console.log("Login success:", result);

        localStorage.setItem("user", JSON.stringify(result.data));

        navigate("/");
      } catch (err) {
        console.error("Unexpected error:", err);
        setErrors((prev) => ({
          ...prev,
          api: "Something went wrong. Please try again.",
        }));
      }
    } else {
      try {
        const { result, error } = await registerApi({ user: { email, password } });

        if (error) {
          setErrors((prev) => ({ ...prev, api: error }));
          return;
        }

        console.log("Registration success:", result);
        navigate("/login");
      } catch (err) {
        console.error("Unexpected error:", err);
        setErrors((prev) => ({
          ...prev,
          api: "Something went wrong. Please try again.",
        }));
      }
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-12 border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-center mb-8">
          {pageType === PageType.LOGIN ? "Login" : "Register"}
        </h3>

        {pageType === PageType.LOGIN ? (
          <p className="mt-4 text-center text-sm">
            Not a user?{" "}
            <Link to="/register" className="text-indigo-600 underline hover:text-indigo-800">
              Register
            </Link>
          </p>
        ) : (
          <p>
            Already a user?{" "}
            <Link to="/login" className="text-indigo-600 underline hover:text-indigo-800">
              Login
            </Link>
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex mt-10 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <input
              name="email"
              type="email"
              className="py-3 px-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <input
              name="password"
              type="password"
              className="py-3 px-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          {errors.api && (
            <p className="text-sm text-red-500 text-center">{errors.api}</p>
          )}

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition-colors duration-200"
          >
            {pageType === PageType.LOGIN ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

Authentication.propTypes = {
  pageType: PropTypes.number.isRequired,
};

export default Authentication;
