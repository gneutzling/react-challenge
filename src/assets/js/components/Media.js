import React, { Component, PropTypes } from 'react';

class Media extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <picture>
        <source media={this.props.media} srcSet={'' + this.props.imagePath + this.props.source.retina} />
        <img srcSet={'' + this.props.imagePath + this.props.source.normal} />
      </picture>
    );
  }
}

export { Media as default };

Media.defaultProps = {
  imagePath: 'assets/img/',
  media: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  source: {
    normal: null,
    retina: null
  }
};
