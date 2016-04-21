import React, { Component, PropTypes } from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="entry-post entry-post--featured">
        <ul className="tag-list">
          <li>{this.props.data.date}</li>
        </ul>
        <div className="entry-post__content">
          <div className="entry-post__image">
            <img src={this.props.data.image} />
          </div>
          <h1>{this.props.data.title}</h1>
        </div>
        <aside className="entry-post__author">
          <div>
            <img src="assets/img/author.jpg" />
          </div>
          <span>{this.props.data.authors}</span>
        </aside>
      </article>
    );
  }
}

export { Entry as default };

Entry.defaultProps = {
  data: []
};
