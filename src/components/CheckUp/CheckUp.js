import React from "react";
import "./CheckUp.css";
import Button from "../ui/Button/Button";

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
      <div className="check-up-button-mobile">
        <Button className="btn margin-check-up-desktop" label="Записаться" />
        <Button className="btn-transparent" label="Все чекапы" />
      </div>
    </div>
  );
}
