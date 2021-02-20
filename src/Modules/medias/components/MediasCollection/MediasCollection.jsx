import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import {
  FormControl,
  makeStyles, MenuItem, Select, Typography,
} from '@material-ui/core';

import mediaPropTypes from '../../prop-types';
import withMedia from '../../hoc/withMedia';
import MediaCard from '../MediaCard';

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

const MediaCardWithMedia = withMedia(MediaCard);

const MediasCollection = ({ medias }) => {
  const classes = useStyles();
  const [orderProperty, setOrderProperty] = useState('likes');

  const orderBy = useCallback(
    (key) => {
      const orderDescendant = (comparator) => (a, b) => -comparator(a, b);

      if (typeof medias[1][key] === 'number') {
        return medias.sort(orderDescendant((a, b) => a[key] - b[key]));
      }

      return medias.sort((a, b) => {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }

        return 0;
      });
    },
    [medias],
  );

  const [orderedMedias, setOrderedMedias] = useState(orderBy(orderProperty));

  const handleChange = (event) => {
    const { value } = event.target;

    setOrderedMedias(orderBy(value));
    setOrderProperty(value);
  };

  return (
    <>
      <div className={classes.selectContainer}>
        <Typography>Trier par</Typography>
        <FormControl variant="outlined">
          <Select
            value={orderProperty}
            onChange={handleChange}
            className={classes.select}
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
            />
          </article>
        ))}
      </div>
    </>
  );
};

MediasCollection.propTypes = propTypes;
MediasCollection.defaultProps = defaultProps;

export default MediasCollection;
