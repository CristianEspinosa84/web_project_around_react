import React, { useState, useEffect, useContext } from "react";
import NewCard from "../NewCard/NewCard";
import Popup from "../Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import Card from "../Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";
import { api } from "../../utils/Api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  cards,
  onOpenPopup,
  onClosePopup,
  popup,
  onOpenImagePopup,
  popupImage,
  handleUpdateAvatar,
  handleUpdateUser,
  handleCardLike,
  handleCardDelete,
  handleAddPlaceSubmit,
}) {
  console.log("Cards en Main:", cards);
  const currentUser = useContext(CurrentUserContext);
  console.log("currentUser en Main.jsx:", currentUser);
  // const [cards, setCards] = useState([]);
  const newCardPopup = () => {
    onOpenPopup({
      title: "Nuevo lugar",
      children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />, // Pasamos la función
    });
  };
  const editProfilePopup = {
    title: "Edit Profile",
    children: <EditProfile handleUpdateUser={handleUpdateUser} />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: (
      <EditAvatar
        onClose={onClosePopup}
        handleUpdateAvatar={handleUpdateAvatar} // Pasar como prop
      />
    ),
  };

  function handleOpenImagePopup(title, link) {
    onOpenImagePopup({ title, link });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={
              currentUser.currentUser?.avatar ||
              "../../Images/JacquesCousteau.jpg"
            }
            alt="imageprofile"
            className="profile__image"
          />

          <button
            aria-label="Add card"
            className="profile__edit-icon"
            type="submit"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></button>
        </div>
        <div className="profile__content">
          <div className="profile__user">
            <h2 className="profile__name">
              {currentUser.currentUser?.name || ""}
            </h2>
            <button
              aria-label="Add card"
              className="profile__edit"
              type="button"
              onClick={() => onOpenPopup(editProfilePopup)}
            >
              <img src="../src/Images/EditButton.jpg" alt="buttonprofile" />
            </button>
          </div>

          <p className="profile__about">
            {currentUser.currentUser?.about || ""}
          </p>
        </div>
        <button
          aria-label="Add card"
          className="profile__button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        >
          +
        </button>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {popupImage && (
        <ImagePopup
          onClose={onClosePopup}
          title={popupImage.title}
          link={popupImage.link}
        />
      )}

      <ul className="cards__list">
        {cards.map((card) => {
          const isLiked = card.likes.some(
            (like) => like._id === currentUser?.currentUser?._id
          );

          {
            popup && popup.title === "Nuevo lugar" && (
              <Popup onClose={onClosePopup} title={popup.title}>
                <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />{" "}
                {/* Pasar la función de agregar tarjeta */}
              </Popup>
            );
          }

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
