import React from "react";
import "./Nav.css";
import logo from "./assets/logo.svg";
import search from "./assets/search-logo.png";
import location from "./assets/location-logo.svg";
import drop from "./assets/drop.svg";

export default function Nav() {
  return (
    <nav>
      <img className="nav-logo" src={logo} alt="logo" />

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
      <img className="nav-search-logo" src={search} />
      <div className="info">
        <p className="nav-phone-number">+7 (863) 288-0000</p>
        <span className="to-left">
          <p className="nav-city">
            <img className="nav-location-logo" src={location} />
            Ростов-на-дону
            <img className="nav-drop-logo" src={drop} />
          </p>
        </span>
      </div>
    </nav>
  );
}
