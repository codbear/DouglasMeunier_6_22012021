import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const propTypes = {
  filename: PropTypes.string,
  alternativeLabel: PropTypes.string,
  width: PropTypes.number,
};

const defaultProps = {
  filename: 'placeholder.png',
  alternativeLabel: 'Avatar',
  width: 200,
};

const useStyles = makeStyles(({ palette }) => ({
  image: {
    overflow: 'hidden',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center center',
    boxShadow: `0px 4px 12px ${palette.shadow}`,
  },
}));

const PhotographerAvatar = ({
  filename, alternativeLabel, width,
}) => {
  const classes = useStyles();

  return (
    <img
      src={`/medias/Avatar/thumbnails/${filename}`}
      alt={alternativeLabel}
      className={classes.image}
      width={width}
      height={width}
    />
  );
};

PhotographerAvatar.propTypes = propTypes;
PhotographerAvatar.defaultProps = defaultProps;

export default PhotographerAvatar;
