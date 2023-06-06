import React from "react";
import "./ContactUs.css";
import Button from "../ui/Button/Button";
import location_logo from "../../assets/contact-us-location-logo.svg";
import phone_logo from "../../assets/contact-us-phone-logo.svg";
import mail_logo from "../../assets/contact-us-mail-logo.svg";
import date_logo from "../../assets/contact-us-date-logo.svg";
import whatsapp_logo from "../../assets/contact-us-whatsapp-logo.svg";
import vk_logo from "../../assets/vk-social-logotype.svg";
import instagram_logo from "../../assets/instagram-social-logotype.svg";
import facebook_logo from "../../assets/facebook-social-logotype.svg";

export default function ContactUs() {
  return (
    <div className="contact-us-main">
      <div className="contact-us-info-section">
        <h3 className="contact-us-header">Свяжитесь с нами</h3>
        <div className="contact-us-information-container">
          <div className="contact-us-information">
            <div className="contact-us-info-block">
              <img
                className="contact-us-location-logo"
                src={location_logo}
                alt="location_logo"
              />
              <p className="contact-us-info-text">
                г.Ростов-на-Дону,
                <br />
                пер.Соборный, 58/7
              </p>
            </div>

            <div className="contact-us-info-block">
              <img
                className="contact-us-phone-logo"
                src={phone_logo}
                alt="phone_logo"
              />
              <p className="contact-us-info-text">
                +7 (863) 288-0000
                <br /> +7 951 000 00 00
                <img
                  className="contact-us-whatsapp-logo"
                  src={whatsapp_logo}
                  alt="whatsapp_logo"
                />
              </p>
            </div>
            <div className="contact-us-info-block">
              <img
                className="contact-us-mail-logo"
                src={mail_logo}
                alt="mail_logo"
              />
              <p className="contact-us-info-text">info@bushtyreva-clinic.ru</p>
            </div>
            <div className="contact-us-info-block">
              <img
                className="contact-us-date-logo"
                src={date_logo}
                alt="date_logo"
              />
              <p className="contact-us-info-text">
                Поликлиника: с 8:00 до 20:00 ежедневно <br />
                Роддом: круглосуточно
              </p>
            </div>
            <div className="contact-us-social-links">
              <img
                className="contact-us-instagram-icon"
                src={instagram_logo}
                alt="instagram_logo"
              />
              <img
                className="contact-us-facebook-icon"
                src={facebook_logo}
                alt="facebook_logo"
              />
              <img className="contact-us-vk-icon" src={vk_logo} alt="vk_logo" />
            </div>
          </div>
          <div className="contact-us-input-main-block">
            <div className="contact-us-input-section">
              <input
                className="contact-us-input-text"
                name="person_name"
                type="text"
                placeholder="Ваше имя"
              />
              <input
                className="contact-us-input-text margin-input-for-mobile"
                name="person_phone_number"
                type="tel"
                placeholder="Тел. +7(000)000-00-00"
              />
              <div className="contact-us-agree-text-section">
                <input className="contact-us-input-button" type="checkbox" />
                <p className="contact-us-margin-text-from-checkbox">
                  Согласие на обработку{" "}
                  <span className="contact-us-underline-text">
                    персональных данных
                  </span>
                </p>
              </div>
            </div>
            <Button
              className="btn"
              label="Оставить заявку"
              // onClick={() => console.log("Оставить заявку")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
