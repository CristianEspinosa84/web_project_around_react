import React from "react";

export default function Card({ card }) {
  const { name, link, isLiked } = card;
  return (
    <li className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={() => onCardClick(card)}
      />
      <div class="card__info">
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
