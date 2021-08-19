import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <li className="special-link">
            <NavLink exact to="/" activeClassName="isActive">
              Home
            </NavLink>
          </li>
          <li className="special-link">
            <NavLink exact to="/membership" activeClassName="isActive">
              Membership
            </NavLink>
          </li>
          <li className="special-link">
            <NavLink exact to="/features" activeClassName="isActive">
              Features
            </NavLink>
          </li>
          <li>
            <BsThreeDots onClick={() => setShowDotLinks(!showDotLinks)} />
          </li>
        </ul>

        {showDotLinks ? (
          <div className="okiro__header__dotLinks">
            <ul>
              <li className="special-link">
                <NavLink exact to="/authors" activeClassName="isActive">
                  Authors
                </NavLink>
              </li>
              <li className="special-link">
                <NavLink exact to="/tags" activeClassName="isActive">
                  Tags
                </NavLink>
              </li>
              <li className="special-link">
                <NavLink exact to="/about" activeClassName="isActive">
                  About
                </NavLink>
              </li>
              <li className="special-link">
                <NavLink exact to="/subscribe" activeClassName="isActive">
                  Subscribe
                </NavLink>
              </li>
              <li className="special-link">
                <NavLink exact to="contact" activeClassName="isActive">
                  Contact
                </NavLink>
              </li>
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
          <li className="special-link">
            <NavLink exact to="signin" activeClassName="isActive">
              Sign in
            </NavLink>
          </li>
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
              <li className=" special-link">
                <NavLink exact to="/" activeClassName="isActive">
                  Home
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink exact to="/membership" activeClassName="isActive">
                  Membership
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink exact to="/features" activeClassName="isActive">
                  Features
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink exact to="/authors" activeClassName="isActive">
                  Authors
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink exact to="/tags" activeClassName="isActive">
                  Tags
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink exact to="/about" activeClassName="isActive">
                  About
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink exact to="contact" activeClassName="isActive">
                  Contact
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink exact to="signin" activeClassName="isActive">
                  Sign in
                </NavLink>
              </li>
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
