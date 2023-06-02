import React from "react";
import "./Button.css";
import { Media } from "react-media";

export default function Button(props) {
  return (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
