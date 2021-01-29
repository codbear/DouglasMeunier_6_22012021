import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const useStyles = makeStyles(({ palette, typography, spacing }) => ({
  root: {
    textAlign: 'center',
    marginBottom: spacing(1),
  },
  location: {
    ...typography.body1,
  },
  tagline: {
    color: palette.text.default,
    ...typography.body2,
  },
  price: {
    color: palette.text.alternative,
    ...typography.caption,
  },
}));

const PhotographerInfo = ({
  city, country, tagline, price,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.location}>
        { `${city}, ${country}` }
      </p>
      <p className={classes.tagline}>
        { tagline }
      </p>
      <p className={classes.price}>
        { `${price}€/jour` }
      </p>
    </div>
  );
};

PhotographerInfo.propTypes = propTypes;

export default PhotographerInfo;
