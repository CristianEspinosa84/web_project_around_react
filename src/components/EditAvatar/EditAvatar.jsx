export default function EditAvatar(props) {
  const { title, children } = props;
  return (
    <form class="edit__popup form__popup" autocomplete="off" novalidate>
      <h2 class="form__title">{title}</h2>
      <a href="#">
        <img
          src="#"
          alt="Cerrar
        ventana"
          class="form__close"
        />
      </a>

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
