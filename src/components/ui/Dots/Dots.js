import React from "react";
import "./Dots.css";

export default function Dots(props) {
  return (
    <span className={props.className} onClick={props.onClick}></span>
    // <div className="instagram-carousel-buttons-section">
    //   <div className="instagram-flex-buttons">
    //     <img className="instagram-carousel-left-button" src={arrow_left} />
    //     <div className="instagram-dots">
    //       <span className="instagram-active-dot"></span>
    //       <span className="instagram-dot-second"></span>
    //       <span className="instagram-dot-third"></span>
    //     </div>
    //     <img className="instagram-carousel-right-button" src={arrow_right} />
    //   </div>
    // </div>
  );
}
