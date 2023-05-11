import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-main">
      <div className="flex-block">
        <div className="about-us-blocks block-01">
          <div className="block-01-title-block">
            <div className="block-01-title-name">01</div>
            <div className="span-text-block-01">
              Не тратьте <br />
              время
            </div>
          </div>

          <div className="border_bottom"></div>
          <p className="blocks-text">
            В гинекологическое отделение клиники не придется часто ходить -
            <span className="bold-text">
              {" "}
              минимум посещений, анализов и обследований. Максимум пользы{" "}
            </span>
            для вашего здоровья и эмоционального спокойствия.
          </p>
        </div>
        <div className="about-us-blocks block-02">
          <div className="block-01-title-block">
            <div className="block-02-title-name">02</div>
            <div className="span-text-block-01">
              Персональный <br />
              подход
            </div>
          </div>

          <div className="border_bottom"></div>
          <p className="blocks-text">
            После первого приема связывайтесь с нами удобным способом -{" "}
            <span className="bold-text">даем личные номера специалистов,</span>{" "}
            чтобы всегда быть в курсе ваших дел. На официальном сайте женской
            клиники указаны соцсети специалистов.{" "}
          </p>
        </div>
        <div className="about-us-blocks">
          <div className="block-01-title-block">
            <div className="block-03-title-name">03</div>
            <div className="span-text-block-01">
              С нами <br />
              понятно
            </div>
          </div>

          <div className="border_bottom"></div>
          <p className="blocks-text">
            После визита не придется искать в интернете информацию о диагнозе
            или результатах исследования. Мы все{" "}
            <span className="bold-text">объясним понятным языком</span> и опишем{" "}
            <span className="bold-text">разборчивым почерком.</span> Вы будете
            уверенны и спокойны.
          </p>
        </div>
      </div>
      <button className="about-us-button">Связаться с нами</button>
    </div>
  );
}
