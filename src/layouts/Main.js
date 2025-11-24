import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import SideBar from '../components/SideBar';

const Main = ({ children, title, description, fullPage }) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Gavin J. Huang" defaultTitle="Gavin J. Huang">
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">{children}</div>
      {!fullPage && <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.node,
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Gavin Huang's personal website.",
};

export default Main;
