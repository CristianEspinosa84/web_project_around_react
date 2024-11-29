import React from "react";
export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <div className="form" id="popup">
      <div className="form__popup" autocomplete="off" novalidate>
        <h2 className="form__title">{title}</h2>
        <button
          type="button"
          aria-label="Close Modal"
          className="form__close"
          onClick={onClose}
        >
          <img
            src="../src/Images/CloseIcon.jpg"
            alt="iconClose"
            className="form__image_close"
          />
        </button>
        {children}
      </div>
    </div>
  );
}
