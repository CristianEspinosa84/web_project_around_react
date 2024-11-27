export default function NewCard(props) {
  const { title, children } = props;
  return (
    <form class="form__popup" id="addcard-form" autocomplete="off" novalidate>
      <h2 class="form__title">{title}</h2>
      <a href="#">
        <img src="#" alt="imageclose" class="form__close" id="addcard-close" />
      </a>

      <input
        type="text"
        class="form__name form__input"
        placeholder="Titulo"
        id="addcard-title"
        required
        minlength="2"
        maxlength="10"
        name="title"
      />
      <span class="form__error addcard-title-error"></span>

      <input
        type="url"
        class="form__about form__input"
        placeholder="Enlace a la imagen"
        id="addcard-url"
        required
        name="link"
      />
      <span class="form__error addcard-url-error"></span>

      <button class="form__button" id="addcard-button">
        crear
      </button>
    </form>
  );
}
