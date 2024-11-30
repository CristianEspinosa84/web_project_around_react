import React from "react";
export default function ImagePopup({ onClose, title, link }) {
  return (
    <div className="form popup" id="popup__image">
      <button
        aria-label="Close modal"
        className="popup__close"
        type="button"
        onClick={onClose}
      >
        <img
          src="../src/Images/CloseIcon.jpg"
          alt="imageclose"
          className="popup__close-image"
        />
      </button>
      <img className="popup__picture" src={link} alt={title} />

      <h3 className="popup__title">{title}</h3>
    </div>
  );
}
