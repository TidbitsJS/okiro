import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import okiro from "../../assets/okiro.svg";

import "./header.css";

const Header = () => {
  return (
    <div className="okiro__header">
      <div className="okiro__header__links">
        <ul>
          <li>Home</li>
          <li>Membership</li>
          <li>Features</li>
          <li>
            <BsThreeDots />
          </li>
        </ul>
      </div>
      <div className="okiro__header__logo">
        <img src={okiro} alt="okiro_logo" />
      </div>
      <div className="okiro__header__sign">
        <ul>
          <li>
            <FiSearch />
          </li>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
