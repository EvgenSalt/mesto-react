import React from 'react';

function Login() {
  return (
    <form className="meet">
      <h2 className="meet__heder">Вход</h2>
      <input type="email" className="meet__input" placeholder="Email" required></input>
      <input type="password" className="meet__input" placeholder="Пароль" required></input>
      <button className="meet__btn">Войти</button>
    </form>
  )
}

export default Login;