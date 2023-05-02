import React from "react";
import "./News.css";
import first_card_picture from "./assets/news-first-flex-card.png";
import second_card_picture from "./assets/news-second-card-picture.png";
import third_card_picture from "./assets/news-third-card-picture.png";
import arrow_picture from "./assets/news-arrow-picture.svg";
import button_left from "./assets/news-button-left.svg";
import button_right from "./assets/news-button-right.svg";

export default function News() {
  return (
    <div className="news-main">
      <div className="news-content">
        <div className="news-header">
          <h3 className="news-title">Новости и акции</h3>
          <button className="news-button">Смотреть все</button>
        </div>
        <div className="news-flex-cards-content">
          <div className="news-card">
            <img className="news-first-card-picture" src={first_card_picture} />
            <div className="news-card-text-content">
              <p className="news-date">29 ноября 2019</p>
              <p className="news-text">
                7-8 ноября состоится тренинг "Языки любви"
              </p>
            </div>
            <img className="news-arrow-picture" src={arrow_picture} />
          </div>
          <div className="news-card">
            <img
              className="news-first-card-picture"
              src={second_card_picture}
            />
            <div className="news-card-text-content">
              <p className="news-date">29 ноября 2019</p>
              <p className="news-text">
                Массовый сбор мужчин и женщин, которые готовы предъявить
                последствия эпидемии хочу рожать
              </p>
            </div>
            <img className="news-arrow-picture" src={arrow_picture} />
          </div>
          <div className="news-card">
            <img className="news-first-card-picture" src={third_card_picture} />
            <div className="news-card-text-content">
              <p className="news-date">29 ноября 2019</p>
              <p className="news-text">
                Естественные роды.
                <br /> Прямой эфир из родзала!
              </p>
            </div>
            <img className="news-arrow-picture" src={arrow_picture} />
          </div>
        </div>
      </div>
      <img className="news-button-left" src={button_left} />
      <span className="news-active-dot"></span>
      <span className="news-dot-second"></span>
      <span className="news-dot-third"></span>
      <img className="news-button-right" src={button_right} />
    </div>
  );
}
