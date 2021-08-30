import React from "react";

import "./infoCard.css";

const InfoCard = (props) => {
  return (
    <div
      className="okiro__infocard"
      style={{ backgroundImage: `url(${props.imgLink})` }}
    >
      {props.children}
    </div>
  );
};

export default InfoCard;
