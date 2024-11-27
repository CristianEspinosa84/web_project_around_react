import React, { useState } from "react";
import avatar from "../../Images/JacquesCousteau.jpg";
import editprofile from "../../Images/EditButton.jpg";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
function Main() {
  const [popud, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const EditProfilePopup = { title: "Nuevo lugar", children: <EditProfile /> };
  const EditAvatarPopup = { title: "Nuevo lugar", children: <EditAvatar /> };
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={avatar} alt="imageprofile" className="profile__image" />
          <div className="profile__edit-icon"></div>
          */Icono de edición en la foto de perfil*/
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
        <p className="profile__button">+</p>
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

export default Main;
