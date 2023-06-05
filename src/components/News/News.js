import React from "react";
import "./News.css";
import first_card_picture from "../../assets/news-first-flex-card.png";
import second_card_picture from "../../assets/news-second-card-picture.png";
import third_card_picture from "../../assets/news-third-card-picture.png";
import arrow_picture from "../../assets/news-arrow-picture.svg";
import Button from "../ui/Button/Button";
import Dots from "../ui/Dots/Dots";
import LeftArrow from "../ui/LeftArrow/LeftArrow";
import RightArrow from "../ui/RightArrow/RightArrow";

export default function News() {
  return (
    <div className="news-main">
      <div className="news-content">
        <div className="news-header">
          <h3 className="news-title">Новости и акции</h3>
          <Button className="btn-transparent" label="Смотреть все" />
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
          <div className="desktop-card">
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
          </div>
          <div className="desktop-card">
            <div className="news-card">
              <img
                className="news-first-card-picture"
                src={third_card_picture}
              />
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
      </div>
      <div className="news-buttons-section-main">
        <div className="news-buttons-section">
          <div className="button-arrow">
            <LeftArrow />
          </div>
          <div>
            <Dots className="active-dot" />
            <Dots className="inactive-dot color-black margin-18" />
            <Dots className="inactive-dot color-black" />
          </div>
          <div className="button-arrow">
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
}
