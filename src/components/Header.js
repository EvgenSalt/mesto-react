import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип Место" className="logo" />
      <div className="heder__menu">
        <div className="heder__mail">aa@22.ru</div>
        <div className="heder__link">Выйти</div>
      </div>

    </header>
  );
}

export default Header;