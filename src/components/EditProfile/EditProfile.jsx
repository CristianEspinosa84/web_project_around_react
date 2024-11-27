export default function EditProfile(props) {
  const { title, children } = props;
  return (
    <form class="form__popup" autocomplete="off" novalidate>
      <h2 class="form__title">{title}</h2>
      <a href="#">
        <img src="#" alt="imageclose" class="form__close" />
      </a>

      <input
        type="text"
        id="name"
        class="form__input form__name"
        required
        minlength="2"
        maxlength="40"
        name="name"
      />

      <span class="form__error name-error"></span>

      <input
        type="text"
        id="about"
        class="form__input form__about"
        required
        minlength="2"
        maxlength="40"
        name="about"
      />

      <span class="form__error about-error"></span>

      <button class="form__button" id="save">
        Guardar
      </button>
    </form>
  );
}
