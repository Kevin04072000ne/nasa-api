import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/">Explorador Espacial de la NASA</NavLink>
      </div>
    </nav>
  );
};

export default Header;
