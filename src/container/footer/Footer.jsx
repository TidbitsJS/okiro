import React from "react";
import {
  FaGithubAlt,
  FaMedium,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/okiro.svg";

import "./footer.css";

const Footer = () => {
  return (
    <div className="okiro__footer">
      <hr />
      <div className="okiro__footer-content">
        <div className="okiro__footer-brand">
          <img src={logo} alt="footer-logo" />
          <p>
            A minimal, functional theme for running a paid-membership
            publication on Ghost.
          </p>
          <div className="okiro__footer-brand_media">
            <FaMedium />
            <FaYoutube />
            <FaGithubAlt />
            <FaWhatsappSquare />
          </div>
        </div>

        <div className="okiro__footer-links">
          <div className="okiro__footer-links_div">
            <h3>About</h3>
            <div className="okiro__footer-links_div-linkDiv">
              <p>Features</p>
              <p>Style Guide</p>
              <p>Contact</p>
              <p>Get Theme</p>
            </div>
          </div>

          <div className="okiro__footer-links_div">
            <h3>Features</h3>
            <div className="okiro__footer-links_div-linkDiv">
              <p>Account</p>
              <p>Membership</p>
              <p>Sign in</p>
              <p>Sign up</p>
            </div>
          </div>

          <div className="okiro__footer-links_div">
            <h3>Support</h3>
            <div className="okiro__footer-links_div-linkDiv">
              <p>Authors</p>
              <p>Tags</p>
              <p>Version</p>
              <p>404</p>
            </div>
          </div>
        </div>
      </div>

      <div className="okiro__footer-copyright">
        <div>Okiro © 2021. All Right Reserved. Published with Ghost.</div>
        <div>
          Developed by <span>Tidbits</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
