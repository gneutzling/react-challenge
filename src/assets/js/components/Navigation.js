import React, { Component, PropTypes } from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleMenu() {
    let isActive = this.state.isActive;

    this.setState({
      isActive: !isActive
    });
  }

  render() {

    let isActive = this.state.isActive ? 'is-active' : '';

    return (
      <nav className="main-navigation">
        <button onClick={this.toggleMenu.bind(this)}></button>
        <ul className={isActive}>
          <li><a title="Politics">Politics</a></li>
          <li><a title="Business">Business</a></li>
          <li><a title="Tech">Tech</a></li>
          <li><a title="Science">Science</a></li>
          <li><a title="Sports">Sports</a></li>
        </ul>
      </nav>
    );
  }
}

export { Navigation as default };
