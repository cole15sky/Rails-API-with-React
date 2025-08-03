import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateEmail, validatePassword } from "../utilities/validations";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(initialErrorState);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { ...initialErrorState };

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(password)) {
      newErrors.password = "Password should be at least 6 characters long.";
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-12 border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-center mb-8">
          {pageType === PageType.LOGIN ? "Login" : "Register"}
        </h3>

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
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
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
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

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
