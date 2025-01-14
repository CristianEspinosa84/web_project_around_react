import Popup from "../Popup/Popup";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useState, useRef } from "react";

export default function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  console.log("currentUser:", currentUser);
  console.log("handleUpdateUser:", handleUpdateUser);
  const [name, setName] = useState(currentUser?.name || ""); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser?.about || ""); // Agrega la variable de estado para description
  const { handleUpdateAvatar } = useContext(CurrentUserContext); // Obtiene la función del contexto
  const avatarRef = useRef(); // Crea un ref para el campo de entrada

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value, // Obtiene el valor del campo de entrada
    });

    avatarRef.current.value = ""; // Limpia el campo de entrada después de enviar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        className="form__input form__name"
        required
        minLength="2"
        maxLength="40"
        name="name"
        value={name}
        onChange={handleNameChange}
      />

      <span className="form__error name-error"></span>

      <input
        type="text"
        id="about"
        className="form__input form__about"
        required
        minLength="2"
        maxLength="40"
        name="about"
        value={description}
        onChange={handleDescriptionChange}
      />

      <span className="form__error about-error"></span>

      <button className="form__button" id="save" type="submit">
        Guardar
      </button>
    </form>
  );
}
