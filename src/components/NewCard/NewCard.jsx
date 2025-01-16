import React from "react";
import { useState } from "react";
export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  // Controladores para actualizar los valores de entrada
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un objeto con los datos de la nueva tarjeta
    const newCardData = { name, link };
    // Llamar a la función del padre para agregar la tarjeta
    onAddPlaceSubmit(newCardData);
    // Limpiar los campos del formulario
    setName("");
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__name form__input"
        placeholder="Titulo"
        id="addcard-title"
        required
        minLength="2"
        maxLength="10"
        name="title"
        value={name}
        onChange={handleNameChange}
      />
      <span className="form__error addcard-title-error"></span>

      <input
        type="url"
        className="form__about form__input"
        placeholder="Enlace a la imagen"
        id="addcard-url"
        required
        name="link"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="form__error addcard-url-error"></span>

      <button className="form__button" id="addcard-button" type="submit">
        crear
      </button>
    </form>
  );
}
