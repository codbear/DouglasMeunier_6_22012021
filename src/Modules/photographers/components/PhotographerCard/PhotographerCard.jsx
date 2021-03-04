import React from 'react';
import { Link as RouterLink, generatePath } from 'react-router-dom';

import { makeStyles, Typography } from '@material-ui/core';

import { ROUTES } from 'Modules/router';
import TagsCloud from 'Modules/tags';

import PhotographerInfo from 'Modules/photographers/components/PhotographerInfo';
import PhotographerAvatar from '../PhotographerAvatar';
import photographerPropTypes from '../../prop-types/photographerPropTypes';

const propTypes = {
  photographer: photographerPropTypes.isRequired,
};

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: 300,
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      margin: 'auto',
    },
  },
  name: {
    marginTop: 20,
    color: palette.text.tertiary,
  },
  tagsCloudContainer: {
    display: 'flex',
    justifyContent: 'center',
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
        <PhotographerAvatar
          filename={portrait}
        />
        <Typography
          variant="h4"
          component="h2"
          align="center"
          className={classes.name}
        >
          { name }
        </Typography>
      </RouterLink>
      <PhotographerInfo
        city={city}
        price={price}
        country={country}
        tagline={tagline}
        name={name}
      />
      <div className={classes.tagsCloudContainer}>
        <TagsCloud tags={tags} />
      </div>
    </article>
  );
};

PhotographerCard.propTypes = propTypes;

export default PhotographerCard;
