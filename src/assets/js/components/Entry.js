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
    let entryImages = {
      teaser: {
        normal: this.props.data.image + '.jpg',
        retina: this.props.data.image + '@2x.jpg'
      },
      author: {
        normal: 'author.jpg',
        retina: 'author@2x.jpg'
      }
    };

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
              <Media source={entryImages.teaser} />
            </div>
          }
          <h1>{this.props.data.title}</h1>
        </div>
        <aside className="entry-post__author">
          <div>
            <Media source={entryImages.author} />
          </div>
          <span>
            by {this.props.data.authors}
          </span>
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
