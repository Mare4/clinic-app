import React from "react";
import "./DoctorInfo.css";
import doctor_photo from "./assets/doctor-info-picture-of-doctor.png";

export default function DoctorInfo() {
  return (
    <div className="doctor-info-main">
      <div className="doctor-info-flex-container">
        <p className="doctor-info-name">Буштырева Ирина</p>
        <p className="doctor-info-text">
          - Соучредитель "Клиники профессора Буштыревой",{" "}
          <span className="doctor-info-bold-text">
            доктор медицинских наук,
          </span>{" "}
          профессор
        </p>
        <p>
          - Заслуженный врач России{" "}
          <span className="doctor-info-bold-text">со стажем 36 лет</span>
          <br />-{" "}
          <span className="doctor-info-bold-text">Ведущий специалист</span>{" "}
          "Научного центра акушерства, гинекологии и перинатологии имени
          академика В.И. Кулакова" Минздрава России{" "}
        </p>
        <p>
          {" "}
          - <span className="doctor-info-bold-text">Обучалась в Италии</span> в
          Европейской школе перинатальной, неонатальной и репродуктивной
          медицины: PREIS SCHOOL и{" "}
          <span className="doctor-info-bold-text">в Лондоне</span> в Школе
          материнской, плодовой и неонатальной медицины в 2017 году
        </p>
      </div>
      <button className="doctor-info-button">Подробнее</button>
      <img
        className="doctor-info-photo-of-doctor"
        src={doctor_photo}
        alt="doctor_photo"
      />
    </div>
  );
}
