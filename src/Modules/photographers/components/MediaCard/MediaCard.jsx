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

const propTypes = {
  type: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  metadata: PropTypes.shape({
    id: PropTypes.number,
    photographerId: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    likes: PropTypes.number,
    date: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 300,
    width: 'unset',
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  mediaNameContainer: {
    flexGrow: 2,
  },
  alignRight: {
    display: 'flex',
    alignItems: 'center',
  },
});

const MediaCard = ({
  type, filename, metadata,
}) => {
  const classes = useStyles();
  const {
    photographerId,
    likes,
    price,
    title,
  } = metadata;

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={`/images/Photographers/${photographerId}/${filename}`}
          component={type}
          alt={title}
          title={title}
        />
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <div className={classes.mediaNameContainer}>
          <Typography variant="h5" component="p" color="primary">
            { title }
          </Typography>
        </div>
        <Typography variant="h5" component="p" color="primary">
          { `${price} €` }
        </Typography>
        <Button
          color="primary"
          aria-label="likes"
          endIcon={(
            <FavoriteIcon />
          )}
        >
          <Typography variant="h5" component="p" color="primary">
            { likes }
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

MediaCard.propTypes = propTypes;

export default MediaCard;
