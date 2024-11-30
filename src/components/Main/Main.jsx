import React, { useState } from "react";
import avatar from "../../Images/JacquesCousteau.jpg";
import NewCard from "../NewCard/NewCard";
import Popup from "../Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import Card from "../Card/Card";
import ImagePopup from "../ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [popupImage, setImagePopup] = useState(null);

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
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onOpenImagePopup={handleOpenImagePopup}
          />
        ))}
      </ul>
    </main>
  );
}
