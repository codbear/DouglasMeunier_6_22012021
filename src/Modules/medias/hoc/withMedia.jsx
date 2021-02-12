import React from 'react';

import mediaFactory from '../services';
import mediaPropTypes from '../prop-types';

const withMedia = (WrappedComponent) => {
  const propTypes = {
    metadata: mediaPropTypes.isRequired,
  };

  const WithMedia = ({ metadata, ...otherProps }) => {
    const media = mediaFactory(metadata);

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <WrappedComponent media={media} {...otherProps} />
    );
  };

  WithMedia.propTypes = propTypes;
  WithMedia.displayName = `WithMedia(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithMedia;
};

export default withMedia;
