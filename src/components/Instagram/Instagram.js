import React from "react";
import "./Instagram.css";
import Dots from "../ui/Dots/Dots";
import first_photo from "../../assets/instagram-first-photo.png";
import second_photo from "../../assets/instagram-second-photo.png";
import third_photo from "../../assets/instagram-third-photo.png";

export default function Instagram() {
  return (
    <div className="instagram-main">
      <h3 className="instagram-header">Мы в Instagram</h3>
      <div className="instagram-carousel">
        <div className="instagram-photo-for-desktop">
          <img
            className="instagram-carousel-photo"
            src={first_photo}
            alt="first_photo"
          />
        </div>
        <img
          className="instagram-carousel-photo"
          src={second_photo}
          alt="second_photo"
        />
        <div className="instagram-photo-for-desktop">
          <img
            className="instagram-carousel-photo"
            src={third_photo}
            alt="third_photo"
          />
        </div>
      </div>
      <div className="instagram-dots-for-mobile">
        <Dots className="active-dot" />
        <Dots className="inactive-dot color-gray margin-18" />
        <Dots className="inactive-dot color-gray" />
      </div>
    </div>
  );
}
