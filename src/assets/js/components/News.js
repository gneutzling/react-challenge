import React, { Component, PropTypes } from 'react';
import NewsHighlight from './NewsHighlight'
import NewsSecondary from './NewsSecondary'

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        highlight: [],
        secondary: []
      }
    };
  }

  componentWillMount() {
    $.ajax({
      url: './assets/js/data.json',
      type: 'GET',
      contentType: 'json',
      success: (result) => {
        // Simulate HTTP request delay.
        setTimeout(() => {
          this.setState({ data: result });
        }, 2000);
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <NewsHighlight data={this.state.data.highlight} />
          <NewsSecondary data={this.state.data.secondary} />
        </div>
      </div>
    );
  }
}

export { News as default };
