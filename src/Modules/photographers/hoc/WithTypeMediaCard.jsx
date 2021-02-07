import React from 'react';

import MEDIATYPE from '../constants';
import MediaCard from '../components/MediaCard';
import mediaPropTypes from '../prop-types/mediaPropTypes';

const propTypes = {
  media: mediaPropTypes.isRequired,
};

const WithTypeMediaCard = ({ media }) => {
  const type = media.image ? MEDIATYPE.IMAGE : MEDIATYPE.VIDEO;
  const source = type === MEDIATYPE.IMAGE
    ? `/images/Photographers/${media.photographerId}/thumb_${media.image}`
    : `/images/Photographers/${media.photographerId}/${media.video}`;

  return (
    <MediaCard source={source} type={type} metadata={media} />
  );
};

WithTypeMediaCard.propTypes = propTypes;

export default WithTypeMediaCard;
