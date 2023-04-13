import React from "react";
import "./CheckUp.css";

export default function CheckUp() {
  return (
    <div className="check-up-main">
      <h2 className="check-up-title">
        Гинекологический <br />
        <span className="check-up-title-bold">check-up</span>
      </h2>
      <p className="check-up-text">
        Всего за два часа{" "}
        <span className="check-up-text-bold">
          сделаем комплексное обследование,
        </span>{" "}
        чтобы убедиться, что в организме все в порядке. Приезжайте в любое
        время.
      </p>
      <p className="check-up-old-price">14 520 руб</p>
      <p className="check-up-new-price">9800 руб</p>
      <button className="check-up-button-enroll check-up-space-buttons">
        Записаться
      </button>
      <button className="check-up-button-see-all">Все чекапы</button>
    </div>
  );
}
