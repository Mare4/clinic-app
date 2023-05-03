import React from "react";
import "./Reviews.css";
import quotes_image from "./assets/reviews-quotes-image.svg";
import water_mark from "./assets/water-mark.svg";
import arrow_left from "./assets/news-button-left.svg";
import arrow_right from "./assets/news-button-right.svg";

export default function Reviews() {
  return (
    <div className="reviews-main">
      <img
        className="reviews-quotes-image"
        src={quotes_image}
        alt="quotes_image"
      />
      <div className="reviews-content">
        <p className="reviews-text">
          Благодаря таким докторам, как Ирина Олеговна, хочется верить в нашу
          медицину и в настоящих докторов, которым не все равно на пациента.
          Беременность была сложной, с неоднократным сохранением, но вместе с
          доктором мы все прошли, и на свет появился мой сыночек-богатырь
          (4050). Не так давно оперировалась. Все прошло хорошо, довольна очень,
          всегда и всем буду рекомендовать Ирину Олеговну. Дай бог ей здоровья.
        </p>
        <p className="reviews-owner-name">Анна П</p>
        <img className="reviews-water-mark" src={water_mark} alt="water_mark" />
      </div>
      <div className="instagram-carousel-buttons-section">
        <div className="instagram-flex-buttons">
          <img className="instagram-carousel-left-button" src={arrow_left} />
          <div className="instagram-dots">
            <span className="instagram-active-dot"></span>
            <span className="instagram-dot-second"></span>
            <span className="instagram-dot-third"></span>
          </div>
          <img className="instagram-carousel-right-button" src={arrow_right} />
        </div>
      </div>
    </div>
  );
}
