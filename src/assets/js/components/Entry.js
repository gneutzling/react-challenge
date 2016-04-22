import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imagePath = 'assets/img/';
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
              <img src={'' + imagePath + this.props.data.image + '.jpg'} />
            </div>
          }
          <h1>{this.props.data.title}</h1>
        </div>
        <aside className="entry-post__author">
          <div>
            <img src="assets/img/author.jpg" />
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
