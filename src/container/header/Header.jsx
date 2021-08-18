import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import okiro from "../../assets/okiro.svg";
import CustomButton from "../../components/button/CustomButton";

import "./header.css";

const Header = () => {
  const [showDotLinks, setShowDotLinks] = useState(false);
  const [showMenuLinks, setShowMenuLinks] = useState(false);

  return (
    <div className="okiro__header">
      <div className="okiro__header__links">
        <ul>
          <li className="special-link">Home</li>
          <li className="special-link">Membership</li>
          <li className="special-link">Features</li>
          <li>
            <BsThreeDots onClick={() => setShowDotLinks(!showDotLinks)} />
          </li>
        </ul>

        {showDotLinks ? (
          <div className="okiro__header__dotLinks">
            <ul>
              <li className="special-link">Authors</li>
              <li className="special-link">Tags</li>
              <li className="special-link">About</li>
              <li className="special-link">Subscribe</li>
              <li className="special-link">Contact</li>
            </ul>
          </div>
        ) : null}
      </div>

      <div className="okiro__header__logo">
        <img src={okiro} alt="okiro_logo" />
      </div>
      <div className="okiro__header__sign">
        <ul>
          <li>
            <FiSearch />
          </li>
          <li className="special-link">Sign in</li>
          <li>
            <CustomButton title="sign up" />
          </li>
        </ul>
      </div>

      <div className="okiro__header__hamburger">
        <div
          onClick={() => setShowMenuLinks(!showMenuLinks)}
          className={`hamburger hamburger--collapse  ${
            showMenuLinks ? "is-active" : ""
          }  `}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>

        {showMenuLinks ? (
          <div className="okiro__header__hamburger--linksDiv">
            <ul>
              <li className=" special-link">Home</li>
              <li className=" special-link">Membership</li>
              <li className=" special-link">Features</li>
              <li className=" special-link">Authors</li>
              <li className=" special-link">Tags</li>
              <li className=" special-link">About</li>
              <li className=" special-link">Contact</li>
              <li className=" special-link">Sign in</li>
              <li style={{ marginTop: 10 }}>
                <CustomButton title="sign up" />
              </li>
            </ul>
            <div className="okiro__header__hamburger--linkDiv-search">
              search <FiSearch />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
