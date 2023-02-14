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
            <Link to='sign-in' className="heder__link">Выйти</Link>
          </Route>
          <Route path="/sign-up">
            <Link to='sign-in' className="heder__link">Войти</Link>
          </Route>
          <Route path="/sign-in">
            <Link to='sign-up' className="heder__link">Регистрация</Link>
          </Route>
        </Switch>
      </div>

    </header>
  );
}

export default Header;