import React from "react";
import "./RightArrow.css";
import right_arrow from "../../../assets/button-right.svg";

export default function RightArrow(props) {
  return (
    <input
      type="image"
      src={right_arrow}
      className={props.className}
      onClick={props.onClick}
    ></input>
  );
}
