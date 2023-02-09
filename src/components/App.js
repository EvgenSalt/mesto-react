import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserProfile()
      .then(res => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCard] = useState([]);

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Promise.all([api.getUserProfile(), api.getInitialCards()])
    // .then(([info, initialCards]) => {
    Promise.all([api.getInitialCards()])
      .then(([initialCards]) => {
        // setUserName(info.name);
        // setUserDescription(info.about);
        // setUserAvatar(info.avatar);
        setCard(initialCards);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          // userName={userName}
          // userDescription={userDescription}
          // userAvatar={userAvatar}
          cards={cards}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name={'avatar-edit'}
          title={'Обновить аватар'}
          children={
            <>
              <input type="url" name="link_img" placeholder="Ссылка на картинку" className="form__input form__input_text_src-img" defaultValue="" required id="link-avatar" />
              <span className="form__msg" id="link-avatar-error">error</span>
            </>}
          btnText={'Сохранить'}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name={'edit'}
          title={'Редактировать профиль'}
          children={
            <>
              <input type="text" name="username" placeholder="name" className="form__input form__input_text_name" defaultValue=""
                required minLength="2" maxLength="40" id="username" />
              <span className="form__msg" id="username-error">error</span>
              <input type="text" name="userwork" placeholder="work" className="form__input form__input_text_work" defaultValue=""
                required minLength="2" maxLength="200" id="userwork" />
              <span className="form__msg" id="userwork-error">error</span>
            </>}
          btnText={'Сохранить'}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name={'add'}
          title={'Новое место'}
          children={
            <>
              <input type="text" name="name_img" placeholder="Название" className="form__input form__input_text_name-img" defaultValue=""
                required minLength="2" maxLength="30" id="name-img" />
              <span className="form__msg" id="name-img-error">error</span>
              <input type="url" name="link_img" placeholder="Ссылка на картинку" className="form__input form__input_text_src-img"
                defaultValue="" required id="link-img" />
              <span className="form__msg" id="link-img-error">error</span>
            </>}
          btnText={'Создать'}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          isOpen={false}//TO DO
          name={'delet-img'}
          title={'Вы уверены?'}
          btnText={'Да'}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
