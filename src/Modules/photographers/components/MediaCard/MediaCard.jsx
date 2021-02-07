import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button, Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import mediaPropTypes from '../../prop-types/mediaPropTypes';

const propTypes = {
  type: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  metadata: mediaPropTypes.isRequired,
};

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    width: 335,
    [breakpoints.up('md')]: {
      width: 350,
    },
  },
  media: {
    height: 190,
    width: 'unset',
    minWidth: '100%',
    [breakpoints.up('md')]: {
      height: 300,
    },
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  mediaNameContainer: {
    flexGrow: 2,
    marginRight: spacing(1),
  },
  noWrap: {
    whiteSpace: 'nowrap',
  },
}));

const MediaCard = ({
  type, source, metadata,
}) => {
  const classes = useStyles();
  const {
    likes,
    price,
    title,
  } = metadata;

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={source}
          component={type}
          alt={title}
          title={title}
        />
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <div className={classes.mediaNameContainer}>
          <Typography variant="h6" component="p" color="primary">
            { title }
          </Typography>
        </div>
        <Typography variant="h6" component="p" color="primary" className={classes.noWrap}>
          { `${price} €` }
        </Typography>
        <Button
          color="primary"
          aria-label="likes"
          endIcon={(
            <FavoriteIcon />
          )}
        >
          <Typography variant="h6" component="p" color="primary">
            { likes }
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

MediaCard.propTypes = propTypes;

export default MediaCard;
