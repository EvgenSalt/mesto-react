import React from 'react';
import { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  // userName,
  // userDescription,
  // userAvatar,
  cards,
  onCardClick,
  onCardLike }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <img src={currentUser.avatar} alt="Аватарка" className="profile__avatar" />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button aria-label="edit" className="profile__edit" value="clicked" type="button" onClick={onEditProfile}></button>
        </div>
        <button aria-label="add" className="profile__add" value="clicked" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__items">
          {
            cards.map(card => (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
            ))
          }
        </ul>
      </section>


    </>
  );
}

export default Main;