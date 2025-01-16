import { useRef, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext); // Obtén la función del contexto
  const avatarRef = useRef(); // Crea un ref para el campo de entrada

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value, // Obtiene el valor del campo de entrada
    });

    avatarRef.current.value = ""; // Limpia el campo de entrada después de enviar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={avatarRef} // Usa el ref aquí
        type="url"
        className="form__input form__photo"
        placeholder="URL de la imagen"
        id="profile-photo-url"
        required
        name="avatar"
      />
      <span className="form__error profile-photo-url-error"></span>

      <button className="form__button" id="save-photo-button">
        Guardar
      </button>
    </form>
  );
}
