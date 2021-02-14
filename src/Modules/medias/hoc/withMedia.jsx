import React from 'react';

import mediaFactory from '../services';
import mediaPropTypes from '../prop-types';

const withMedia = (WrappedComponent) => {
  const propTypes = {
    metadata: mediaPropTypes.isRequired,
  };

  const WithMedia = ({ metadata }) => {
    const media = mediaFactory(metadata);

    return (
      <WrappedComponent media={media} />
    );
  };

  WithMedia.propTypes = propTypes;
  WithMedia.displayName = `WithMedia(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithMedia;
};

export default withMedia;
