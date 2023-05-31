import React from "react";
import "./MainBlock.css";
import Button from "../ui/Button/Button";

export default function MainBlock() {
  return (
    <div className="main-block">
      <div className="main-block-desktop">
        <h3 className="main-text">Здесь люди заботятся о людях</h3>
        <h1>
          Клиника семейного <br /> здоровья
        </h1>
      </div>
      <div className="main-block-mobile">
        <h1 className="main-mobile-header">
          Клиника репродуктивного здоровья и родов
        </h1>
        <h3 className="main-mobile-text">Место, где рождается счастье </h3>
      </div>
      <Button className="btn center" label="Свяжитесь с нами" />
    </div>
  );
}
