import React, { Component, PropTypes } from 'react';
import Entry from './Entry';

class NewsHighlight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="highlight-entries">
        {this.props.data.map((news, index) => {
          return (
            <Entry data={news} key={index} />
          );
        })}
      </section>
    );
  }
}

export { NewsHighlight as default };

Entry.defaultProps = {
  data: []
};
