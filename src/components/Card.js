import React from "react";

function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card)
  }
  return (

    <li className="elements__item" onClick={handleCardClick}>
      <button aria-label="like" className="elements__trash" value="clicked" type="button"></button>
      <img src={card.link} alt="упс... фото нет" className="elements__img" />
      <div className="elements__footer">
        <h2 className="elements__text">{card.name}</h2>
        <div className="elements__likes">
          <button aria-label="like" className="elements__like" value="clicked" type="button"></button>
          <span className="elements__like_count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;