import React from "react";
import "./Footer.css";
import footer_logo from "./assets/footer-logo.png";
import partner_logo from "./assets/partner-logo.png";
import eye_image from "./assets/footer-eye-image.svg";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-content">
        <img className="footer-logo" src={footer_logo} alt="footer_logo" />
        <div className="footer-rules-section">
          <div className="footer-version-for-the-visually-impaired-section">
            <a>
              <img
                className="footer-eye-image"
                src={eye_image}
                alt="eye_image"
              />
            </a>
            <a>
              <h4 className="footer-version-for-the-visually-impaired-button">
                Версия для слабовидящих
              </h4>
            </a>
          </div>
          <a>
            <p className="footer-rules-links">Политика конфиденциальности</p>
            <p className="footer-rules-links">
              Согласие на обработку персональных данных
            </p>
          </a>
        </div>
        <div className="footer-partner-section">
          <img className="partner-logo" src={partner_logo} alt="partner_logo" />
          <p className="footer-partner-text-section">
            Разработка <br /> и продвижение сайта
          </p>
        </div>
      </div>
    </div>
  );
}
