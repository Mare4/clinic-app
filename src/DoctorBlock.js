import React from "react";
import "./DoctorBlock.css";
import main_doctor from "./assets/main_doctor.png";
import little_shadow from "./assets/doctor-background-shadow-little.png";
import big_shadow from "./assets/doctor-background-shadow-big.png";

export default function DoctorBlock() {
  return (
    <div className="doctor-block">
      <div>
        <p className="doctor-name">Кузнецова Наталья Борисовна</p>
        <p className="doctor-position">Главный врач клиники-роддома</p>
        <h3 className="doctor-tagline">
          Вдохновляем на здоровье, <br />а не ограничиваем запретами
        </h3>
        <button className="doctor-button">Все специалисты</button>
      </div>
      <img className="little-shadow" src={little_shadow} alt="little-shadow" />
      <img className="big-shadow" src={big_shadow} alt="big-shadow" />
      <img
        className="doctor-main-picture"
        src={main_doctor}
        alt="main_doctor"
      />
    </div>
  );
}
