import React from "react";

export default function Card({
  card,
  onOpenImagePopup,
  onCardLike,
  onCardDelete,
}) {
  const { name, link, isLiked } = card;

  const onCardClick = () => {
    onOpenImagePopup(name, link);
  };

  const handleLikeClick = () => {
    onCardLike(card); // Llama a la función pasando la tarjeta
    console.log("Like button clicked for card:", card);
  };

  // Determinar la clase dinámica para el botón "like"
  const likeButtonClassName = `element__like ${
    isLiked ? "element__like-black" : ""
  }`;

  const handleDeleteClick = () => {
    onCardDelete(card);
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
          onClick={handleDeleteClick}
        ></button>
        <h2 className="card__title">{name}</h2>
        <div className="element__like-container">
          <button
            aria-label="Like card"
            type="button"
            className={likeButtonClassName}
            onClick={handleLikeClick}
          >
            {isLiked}
          </button>
        </div>
      </div>
    </li>
  );
}
