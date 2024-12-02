import Popup from "../Popup/Popup";

export default function EditAvatar(props) {
  const { title } = props;
  return (
    <form>
      <input
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
