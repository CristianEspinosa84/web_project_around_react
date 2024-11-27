import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import "../src/Pages/index.css";

function App() {
  return (
    <>
      <div class="page">
        <div class="form closed-window" id="profile__popup">
          <form class="form__popup" autocomplete="off" novalidate>
            <h2 class="form__title">Edit profile</h2>
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
        </div>

        <div class="form closed-window" id="addcard-popud">
          <form
            class="form__popup"
            id="addcard-form"
            autocomplete="off"
            novalidate
          >
            <h2 class="form__title">Nuevo Lugar</h2>
            <a href="#">
              <img
                src="#"
                alt="imageclose"
                class="form__close"
                id="addcard-close"
              />
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
        </div>

        <div class="form popup popup-closed" id="popup__image">
          <img src="#" alt="imageclose" class="popup__close" />
          <img class="popup__picture" src="#" alt="#" />
          <h3 class="popup__title"></h3>
        </div>

        <div class="form closed-window" id="popup__confirmation">
          <div class="confirmation__popup form__popup">
            <h2 class="form__title">¿Estás seguro/a?</h2>
            <a href="#">
              <img src="#" alt="imageclose" class="confirmation__close" />
            </a>
            <button class="confirmation__button" id="confirmation-button">
              Si
            </button>
          </div>
        </div>

        <div class="form closed-window" id="popup__edit-photo">
          <form class="edit__popup form__popup" autocomplete="off" novalidate>
            <h2 class="form__title">Cambiar foto de perfil</h2>
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
        </div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
