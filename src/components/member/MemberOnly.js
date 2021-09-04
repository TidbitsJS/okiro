import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";

import "./memberOnly.css";

const MemberOnly = ({ color }) => {
  return (
    <div className="okiro__memberonly">
      <div className="okiro__memberonly_box" style={{ background: color }}>
        <div className="okiro__memberonly_text">
          <h1>This post is for paying subsribers only</h1>
          <p>
            Sign up now and upgrade your account to read the post and get access
            to the full library of posts for paying subsribers only.
          </p>
        </div>
        <CustomButton title="sign up now" />
        <div className="okiro__memberonly_box_para">
          <p>
            Already have an account?
            <span>
              <Link to="/signin">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberOnly;
