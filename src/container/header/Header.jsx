import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import okiro from "../../assets/okiro.svg";

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
          <li>Sign up</li>
        </ul>
      </div>

      <div className="okiro__header__hamburger">
        <HiOutlineMenuAlt1
          fontSize={32}
          onClick={() => setShowMenuLinks(!showMenuLinks)}
        />

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
              <li>Sign up</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
