import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button className="btn" type="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
