import React from "react";
import "./LeftArrow.css";
import left_arrow from "../../../assets/button-left.svg";

export default function LeftArrow(props) {
  return (
    <input
      type="image"
      src={left_arrow}
      className={props.className}
      onClick={props.onClick}
    ></input>
  );
}
