import React from "react";
import "./MainBlock.css";
import Button from "./components/ui/Button/Button";

export default function MainBlock() {
  return (
    <div className="main-block">
      <h3>Здесь люди заботятся о людях</h3>
      <h1>
        Клиника семейного <br /> здоровья
      </h1>
      <Button className="btn center" label="Свяжитесь с нами" />
    </div>
  );
}
