import React from "react";
import "./OurServices.css";
import main_building from "./assets/building.png";

export default function OurServices() {
  return (
    <div className="our-services-main">
      <h3 className="our-services-title">Наши услуги</h3>
      <p className="our-services-text">
        Занимаемся вопросами женского и мужского репродуктивного здоровья,
        гинекологического здоровья детей. Работаем с семьями. Помогаем
        справиться с проблемами в одном месте за короткое время.{" "}
      </p>
      <img
        className="our-services-building-picture"
        src={main_building}
        alt="main-building"
      />
    </div>
  );
}
