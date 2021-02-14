import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const propTypes = {
  price: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 376,
    padding: spacing(2, 4),
    backgroundColor: palette.secondary.main,
    borderRadius: '5px 5px 0 0',
  },
  likesContainer: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 2,
  },
}));

const StatsSnackbar = ({ price, likes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.likesContainer}>
        <Typography variant="h5" component="p">
          { likes }
        </Typography>
        <FavoriteIcon />
      </div>
      <Typography variant="h5" component="p">
        { `${price}€ / jour` }
      </Typography>
    </div>
  );
};

StatsSnackbar.propTypes = propTypes;

export default StatsSnackbar;
