import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  FormControl,
  makeStyles, MenuItem, Select, Typography,
} from '@material-ui/core';

import mediaPropTypes from '../../prop-types';
import withMedia from '../../hoc/withMedia';
import MediaCard from '../MediaCard';
import Lightbox from '../Lightbox';

const propTypes = {
  medias: PropTypes.arrayOf(mediaPropTypes).isRequired,
};

const defaultProps = {};

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  selectContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10%',
  },
  select: {
    marginLeft: spacing(2),
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
  mediasGrid: {
    display: 'grid',
    placeContent: 'center',
    gap: spacing(10),
    gridTemplateColumns: 'repeat(1, 1fr)',
    marginTop: spacing(7),
    '& article': {
      display: 'flex',
      justifyContent: 'center',
    },
    [breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [breakpoints.up('xl')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
}));

const orderObjectsByProperty = (key) => (a, b) => {
  if (a[key] > b[key]) {
    return 1;
  }
  if (a[key] < b[key]) {
    return -1;
  }

  return 0;
};

const MediaCardWithMedia = withMedia(MediaCard);

const MediasCollection = ({ medias }) => {
  const classes = useStyles();
  const [orderProperty, setOrderProperty] = useState('likes');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const shouldRenderLightbox = lightboxIndex >= 0;

  const orderedMedias = orderProperty === 'likes'
    ? medias.sort(orderObjectsByProperty(orderProperty)).reverse()
    : medias.sort(orderObjectsByProperty(orderProperty));

  const handleChange = (event) => {
    const { value } = event.target;

    setOrderProperty(value);
  };

  const handleLightBoxOpen = (mediaId) => {
    const mediaIndex = medias.findIndex((media) => media.id === mediaId);
    setLightboxIndex(mediaIndex);
  };

  const handleLightBoxClose = () => {
    setLightboxIndex(-1);
  };

  return (
    <>
      <div className={classes.selectContainer}>
        <Typography id="orderBy">Trier par</Typography>
        <FormControl variant="outlined">
          <Select
            value={orderProperty}
            onChange={handleChange}
            className={classes.select}
            labelId="orderBy"
          >
            <MenuItem value="likes">Popularité</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="title">Titre</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.mediasGrid}>
        {orderedMedias.map((media) => (
          <article key={media.id}>
            <MediaCardWithMedia
              metadata={media}
              onClick={() => handleLightBoxOpen(media.id)}
            />
          </article>
        ))}
      </div>
      {shouldRenderLightbox && (
        <Lightbox
          onClose={handleLightBoxClose}
          medias={orderedMedias}
          index={lightboxIndex}
        />
      )}
    </>
  );
};

MediasCollection.propTypes = propTypes;
MediasCollection.defaultProps = defaultProps;

export default MediasCollection;
