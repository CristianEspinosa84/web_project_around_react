import React, { useState, useEffect, useContext } from "react";
import avatar from "../../Images/JacquesCousteau.jpg";
import NewCard from "../NewCard/NewCard";
import Popup from "../Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import Card from "../Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";
import Api from "../../Utils/Api";
import { api } from "../../Utils/Api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main() {
  const currentUser = useContext(CurrentUserContext);
  const [popup, setPopup] = useState(null);
  const [popupImage, setImagePopup] = useState(null);
  const [cards, setCards] = useState([]);
  console.log(cards);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
    setImagePopup(null);
  }

  function handleOpenImagePopup(title, link) {
    setImagePopup({ title: title, link: link });
  }

  function handleCardDelete(card) {
    const cardId = card._id;
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((prevCards) => prevCards.filter((c) => c._id !== cardId));
      })
      .catch((err) => {
        console.error("Error al obtener la información del usuario:", err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.isLiked; // Verifica si la tarjeta ya tiene like

    // Decide si llamar a likeCard o dislikeCard
    const apiCall = isLiked
      ? api.dislikeCard(card._id)
      : api.likeCard(card._id);

    apiCall
      .then((newCard) => {
        // Actualiza el estado con la tarjeta actualizada
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) =>
        console.error("Error al cambiar el estado del like:", err)
      );
  }

  useEffect(() => {
    api
      .getInitialCards() // Llama al método de la instancia
      .then((fetchedCards) => {
        console.log("Tarjetas obtenidas:", fetchedCards);
        setCards(fetchedCards); // Actualiza el estado con los datos obtenidos
      })
      .catch((err) => {
        console.error("Error al obtener las tarjetas:", err); // Maneja errores
      });
  }, []); // Solo se ejecuta al montar el componente

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={avatar} alt="imageprofile" className="profile__image" />
        </div>
        <div className="profile__content">
          <div className="profile__user">
            <h2 className="profile__name">Jacques Cousteau</h2>
          </div>
          <p className="profile__about">Explorer</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          +
        </button>

        <button
          aria-label="Add card"
          className="profile__edit"
          type="button"
          onClick={() => handleOpenPopup(editProfilePopup)}
        >
          <img src="../src/Images/EditButton.jpg" alt="buttonprofile" />
        </button>
      </section>

      <button
        aria-label="Add card"
        className="profile__edit-icon"
        type="button"
        onClick={() => handleOpenPopup(editAvatarPopup)}
      ></button>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {popupImage && (
        <ImagePopup
          onClose={handleClosePopup}
          title={popupImage.title}
          link={popupImage.link}
        />
      )}

      <ul className="cards__list">
        {cards.map((card) => {
          const isLiked = card.likes.some(
            (like) => like._id === currentUser._id
          );

          return (
            <Card
              key={card._id}
              card={{ ...card, isLiked }}
              onCardLike={handleCardLike} // Pasa la función como prop
              onOpenImagePopup={handleOpenImagePopup}
              onCardDelete={handleCardDelete}
            />
          );
        })}
      </ul>
    </main>
  );
}
