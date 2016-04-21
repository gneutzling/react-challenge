import React, { Component, PropTypes } from 'react';
import Header from './Header';
import News from './News';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <News />
      </div>
    );

  }
}

export { Main as default };
