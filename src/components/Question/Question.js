import React from "react";
import "./Question.css";
import Button from "../ui/Button/Button";
import close_button from "../../assets/question-close-button.svg";
import drop_button from "../../assets/question-drop-button.svg";

export default function Question() {
  return (
    <div className="question-main">
      <h3 className="question-header">Ваши вопросы</h3>
      <div className="question-first-card">
        <button className="question-close-button">
          <img className="question-close-button-image" src={close_button} />
        </button>
        <span className="question-yellow-mark"></span>
        <p className="name-of-question">
          Возможно ли вылечить хронический уретрит?
        </p>
        <p className="answer-of-question">
          Показаны эффективность и безопасность комбинации этиотропного
          препарата (азитромицин) с лактулозой, у пациенток с уретритом,
          ассоциированным с внутриклеточными инфекциями.{" "}
        </p>
      </div>
      <div className="inactive-question">
        <p className="name-of-question">
          Какие анализы нужно сдать во время беременности?
        </p>
        <button className="question-drop-button">
          <img className="question-drop-button-image" src={drop_button} />
        </button>
      </div>
      <div className="inactive-question">
        <p className="name-of-question">
          Может ли подниматься температура из-за приема ОК?
        </p>
        <button className="question-drop-button">
          <img className="question-drop-button-image" src={drop_button} />
        </button>
      </div>
      <div className="inactive-question">
        <p className="name-of-question">
          Подскажите стоимость акушерского чекапа?
        </p>
        <button className="question-drop-button">
          <img className="question-drop-button-image" src={drop_button} />
        </button>
      </div>
      <div className="inactive-question margin-for-last-question">
        <p className="name-of-question">
          Может ли прием антибиотиков спровоцировать цистит?
        </p>
        <button className="question-drop-button">
          <img className="question-drop-button-image" src={drop_button} />
        </button>
      </div>
      <Button className="btn-transparent center" label="Все вопросы" />
    </div>
  );
}
