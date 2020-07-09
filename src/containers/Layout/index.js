import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './style.scss';

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element
};

