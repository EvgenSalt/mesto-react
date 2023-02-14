import logo from '../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип Место" className="logo" />
      <div className="heder__menu">
        <Switch>
          <Route path="/" exact>
            <div className="heder__mail">aa@22.ru</div>
            <Link to='signin' className="heder__link">Выйти</Link>
          </Route>
          <Route path="/signup">
            <Link to='signin' className="heder__link">Войти</Link>
          </Route>
          <Route path="/signin">
            <Link to='signup' className="heder__link">Регистрация</Link>
          </Route>
        </Switch>
      </div>

    </header>
  );
}

export default Header;