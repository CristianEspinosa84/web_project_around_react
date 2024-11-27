import React, { useState } from "react";
import avatar from "../../Images/JacquesCousteau.jpg";
import editprofile from "../../Images/EditButton.jpg";
import NewCard from "../NewCard/NewCard";
import Popup from "../Popup";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={avatar} alt="imageprofile" className="profile__image" />
          <div className="profile__edit-icon"></div>
        </div>
        <div className="profile__content">
          <div className="profile__user">
            <h2 className="profile__name">Jacques Cousteau</h2>
            <a>
              <img
                src={editprofile}
                alt="imageedit"
                className="profile__edit"
              />
            </a>
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
      </section>

      <div className="elements"></div>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
