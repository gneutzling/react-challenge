import React, { Component, PropTypes } from 'react';
import NewsHighlight from './NewsHighlight'
import NewsSecondary from './NewsSecondary'
import Loader from 'react-loader'

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        highlight: [],
        secondary: []
      },
      loaded: false
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
          this.setState({
            data: result,
            loaded: true
          });
        }, 2000);
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Loader loaded={this.state.loaded}>
            <NewsHighlight data={this.state.data.highlight} />
            <NewsSecondary data={this.state.data.secondary} />
          </Loader>
        </div>
      </div>
    );
  }
}

export { News as default };
