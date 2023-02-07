import React from "react";
import "./StyledHeader.css";

function StyledHeader(props) {
  return <h1 className="StyledHeader">{props.text}</h1>;
}

export default StyledHeader;
