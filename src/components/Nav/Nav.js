import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search-logo.png";
import location from "../../assets/location-logo.svg";
import drop from "../../assets/drop.svg";

export default function Nav() {
  return (
    <nav>
      <div class="burger-menu">
        <a href="" class="burger-menu_button">
          <span class="burger-menu_lines"></span>
        </a>
        <nav class="burger-menu_nav">
          <a href="#" class="burger-menu_link">
            О нас
          </a>
          <a href="#" class="burger-menu_link">
            Услуги и цены
          </a>
          <a href="#" class="burger-menu_link">
            Специалисты
          </a>
          <a href="#" class="burger-menu_link">
            Информация
          </a>
          <a href="#" class="burger-menu_link">
            Вопросы
          </a>
          <a href="#" class="burger-menu_link">
            Контакты
          </a>
        </nav>
        <div class="burger-menu_overlay"></div>
      </div>
      <div className="nav-desktop">
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
      </div>
    </nav>
  );
}
