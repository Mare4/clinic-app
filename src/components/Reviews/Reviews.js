import React from "react";
import "./Reviews.css";
import quotes_image from "../../assets/reviews-quotes-image.svg";
import water_mark from "../../assets/water-mark.svg";
import Dots from "../ui/Dots/Dots";

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
      <div className="reviews-dots-for-mobile">
        <Dots className="active-dot" />
        <Dots className="inactive-dot color-black margin-18" />
        <Dots className="inactive-dot color-black" />
      </div>
    </div>
  );
}
