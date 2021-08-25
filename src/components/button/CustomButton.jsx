import React from "react";

import "./customButton.css";

const CustomButton = ({ title, click, styles }) => {
  return (
    <div
      className="okiro__custom-button"
      onClick={click ? () => click() : null}
    >
      <button style={styles ? { ...styles } : null}>{title}</button>
    </div>
  );
};

export default CustomButton;
