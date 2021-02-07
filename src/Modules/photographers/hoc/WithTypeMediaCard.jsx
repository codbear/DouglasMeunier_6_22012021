import React from 'react';
import PropTypes from 'prop-types';

import MEDIATYPE from '../constants';
import MediaCard from '../components/MediaCard';
import mediaPropTypes from '../prop-types/mediaPropTypes';

const propTypes = {
  media: mediaPropTypes.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  onChange: () => {},
};

const WithTypeMediaCard = ({ media, onChange }) => {
  const type = media.image ? MEDIATYPE.IMAGE : MEDIATYPE.VIDEO;
  const source = type === MEDIATYPE.IMAGE
    ? `/images/Photographers/${media.photographerId}/thumb_${media.image}`
    : `/images/Photographers/${media.photographerId}/${media.video}`;

  return (
    <MediaCard source={source} type={type} metadata={media} onChange={onChange} />
  );
};

WithTypeMediaCard.propTypes = propTypes;
WithTypeMediaCard.defaultProps = defaultProps;

export default WithTypeMediaCard;
