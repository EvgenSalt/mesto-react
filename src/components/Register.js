import React from 'react';

function Register() {
  return (
    <form className="meet">
      <h2 className="meet__heder">Регистрация</h2>
      <input type="email" className="meet__input" placeholder="Email" required></input>
      <input type="password" className="meet__input" placeholder="Пароль" required></input>
      <button className="meet__btn">Зарегистрироваться</button>
      <div className="meet__tologin">Уже зарегистрированы? Войти</div>
    </form>
  )
}

export default Register;