import React from 'react';


function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

  return (
    <>
      <section className="profile">
        <div className="profile__info">
          <img src="#" alt="Аватарка" className="profile__avatar" />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__description">Исследователь океана</p>
          <button aria-label="edit" className="profile__edit" value="clicked" type="button" onClick={onEditProfile}></button>
        </div>
        <button aria-label="add" className="profile__add" value="clicked" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__items"></ul>
      </section>

      <template className="template__card">
        <li className="elements__item">
          <button aria-label="like" className="elements__trash" value="clicked" type="button"></button>
          <img src="./images/kirill-pershin-1088404-unsplash.jpg" alt="упс... фото нет"
            className="elements__img" />
          <div className="elements__footer">
            <h2 className="elements__text"></h2>
            <div className="elements__likes">
              <button aria-label="like" className="elements__like" value="clicked" type="button"></button>
              <span className="elements__like_count"></span>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default Main;