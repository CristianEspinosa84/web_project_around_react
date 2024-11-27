import React from "react";
export default function Popup(props) {
  const { title, children } = props;
  return (
    <div class="form closed-window" id="popup">
      <form class="form__popup" autocomplete="off" novalidate>
        <h2 class="form__title">{title}</h2>
        <button
          type="button"
          aria-label="Close Modal"
          className="form__close"
        ></button>
        {children}
      </form>
    </div>
  );
}
