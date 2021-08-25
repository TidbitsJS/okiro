import React from "react";

import "./spinner.css";

const Spinner = () => {
  return (
    <div className="okiro__spinner">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
