import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  function onEditAvatar() {
    setEditAvatarPopupOpen(true);
  };

  function onEditProfile() {
    setEditProfilePopupOpen(true);
  };

  function onAddPlace() {
    setAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} />
      <Footer />
      <ImagePopup />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name={'avatar-edit'}
        title={'Обновить аватар'}
        children={
          <>
            <input type="url" name="link_img" placeholder="Ссылка на картинку" class="form__input form__input_text_src-img" value="" required id="link-avatar" />
            <span class="form__msg" id="link-avatar-error">error</span>
            <button aria-label="submit" class="form__btn" type="submit">Сохранить</button>
          </>}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name={'edit'}
        title={'Редактировать профиль'}
        children={
          <>
            <input type="text" name="username" placeholder="name" class="form__input form__input_text_name" value=""
              required minlength="2" maxlength="40" id="username" />
            <span class="form__msg" id="username-error">error</span>
            <input type="text" name="userwork" placeholder="work" class="form__input form__input_text_work" value=""
              required minlength="2" maxlength="200" id="userwork" />
            <span class="form__msg" id="userwork-error">error</span>
            <button aria-label="submit" class="form__btn" type="submit">Сохранить</button>
          </>}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name={'add'}
        title={'Новое место'}
        children={
          <>
            <input type="text" name="name_img" placeholder="Название" class="form__input form__input_text_name-img" value=""
              required minlength="2" maxlength="30" id="name-img" />
            <span class="form__msg" id="name-img-error">error</span>
            <input type="url" name="link_img" placeholder="Ссылка на картинку" class="form__input form__input_text_src-img"
              value="" required id="link-img" />
            <span class="form__msg" id="link-img-error">error</span>
            <button aria-label="submit" class="form__btn" type="submit">Создать</button>
          </>}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        isOpen={false}//TO DO
        name={'delet-img'}
        title={'Вы уверены?'}
        children={
          <>
            <button aria-label="submit" class="form__btn" type="submit">Да</button>
          </>}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
