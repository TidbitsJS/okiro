import React from "react";
import subscribe from "../../assets/subscribe.jpeg";
import okiro from "../../assets/okiro.svg";
import CustomButton from "../button/CustomButton";

import "./connectWithUs.css";
import { Link } from "react-router-dom";

const ConnectWithUs = () => {
  return (
    <div className="okiro__connectwithus">
      <div className="okiro__connectwithus_image-container">
        <img src={subscribe} alt="subscribe" />
      </div>
      <div className="okiro__connectwithus_form-container">
        <div className="okiro__connectwithus_form-container__logo">
          <Link exact to="/">
            <img src={okiro} alt="logo" />
          </Link>
        </div>
        <div className="okiro__connectwithus_form-container__heading">
          <h1>
            Subscribe to new <br /> posts
          </h1>
        </div>
        <div className="okiro__connectwithus_form-container__fields">
          <div className="okiro__connectwithus_form-container__fields-input">
            <p>Your Name</p>
            <input type="text" />
          </div>
          <div className="okiro__connectwithus_form-container__fields-input">
            <p>Your Email Address</p>
            <input type="email" />
          </div>
        </div>
        <CustomButton title="subscribe" />
      </div>
    </div>
  );
};

export default ConnectWithUs;
