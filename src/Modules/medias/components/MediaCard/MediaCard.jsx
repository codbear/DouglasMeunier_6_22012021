import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardMedia, CardActions, Button, Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { useLike } from 'sdk';

import mediaPropTypes from '../../prop-types';

const propTypes = {
  media: mediaPropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
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
  media, onClick,
}) => {
  const classes = useStyles();
  const {
    id,
    photographerId,
    likes,
    price,
    title,
    thumbSource,
    component,
    hasBeenLiked,
  } = media;
  const likesMutation = useLike(photographerId, id);

  const handleClickOnFav = () => {
    likesMutation.mutate({});
  };

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={classes.media}
          src={thumbSource}
          component={component}
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
          onClick={handleClickOnFav}
          color="primary"
          aria-label="likes"
          endIcon={hasBeenLiked ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
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
