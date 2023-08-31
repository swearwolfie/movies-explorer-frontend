import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, isSuccess, message }) {
  return (
    <div className={`info-tool ${isOpen ? "info-tool_opened" : ""}`}>
      <div className="info-tool__container">
        <div className="info-tool__close-icon" onClick={onClose} type="button" aria-label="закрыть"></div>
        <div className="info-tool__button info-tool__button_cross" ></div>
        <h3 className="info-tool__title">{message.text}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;


// "Вы успешно зарегистрировались!"
// "Что-то пошло не так! Попробуйте еще раз."

/*
{isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."}
*/