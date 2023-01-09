import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="'./images/logo.svg'" alt="логотип Место" className="logo" />
      </header>

      <section class="profile">
        <div class="profile__info">
          <img src="#" alt="Аватарка" class="profile__avatar" />
          <div class="profile__avatar-edit"></div>
          <h1 class="profile__name"></h1>
          <p class="profile__description"></p>
          <button aria-label="edit" class="profile__edit" value="clicked" type="button"></button>
        </div>
        <button aria-label="add" class="profile__add" value="clicked" type="button"></button>
      </section>

      <section class="elements">
        <ul class="elements__items"></ul>
      </section>

      <footer class="footer">
        <p class="footer__text">
          © 2022 Mesto Russia
        </p>
      </footer>

      <div class="popup popup_edit">
        <div class="popup__container">
          <button aria-label="close" class="popup__close popup__close_edit-form" type="button"></button>
          <form action="signin" method="post" name="profile-form" class="form form_edit" novalidate>
            <h3 class="form__title">
              Редактировать профиль
            </h3>

            <input type="text" name="username" placeholder="name" class="form__input form__input_text_name" value=""
              required minlength="2" maxlength="40" id="username" />
            <span class="form__msg" id="username-error">error</span>
            <input type="text" name="userwork" placeholder="work" class="form__input form__input_text_work" value=""
              required minlength="2" maxlength="200" id="userwork" />
            <span class="form__msg" id="userwork-error">error</span>
            <button aria-label="submit" class="form__btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div class="popup popup_add">
        <div class="popup__container">
          <button aria-label="close" class="popup__close popup__close_add-img" type="button"></button>
          <form action="signin" method="post" name="card-form" class="form form_add" novalidate>
            <h3 class="form__title">
              Новое место
            </h3>

            <input type="text" name="name_img" placeholder="Название" class="form__input form__input_text_name-img" value=""
              required minlength="2" maxlength="30" id="name-img" />
            <span class="form__msg" id="name-img-error">error</span>
            <input type="url" name="link_img" placeholder="Ссылка на картинку" class="form__input form__input_text_src-img"
              value="" required id="link-img" />
            <span class="form__msg" id="link-img-error">error</span>
            <button aria-label="submit" class="form__btn" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div class="popup popup_show-img">
        <div class="popup__container">
          <button aria-label="close" class="popup__close popup__close_show-img" type="button"></button>
          <div class="popup__card">
            <img src="<%=require('./images/kirill-pershin-1088404-unsplash.jpg')%>" alt="Фото" class="popup__img" />
            <h3 class="popup__text">
              Карачаево-Черкессия
            </h3>
          </div>
        </div>
      </div>

      <div class="popup popup_edit-avatar">
        <div class="popup__container">
          <button aria-label="close" class="popup__close popup__close_edit-avatar" type="button"></button>
          <form action="signin" method="post" name="card-form" class="form form_avatar" novalidate>
            <h3 class="form__title">
              Обновить аватар
            </h3>
            <input type="url" name="link_img" placeholder="Ссылка на картинку" class="form__input form__input_text_src-img"
              value="" required id="link-avatar" />
            <span class="form__msg" id="link-avatar-error">error</span>
            <button aria-label="submit" class="form__btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div class="popup popup_delet-img">
        <div class="popup__container">
          <button aria-label="close" class="popup__close popup__close_delet-img" type="button"></button>
          <form action="signin" method="post" name="card-form" class="form form_delet" novalidate>
            <h3 class="form__title">
              Вы уверены?
            </h3>
            <button aria-label="submit" class="form__btn" type="submit">Да</button>
          </form>
        </div>
      </div>

      <template class="template__card">
        <li class="elements__item">
          <button aria-label="like" class="elements__trash" value="clicked" type="button"></button>
          <img src="<%=require('./images/kirill-pershin-1088404-unsplash.jpg')%>" alt="упс... фото нет"
            class="elements__img" />
          <div class="elements__footer">
            <h2 class="elements__text"></h2>
            <div class="elements__likes">
              <button aria-label="like" class="elements__like" value="clicked" type="button"></button>
              <span class="elements__like_count"></span>
            </div>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;
