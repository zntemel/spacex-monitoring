import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1>SpaceX</h1>
        </div>
        <div className="menu">
          <Link className="menu-item" to="/launches">Launches</Link>
        </div>
      </div>
    );
  }
}

export default Header;
