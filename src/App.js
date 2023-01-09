import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="'./images/logo.svg'" alt="логотип Место" className="logo" />
      </header>

      <section className="profile">
        <div className="profile__info">
          <img src="#" alt="Аватарка" className="profile__avatar" />
          <div className="profile__avatar-edit"></div>
          <h1 className="profile__name"></h1>
          <p className="profile__description"></p>
          <button aria-label="edit" className="profile__edit" value="clicked" type="button"></button>
        </div>
        <button aria-label="add" className="profile__add" value="clicked" type="button"></button>
      </section>

      <section className="elements">
        <ul className="elements__items"></ul>
      </section>

      <footer className="footer">
        <p className="footer__text">
          © 2022 Mesto Russia
        </p>
      </footer>

      <div className="popup popup_edit">
        <div className="popup__container">
          <button aria-label="close" className="popup__close popup__close_edit-form" type="button"></button>
          <form action="signin" method="post" name="profile-form" className="form form_edit" novalidate>
            <h3 className="form__title">
              Редактировать профиль
            </h3>

            <input type="text" name="username" placeholder="name" className="form__input form__input_text_name" value=""
              required minlength="2" maxlength="40" id="username" />
            <span className="form__msg" id="username-error">error</span>
            <input type="text" name="userwork" placeholder="work" className="form__input form__input_text_work" value=""
              required minlength="2" maxlength="200" id="userwork" />
            <span className="form__msg" id="userwork-error">error</span>
            <button aria-label="submit" className="form__btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__container">
          <button aria-label="close" className="popup__close popup__close_add-img" type="button"></button>
          <form action="signin" method="post" name="card-form" className="form form_add" novalidate>
            <h3 className="form__title">
              Новое место
            </h3>

            <input type="text" name="name_img" placeholder="Название" className="form__input form__input_text_name-img" value=""
              required minlength="2" maxlength="30" id="name-img" />
            <span className="form__msg" id="name-img-error">error</span>
            <input type="url" name="link_img" placeholder="Ссылка на картинку" className="form__input form__input_text_src-img"
              value="" required id="link-img" />
            <span className="form__msg" id="link-img-error">error</span>
            <button aria-label="submit" className="form__btn" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_show-img">
        <div className="popup__container">
          <button aria-label="close" className="popup__close popup__close_show-img" type="button"></button>
          <div className="popup__card">
            <img src="<%=require('./images/kirill-pershin-1088404-unsplash.jpg')%>" alt="Фото" className="popup__img" />
            <h3 className="popup__text">
              Карачаево-Черкессия
            </h3>
          </div>
        </div>
      </div>

      <div className="popup popup_edit-avatar">
        <div className="popup__container">
          <button aria-label="close" className="popup__close popup__close_edit-avatar" type="button"></button>
          <form action="signin" method="post" name="card-form" className="form form_avatar" novalidate>
            <h3 className="form__title">
              Обновить аватар
            </h3>
            <input type="url" name="link_img" placeholder="Ссылка на картинку" className="form__input form__input_text_src-img"
              value="" required id="link-avatar" />
            <span className="form__msg" id="link-avatar-error">error</span>
            <button aria-label="submit" className="form__btn" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_delet-img">
        <div className="popup__container">
          <button aria-label="close" className="popup__close popup__close_delet-img" type="button"></button>
          <form action="signin" method="post" name="card-form" className="form form_delet" novalidate>
            <h3 className="form__title">
              Вы уверены?
            </h3>
            <button aria-label="submit" className="form__btn" type="submit">Да</button>
          </form>
        </div>
      </div>

      <template className="template__card">
        <li className="elements__item">
          <button aria-label="like" className="elements__trash" value="clicked" type="button"></button>
          <img src="<%=require('./images/kirill-pershin-1088404-unsplash.jpg')%>" alt="упс... фото нет"
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

    </div>
  );
}

export default App;
