import React from "react";
import PropTypes from 'prop-types'

export const PageType = Object.freeze({
  LOGIN: 0,
  REGISTER: 1,
});



const Authentication = ({ pageType}) => {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
            <h3 className="text-2xl font-bold">
                {(pageType===PageType.LOGIN)? 'Login': 'Register'}
                 </h3>
        </div>
    </div>
  );
};

Authentication.propTypes = {
    pageType: PropTypes.number.isRequired,
};

export default Authentication;
