import React from "react";

import "./customButton.css";

const CustomButton = ({ title, click }) => {
  return (
    <div
      className="okiro__custom-button"
      onClick={click ? () => click() : null}
    >
      <button>{title}</button>
    </div>
  );
};

export default CustomButton;
