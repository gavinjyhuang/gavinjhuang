import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactData from '../data/contact';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Gavin J. Huang</h2>
        <p>
          <a href="mailto:gavinhuang2004@gmail.com">gavinhuang2004@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&#39;m Gavin. I am a senior at Duke University and
        Duke Kunshan University, studying Mathematics and Computer Science.
        In my spare time, I enjoy building bikes, playing trumpet/piano,
        or playing volleyball or soccer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">Learn More</Link>
          ) : (
            <Link to="/about" className="button">About Me</Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {contactData.map((s) => (
          <li key={s.label}>
            <a href={s.link} aria-label={s.label}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Gavin J. Huang <Link to="/">gavinjhuang.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
