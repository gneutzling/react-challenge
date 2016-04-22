import React, { Component, PropTypes } from 'react';
import Entry from './Entry';

class NewsSecondary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="secondary-entries">
        {this.props.data.map((news, index) => {
          return (
            <Entry data={news} key={index} />
          );
        })}
      </section>
    );
  }
}

export { NewsSecondary as default };

Entry.defaultProps = {
  data: []
};
