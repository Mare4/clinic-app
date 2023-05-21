import React from "react";
import "./Instagram.css";
import first_photo from "../../assets/instagram-first-photo.png";
import second_photo from "../../assets/instagram-second-photo.png";
import third_photo from "../../assets/instagram-third-photo.png";
import arrow_left from "../../assets/news-button-left.svg";
import arrow_right from "../../assets/news-button-right.svg";

export default function Instagram() {
  return (
    <div className="instagram-main">
      <h3 className="instagram-header">Мы в Instagram</h3>
      <div className="instagram-carousel">
        <img
          className="instagram-carousel-photo"
          src={first_photo}
          alt="first_photo"
        />
        <img
          className="instagram-carousel-photo"
          src={second_photo}
          alt="second_photo"
        />
        <img
          className="instagram-carousel-photo"
          src={third_photo}
          alt="third_photo"
        />
      </div>
      <div className="instagram-carousel-buttons-section">
        <div className="instagram-flex-buttons">
          <img className="instagram-carousel-left-button" src={arrow_left} />
          <div className="instagram-dots">
            <span className="instagram-active-dot"></span>
            <span className="instagram-dot-second"></span>
            <span className="instagram-dot-third"></span>
          </div>
          <img className="instagram-carousel-right-button" src={arrow_right} />
        </div>
      </div>
    </div>
  );
}
