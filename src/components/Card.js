import React from "react";
import { useContext } from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike }) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `elements__like ${isLiked && 'elements__like_active'}`
  );;

  function handleCardClick() {
    onCardClick(card)
  }

  function handleCardLike() {
    onCardLike(card)
  }

  return (
    <li className="elements__item" >
      <button aria-label="like" className={`${isOwn ? 'elements__trash_active' : 'elements__trash'}`} value="clicked" type="button" ></button>
      <img src={card.link} alt="упс... фото нет" className="elements__img" onClick={handleCardClick} />
      <div className="elements__footer">
        <h2 className="elements__text">{card.name}</h2>
        <div className="elements__likes">
          <button aria-label="like" className={cardLikeButtonClassName} type="button" onClick={handleCardLike}></button>
          <span className="elements__like_count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;