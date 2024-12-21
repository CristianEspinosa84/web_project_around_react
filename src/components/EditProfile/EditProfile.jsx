import Popup from "../Popup/Popup";

export default function EditProfile(props) {
  const {} = props;
  return (
    <form>
      <input
        type="text"
        id="name"
        className="form__input form__name"
        required
        minLength="2"
        maxL1ength="40"
        name="name"
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
      />

      <span className="form__error about-error"></span>

      <button className="form__button" id="save">
        Guardar
      </button>
    </form>
  );
}
