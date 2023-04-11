import React from "react";
import "./Nav.css";
import logo from "./logo.png";
import search from "./search-logo.png";
import location from "./location-logo.svg";
import drop from "./drop.svg";

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" />

      <ul>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Услуги и цены</a>
        </li>
        <li>
          <a href="#">Специалисты</a>
        </li>
        <li>
          <a href="#">Информация</a>
        </li>
        <li>
          <a href="#">Вопросы</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>

      <img className="search-logo" src={search} />

      <div className="info">
        <p className="number">+7 (863) 288-0000</p>
        <span className="to-left">
          <p className="city">
            <img className="location-logo" src={location} />
            Ростов-на-дону
            <img className="drop-logo" src={drop} />
          </p>
        </span>
      </div>
    </nav>
  );
}
