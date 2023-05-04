import React from "react";
import "./OurMotto.css";

export default function OurMotto() {
  return (
    <div className="our-motto-main">
      <h3 className="our-motto-header">Говорим о простых вещах </h3>
      <div className="our-motto-text-block">
        <p className="out-motto-text">
          Мы не творим волшебство, а усердно работаем, чтобы сделать жизнь семьи
          здоровой и качественной. Это задача обеих сторон.
          <p className="our-motto-second-paragraph">
            Наш приоритет - доверительные отношения, равноправие и партнерство.
            <p className="our-motto-last-paragraph">
              Для нас быть другом не менее важно, <br />
              чем профессионалом.
            </p>
          </p>
        </p>
      </div>
    </div>
  );
}
