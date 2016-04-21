import React, { Component, PropTypes } from 'react';
import Entry from './Entry';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    $.ajax({
      url: './assets/js/data.json',
      type: 'GET',
      contentType: 'json',
      success: (result) => {
        this.setState({ data: result });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map((news, index) => {
          return (
            <Entry data={news} key={index} />
          );
        })}
      </div>
    );
  }
}

export { News as default };
