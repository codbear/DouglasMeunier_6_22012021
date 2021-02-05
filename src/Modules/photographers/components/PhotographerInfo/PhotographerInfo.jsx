import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography } from '@material-ui/core';

const propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  variant: PropTypes.string,
};

const defaultProps = {
  variant: 'vertical',
};

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
}));

const PhotographerInfo = ({
  city, country, tagline, price, variant,
}) => {
  const classes = useStyles();

  return variant === 'vertical' ? (
    <div className={classes.root}>
      <Typography color="primary">
        { `${city}, ${country}` }
      </Typography>
      <Typography variant="body2">
        { tagline }
      </Typography>
      <Typography variant="caption" component="p" color="textSecondary">
        { `${price}€/jour` }
      </Typography>
    </div>
  ) : (
    <div>
      <Typography
        variant="h5"
        component="p"
        color="primary"
        gutterBottom
      >
        { `${city}, ${country}` }
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        { tagline }
      </Typography>
    </div>
  );
};

PhotographerInfo.propTypes = propTypes;
PhotographerInfo.defaultProps = defaultProps;

export default PhotographerInfo;
