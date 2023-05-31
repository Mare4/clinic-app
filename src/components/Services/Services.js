import React from "react";
import "./Services.css";
import services_image from "../../assets/services-image.png";
import Dots from "../ui/Dots/Dots";
import LeftArrow from "../ui/LeftArrow/LeftArrow";
import RightArrow from "../ui/RightArrow/RightArrow";

export default function Services() {
  return (
    <div className="services-main">
      <div className="services-content">
        <img
          className="services_image"
          src={services_image}
          alt="services_image"
        />
        <div className="dots-buttons-container">
          <Dots className="active-dot" />
          <Dots className="inactive-dot color-gray margin-12" />
          <Dots className="inactive-dot color-gray" />
        </div>
      </div>
      <div className="services_text">
        <h2>Услуги по репродуктивному здоровью семьи</h2>
        <p>
          Делаем <span className="bold-text">быстрые обследования</span> для
          <span className="bold-text"> женщин, мужчин и детей, </span>
          малоинвазивные процедуры, эндокринологические и ультразвуковые
          исследования, скриннинги -
          <span className="bold-text"> весь спектр услуг</span> для здоровья и
          хорошего самочувствия.
        </p>
        <div className="arrow-button-container">
          <LeftArrow className="services-margin-button-arrow" />
          <RightArrow />
        </div>
      </div>
    </div>
  );
}
