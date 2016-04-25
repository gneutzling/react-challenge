import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <img src="assets/img/logo.png" alt="React Challenge" />
          </h1>
          <Navigation />
        </div>
      </header>
    );
  }
}

export { Header as default };
