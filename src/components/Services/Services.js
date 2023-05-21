import React from "react";
import "./Services.css";
import services_image from "../../assets/services-image.png";
import left_button from "../../assets/button-left.svg";
import right_button from "../../assets/button-right.svg";

export default function Services() {
  return (
    <div className="services-main">
      <div className="services-content">
        <img
          className="services_image"
          src={services_image}
          alt="services_image"
        />
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
          <img className="ellipse-image-left" src={left_button} alt="ellipse" />

          <img
            className="ellipse-image-right"
            src={right_button}
            alt="ellipse"
          />
        </div>
      </div>
    </div>
  );
}
