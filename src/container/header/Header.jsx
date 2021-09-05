import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
            <NavLink
              exact
              to="/"
              activeClassName="isActive"
              onClick={() => setShowDotLinks(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="special-link">
            <NavLink
              exact
              to="/membership"
              activeClassName="isActive"
              onClick={() => setShowDotLinks(false)}
            >
              Membership
            </NavLink>
          </li>
          <li className="special-link">
            <NavLink
              exact
              to="/features"
              activeClassName="isActive"
              onClick={() => setShowDotLinks(false)}
            >
              Features
            </NavLink>
          </li>
          <li>
            <BsThreeDots onClick={() => setShowDotLinks(!showDotLinks)} />

            {showDotLinks ? (
              <div className="okiro__header__dotLinks">
                <ul>
                  <li className="special-link">
                    <NavLink
                      exact
                      to="/authors"
                      activeClassName="isActive"
                      onClick={() => setShowDotLinks(!showDotLinks)}
                    >
                      Authors
                    </NavLink>
                  </li>
                  <li className="special-link">
                    <NavLink
                      exact
                      to="/tags"
                      activeClassName="isActive"
                      onClick={() => setShowDotLinks(!showDotLinks)}
                    >
                      Tags
                    </NavLink>
                  </li>
                  <li className="special-link">
                    <NavLink
                      exact
                      to="/about"
                      activeClassName="isActive"
                      onClick={() => setShowDotLinks(!showDotLinks)}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="special-link">
                    <NavLink
                      exact
                      to="/subscribe"
                      activeClassName="isActive"
                      onClick={() => setShowDotLinks(!showDotLinks)}
                    >
                      Subscribe
                    </NavLink>
                  </li>
                  <li className="special-link">
                    <NavLink
                      exact
                      to="contact"
                      activeClassName="isActive"
                      onClick={() => setShowDotLinks(!showDotLinks)}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
          </li>
        </ul>
      </div>

      <div className="okiro__header__logo">
        <Link to="/">
          <img src={okiro} alt="okiro_logo" />
        </Link>
      </div>
      <div className="okiro__header__sign">
        <ul>
          <li>
            <FiSearch />
          </li>
          <li className="special-link">
            <NavLink
              exact
              to="/signin"
              activeClassName="isActive"
              onClick={() => setShowDotLinks(false)}
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <Link to="/signup">
              <CustomButton
                title="sign up"
                click={() => setShowDotLinks(false)}
              />
            </Link>
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
                <NavLink
                  exact
                  to="/"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Home
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/membership"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Membership
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/features"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Features
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/authors"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Authors
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/tags"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Tags
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  About
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Contact
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/subscribe"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Subscribe
                </NavLink>
              </li>
              <li className=" special-link">
                <NavLink
                  exact
                  to="/signin"
                  activeClassName="isActive"
                  onClick={() => setShowMenuLinks(!showMenuLinks)}
                >
                  Sign in
                </NavLink>
              </li>
              <li style={{ marginTop: 10 }}>
                <Link to="/signup">
                  <CustomButton
                    title="sign up"
                    click={() => setShowMenuLinks(!showMenuLinks)}
                    styles={{ padding: "0.5rem 0.7rem", borderRadius: "5px" }}
                  />
                </Link>
              </li>
            </ul>
            <div
              className="okiro__header__hamburger--linkDiv-search"
              onClick={() => setShowMenuLinks(!showMenuLinks)}
            >
              search <FiSearch />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
