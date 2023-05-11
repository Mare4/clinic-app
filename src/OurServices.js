import React from "react";
import "./OurServices.css";
import Button from "./components/ui/Button/Button";
import main_building from "./assets/building.png";
import heart from "./assets/our-services-heart-pictures.svg";
import scissor from "./assets/our-services-scissor-picture.svg";
import test_tube from "./assets/our-services-test-tube-picture.svg";
import doctor_male from "./assets/our-services-doctor-male-picture.svg";
import doctor_female from "./assets/our-services-doctor-female-picture.svg";
import gender_sign from "./assets/our-services-gender-sign-picture.svg";
import operation_table from "./assets/our-services-operation-table-picture.svg";
import drips from "./assets/our-services-drips-picture.svg";

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
      <div className="our-services-grid-content">
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={heart}
            alt="heart_picture"
          />
          <p className="our-services-grid-text">Гинекология</p>
        </div>
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={operation_table}
            alt="operation_table_picture"
          />
          <p className="our-services-grid-text">Хирургия</p>
        </div>
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={scissor}
            alt="scissor_picture"
          />
          <p className="our-services-grid-text">Интимная пластика</p>
        </div>
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={drips}
            alt="drips_picture"
          />
          <p className="our-services-grid-text">Педиатрия и неонатология</p>
        </div>
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={test_tube}
            alt="test_tube_picture"
          />
          <p className="our-services-grid-text">Эндокринология</p>
        </div>
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={gender_sign}
            alt="gender_sign_picture"
          />
          <p className="our-services-grid-text">Лечение бесплодия</p>
        </div>
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={doctor_male}
            alt="doctor_male_picture"
          />
          <p className="our-services-grid-text">Урология</p>
        </div>
        <div className="our-services-grid-container">
          <img
            className="our-services-grid-picture"
            src={doctor_female}
            alt="doctor_female_picture"
          />
          <p className="our-services-grid-text">Роды</p>
        </div>
      </div>
      <Button
        label="Все услуги" /*onClick={() => console.log("Все услуги")}*/
      />
    </div>
  );
}
