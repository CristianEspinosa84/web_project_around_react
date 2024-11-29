import Popup from "../Popup";

export default function EditAvatar(props) {
  const { title } = props;
  return (
    <form>
      <input
        type="url"
        class="form__input form__photo"
        placeholder="URL de la imagen"
        id="profile-photo-url"
        required
        name="avatar"
      />
      <span class="form__error profile-photo-url-error"></span>

      <button class="form__button" id="save-photo-button">
        Guardar
      </button>
    </form>
  );
}
