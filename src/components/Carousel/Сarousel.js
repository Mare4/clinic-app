import React from "react";
import "./Carousel.css";
import first_picture from "../../assets/carousel-first-picture.png";
import second_picture from "../../assets/carousel-second-picture.png";
import third_picture from "../../assets/carousel-third-picture.png";
import play_button_background from "../../assets/carousel-play-button-background.svg";
import play_button from "../../assets/carousel-play-button.svg";
import LeftArrow from "../ui/LeftArrow/LeftArrow";
import RightArrow from "../ui/RightArrow/RightArrow";
import Dots from "../ui/Dots/Dots";

export default function Carousel() {
  return (
    <div className="carousel-main">
      <div className="carousel-content">
        <h3 className="carousel-header">Самое важное в жизни</h3>
        <p className="carousel-header-text">Ваши бесценные воспоминания</p>
        <div className="carousel-flex-pictures">
          <img className="carousel-picture" src={first_picture} />
          <img className="carousel-middle-picture" src={second_picture} />
          <img className="carousel-picture" src={third_picture} />
        </div>
        <img
          className="carousel-play-button-background"
          src={play_button_background}
        />
        <img className="carousel-play-button" src={play_button} />
        <div className="carousel-buttons-section-main">
          <div className="carousel-buttons-section">
            <div className="button-arrow">
              <LeftArrow />
            </div>
            <div>
              <Dots className="active-dot" />
              <Dots className="inactive-dot color-white margin-18" />
              <Dots className="inactive-dot color-white" />
            </div>
            <div className="button-arrow">
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
