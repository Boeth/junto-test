import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Контроль расходов</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Список</NavLink>
    <NavLink to="/add" activeClassName="is-active">Создать расход</NavLink>
  </header>
);

export default Header;
