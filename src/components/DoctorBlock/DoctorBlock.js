import React from "react";
import "./DoctorBlock.css";
import main_doctor from "../../assets/main_doctor.png";
import shadow_for_photo from "../../assets/doctor-background-shadow.png";
import Button from "../ui/Button/Button";

export default function DoctorBlock() {
  return (
    <div className="doctor-block">
      <div className="doctor-block-text">
        <p className="doctor-name">
          Кузнецова Наталья{" "}
          <span className="doctor-name-hidden-for-mobile">Борисовна</span>
        </p>
        <p className="doctor-position">Главный врач клиники-роддома</p>
        <h3 className="doctor-tagline">
          Вдохновляем на здоровье, <br />а не ограничиваем запретами
        </h3>
        <Button
          className="btn-transparent btn-color-white"
          label="Все специалисты"
        />
      </div>
      <div className="doctor-block-photo">
        <img
          className="shadow_for_photo"
          src={shadow_for_photo}
          alt="shadow_for_photo"
        />
        <img
          className="doctor-main-picture"
          src={main_doctor}
          alt="main_doctor"
        />
      </div>
    </div>
  );
}
