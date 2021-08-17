import React from "react";

import "./customButton.css";

const CustomButton = ({ title }) => {
  return (
    <div className="okiro__custom-button">
      <button>{title}</button>
    </div>
  );
};

export default CustomButton;
