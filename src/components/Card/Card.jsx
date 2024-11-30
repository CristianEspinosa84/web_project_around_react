import React from "react";

export default function Card({ card, onOpenImagePopup }) {
  const { name, link, isLiked } = card;

  const onCardClick = () => {
    onOpenImagePopup(name, link);
  };

  return (
    <li className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={onCardClick}
      />
      <div className="card__info">
        <button
          aria-label="Delete card"
          className="card__delete-button "
          type="button"
        ></button>
        <h2 className="card__title">{name}</h2>
        <div className="element__like-container">
          <button aria-label="Like card" type="button" className="card__like">
            {isLiked}
          </button>
        </div>
      </div>
    </li>
  );
}
