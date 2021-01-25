import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import PhotographerAvatar from '../PhotographerAvatar';
import PhotographerInfo from '../PhotographerInfo';

import TagsCloud from '../../../tags';

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
  onClickOnTag: PropTypes.func.isRequired,
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

const PhotographerCard = ({ photographer, onClickOnTag }) => {
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

  return (
    <article className={classes.root}>
      <a href={`/photographers?id=${id}`} className={classes.link}>
        <PhotographerAvatar id={243} name={name} filename={portrait} />
        <h2 className={classes.name}>{ name }</h2>
      </a>
      <PhotographerInfo
        city={city}
        price={price}
        country={country}
        tagline={tagline}
        name={name}
      />
      <TagsCloud tags={tags} onClickOnTag={onClickOnTag} />
    </article>
  );
};

PhotographerCard.propTypes = propTypes;

export default PhotographerCard;
