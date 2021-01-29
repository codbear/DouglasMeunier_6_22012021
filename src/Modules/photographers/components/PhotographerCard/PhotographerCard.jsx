import React from 'react';
import { Link as RouterLink, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import { ROUTES } from 'Modules/router';
import TagsCloud from 'Modules/tags';

import PhotographerAvatar from '../PhotographerAvatar';
import PhotographerInfo from '../PhotographerInfo';

const propTypes = {
  photographer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    tagline: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    portrait: PropTypes.string.isRequired,
  }).isRequired,
};

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    width: 300,
  },
  link: {
    display: 'block',
    textAlign: 'center',
  },
  name: {
    color: palette.text.secondary,
    marginTop: 20,
    ...typography.h4,
  },
}));

const PhotographerCard = ({ photographer }) => {
  const classes = useStyles();
  const {
    name,
    id,
    city,
    country,
    tags,
    tagline,
    price,
    portrait,
  } = photographer;
  const targetUrl = generatePath(ROUTES.PHOTOGRAPHERS.SINGLE, { id });

  return (
    <article className={classes.root}>
      <RouterLink to={targetUrl} className={classes.link}>
        <PhotographerAvatar id={243} name={name} filename={portrait} />
        <h2 className={classes.name}>{ name }</h2>
      </RouterLink>
      <PhotographerInfo
        city={city}
        price={price}
        country={country}
        tagline={tagline}
        name={name}
      />
      <TagsCloud tags={tags} />
    </article>
  );
};

PhotographerCard.propTypes = propTypes;

export default PhotographerCard;
