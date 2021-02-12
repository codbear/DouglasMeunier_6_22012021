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

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    padding: spacing(12.5, 0, 0, 2),
  },
  selectContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    marginLeft: spacing(2),
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
  mediasGrid: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    '& article': {
      margin: spacing(2, 2, 2, 0),
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
    <section className={classes.root}>
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
    </section>
  );
};

MediasCollection.propTypes = propTypes;
MediasCollection.defaultProps = defaultProps;

export default MediasCollection;
