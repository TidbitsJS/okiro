import React from "react";
import CustomButton from "../button/CustomButton";

import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="okiro__subscribe">
      <div className="okiro__subscribe-text">
        <h2>Subscribe to new posts</h2>
      </div>
      <div className="okiro__subscribe-input">
        <input placeholder="Your email address" type="email" required />
        <CustomButton title="Subscribe" />
      </div>
    </div>
  );
};

export default Subscribe;
