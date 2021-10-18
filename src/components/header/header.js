import "./header.css";
import UserMenu from "./UserMenu/UserMenu";

const Header = (props) => {
  return (
    <header className="header container">
      <img
        className="header__logo"
        src="https://codesrc.ru/static/img/logo.png"
        alt="Лого"
      />
      <UserMenu {...props} />
    </header>
  );
};

export default Header;
