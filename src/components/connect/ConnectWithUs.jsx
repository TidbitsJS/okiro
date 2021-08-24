import React from "react";
import subscribe from "../../assets/subscribe.jpeg";
import contact from "../../assets/contact.jpeg";
import okiro from "../../assets/okiro.svg";
import CustomButton from "../button/CustomButton";

import "./connectWithUs.css";
import { Link } from "react-router-dom";

const ConnectWithUs = (props) => {
  const { title, subtitle, btnName, message } = props;
  return (
    <div className="okiro__connectwithus">
      <div className="okiro__connectwithus_image-container">
        <img src={message ? contact : subscribe} alt="subscribe" />
      </div>
      <div className="okiro__connectwithus_form-container">
        <div className="okiro__connectwithus_form-container__logo">
          <Link to="/">
            <img src={okiro} alt="logo" />
          </Link>
        </div>
        <div className="okiro__connectwithus_form-container__heading">
          <h1>
            {title}
            {subtitle ? (
              <>
                <br />
                {subtitle}
              </>
            ) : null}
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
          {message ? (
            <div className="okiro__connectwithus__form-container__fields-textarea">
              <p>Your Message</p>
              <textarea rows={5} />
            </div>
          ) : null}
        </div>
        <CustomButton title={btnName} />
      </div>
    </div>
  );
};

export default ConnectWithUs;
