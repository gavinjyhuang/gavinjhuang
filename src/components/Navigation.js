import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../data/routes';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="main" id="hamburger-nav">
        <ul>
          <li className="menu">
            <div onClick={() => setMenuOpen(!menuOpen)} className="menu-hover">
              {menuOpen ? '✕' : '☰'}
            </div>
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
