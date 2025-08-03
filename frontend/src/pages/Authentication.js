import React from "react";

export const PageType = Object.freeze({
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER'
});

const Authentication = ({ pageType = PageType.LOGIN }) => {
  return (
    <div>
      {pageType === PageType.LOGIN ? (
        <h1>Login</h1>
      ) : (
        <h1>Register</h1>
      )}
    </div>
  );
};

export default Authentication;
