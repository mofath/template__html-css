import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../../assets/logo.png';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="" className="header__logo" />
        <div className="header__drop-menu">
          <span className="header__drop-menu__icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul className="header__drop-menu__links-list">
            <li className="header__drop-menu__links-list__link">
              <a href="#services">Services</a>
            </li>
            <li className="header__drop-menu__links-list__link">
              <a href="#portfolio">Pwortfolio</a>
            </li>
            <li className="header__drop-menu__links-list__link">
              <a href="#about">About</a>
            </li>
            <li className="header__drop-menu__links-list__link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
