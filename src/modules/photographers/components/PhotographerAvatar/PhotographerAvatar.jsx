import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  filename: PropTypes.string,
  alternativeLabel: PropTypes.string,
};

const defaultProps = {
  filename: 'placeholder.png',
  alternativeLabel: 'Avatar',
};

const useStyles = makeStyles(({ palette }) => ({
  image: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center center',
    boxShadow: `0px 4px 12px ${palette.shadow}`,
  },
}));

const PhotographerAvatar = ({
  filename, alternativeLabel,
}) => {
  const classes = useStyles();

  return (
    <img src={`/images/Avatar/${filename}`} alt={alternativeLabel} className={classes.image} />
  );
};

PhotographerAvatar.propTypes = propTypes;
PhotographerAvatar.defaultProps = defaultProps;

export default PhotographerAvatar;
