import React from "react";
export default function ImagePopup({ card, onClose }) {
  return (
    <div className="form popup popup-closed" id="popup__image">
      <img className="popup__picture" src={card.link} alt={card.name} />
      <button
        aria-label="Close modal"
        className="popup__close"
        type="button"
        onClick={onClose}
      >
        <img
          src="../src/Images/CloseIcon.jpg"
          alt="imageclose"
          className="popup__close"
        />
      </button>
      <h3 className="popup__title"></h3>
    </div>
  );
}
