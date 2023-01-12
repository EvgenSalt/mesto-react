import React from 'react';
import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  userName,
  userDescription,
  userAvatar,
  cards }) {
  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <img src="#" alt="Аватарка" className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
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
              />
            ))
          }
        </ul>
      </section>


    </>
  );
}

export default Main;