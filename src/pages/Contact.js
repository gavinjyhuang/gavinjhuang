import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from '../layouts/Main';
import contactData from '../data/contact';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Gavin Huang via email @ gavinhuang2004@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <p>
          <a href="mailto:gavinhuang2004@gmail.com">gavinhuang2004@gmail.com</a>
        </p>
      </div>
      <ul className="icons">
        {contactData.map((s) => (
          <li key={s.label}>
            <a href={s.link} aria-label={s.label}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  </Main>
);

export default Contact;
