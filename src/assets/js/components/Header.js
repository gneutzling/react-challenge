import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation';
import Media from './Media';

class Header extends React.Component {
  render() {
    let imageLogo = {
      normal: 'logo.png',
      retina: 'logo@2x.png'
    };

    return (
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <Media source={imageLogo} />
          </h1>
          <Navigation />
        </div>
      </header>
    );
  }
}

export { Header as default };
