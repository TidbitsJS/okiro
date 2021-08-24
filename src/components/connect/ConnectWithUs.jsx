import React from "react";
import { Link } from "react-router-dom";
import subscribe from "../../assets/subscribe.jpeg";
import contact from "../../assets/contact.jpeg";
import signin from "../../assets/signin.jpeg";
import signup from "../../assets/signup.jpeg";
import okiro from "../../assets/okiro.svg";
import CustomButton from "../button/CustomButton";

import "./connectWithUs.css";

const ConnectWithUs = ({
  title,
  subtitle,
  btnName,
  nameField,
  textareaField,
  imageUrl,
  sign,
}) => {
  let url;
  if (imageUrl === "subscribe") url = subscribe;
  else if (imageUrl === "signin") url = signin;
  else if (imageUrl === "signup") url = signup;
  else url = contact;

  return (
    <div className="okiro__connectwithus">
      <div className="okiro__connectwithus_image-container">
        <img src={url} alt="subscribe" />
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
          {nameField ? (
            <div className="okiro__connectwithus_form-container__fields-input">
              <p>Your Name</p>
              <input type="text" />
            </div>
          ) : null}

          <div className="okiro__connectwithus_form-container__fields-input">
            <p>Your Email Address</p>
            <input type="email" />
          </div>

          {textareaField ? (
            <div className="okiro__connectwithus__form-container__fields-textarea">
              <p>Your Message</p>
              <textarea rows={5} />
            </div>
          ) : null}

          {sign ? (
            <div className="okiro__connectwithus_form-container__fields-sign">
              {sign === "signup" ? (
                <p>
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span>Sign In</span>
                  </Link>
                </p>
              ) : (
                <p>
                  Don't have an account yet?{" "}
                  <Link to="/signup">
                    <span>Sign up</span>
                  </Link>
                </p>
              )}
            </div>
          ) : null}
        </div>
        <CustomButton title={btnName} />
      </div>
    </div>
  );
};

export default ConnectWithUs;
