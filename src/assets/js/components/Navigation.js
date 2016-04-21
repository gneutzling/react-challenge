import React, { Component, PropTypes } from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="main-navigation">
        <ul>
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
