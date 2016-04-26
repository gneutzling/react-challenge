import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Media from './Media';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let entryType = this.props.data.featured ? 'entry-post--featured' : '';
    let entryClasses = classNames('entry-post', entryType);

    return (
      <article className={entryClasses}>
        <ul className="tag-list">
          {this.props.data.tags.map((tag) => {
            return (
              <li className={"tag-list__" + tag.id} key={tag.id}>{tag.label}</li>
            );
          })}
        </ul>
        <div className="entry-post__teaser">
          {this.props.data.image &&
            <div className="entry-post__image">
              <Media source={this.props.data.image} />
            </div>
          }
          <h1>{this.props.data.title}</h1>
        </div>
        <aside className="entry-post__author">
          <div>
            <Media source="author" />
          </div>
          <span>{this.props.data.authors}</span>
        </aside>
        <p className="entry-post__content">{this.props.data.content}</p>
      </article>
    );
  }
}

export { Entry as default };

Entry.defaultProps = {
  data: []
};
