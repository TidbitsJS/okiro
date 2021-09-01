import React from "react";
import { Link } from "react-router-dom";

import "./seeAlso.css";

const SeeAlso = ({ name, url, link }) => {
  return (
    <div className="okiro__seealso">
      <h3>See Also</h3>
      <div className="okiro__seealso-div">
        <div className="okiro__seealso-div__img">
          <Link to={link + `/${name}`}>
            <img src={url} alt="see also author" />
          </Link>
        </div>
        <div className="okiro__seealso-div__name">
          <Link to={link + `/${name}`}>
            <p>{name}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeeAlso;
