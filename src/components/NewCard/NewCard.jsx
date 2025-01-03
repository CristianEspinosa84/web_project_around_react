import React from "react";
export default function NewCard(props) {
  const {} = props;
  return (
    <form>
      <input
        type="text"
        className="form__name form__input"
        placeholder="Titulo"
        id="addcard-title"
        required
        minLength="2"
        maxLength="10"
        name="title"
      />
      <span className="form__error addcard-title-error"></span>

      <input
        type="url"
        className="form__about form__input"
        placeholder="Enlace a la imagen"
        id="addcard-url"
        required
        name="link"
      />
      <span className="form__error addcard-url-error"></span>

      <button className="form__button" id="addcard-button">
        crear
      </button>
    </form>
  );
}
