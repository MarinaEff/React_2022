import React from 'react';
import './App.css';
import NameComponent from './NameComponent';

const App = () => (
  <div>
    <header className="page-header">
      <img className="page-header__logo" src="./logo.svg" alt="Купи самовар" width="152" />
      <nav className="page-header__menu">
        <ul className="mainmenu__list">
          <li className="mainmenu__item">
            <a href="#!">О НАС</a>
          </li>
          <li className="mainmenu__item">
            <a href="#!">САМОВАРЫ</a>
          </li>
          <li className="mainmenu__item">
            <a href="#!">ДОСТАВКА</a>
          </li>
          <li className="mainmenu__item">
            <a href="#!">КОНТАКТЫ</a>
          </li>
        </ul>
      </nav>
      <NameComponent firstName="Марина" lastName="Ефимова" />
    </header>
  </div>
);
export default App;
