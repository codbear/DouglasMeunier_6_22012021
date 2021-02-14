import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { useLike } from 'sdk';

import mediaPropTypes from '../../prop-types';

const propTypes = {
  media: mediaPropTypes.isRequired,
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
  media,
}) => {
  const classes = useStyles();
  const [metadata, setMetadata] = useState(media);
  const {
    id,
    photographerId,
    likes,
    price,
    title,
    source,
    component,
    hasBeenLiked,
  } = metadata;
  const likesMutation = useLike(photographerId, id);

  const handleClick = () => {
    likesMutation.mutate({}, {
      onSuccess: (data) => {
        setMetadata(data);
      },
    });
  };

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={source}
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
          onClick={handleClick}
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
