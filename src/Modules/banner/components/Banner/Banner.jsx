import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { Button, makeStyles } from '@material-ui/core';

import { ROUTES } from 'Modules/router';
import TagsCloud from 'Modules/tags';

import logo from '../../images/logo.svg';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  tags: [],
};

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  banner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing(5, 1),
    justifyItems: 'center',
    alignItems: 'center',
    marginTop: spacing(5),
    [breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    [breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 2fr 1fr',
    },
  },
  logo: {
    [breakpoints.down('sm')]: {
      width: 150,
    },
  },
  nav: {
    gridColumn: 'span 2',
    gridRow: 2,
    [breakpoints.up('md')]: {
      gridColumn: 2,
      gridRow: 1,
    },
  },
  skip: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& a': {
      position: 'relative',
      top: 9,
      opacity: 0,
      transition: 'opacity .1s ease-in-out',
    },
    '& a:focus': {
      opacity: 1,
    },
  },
}));

const Banner = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.skip}>
        <Button
          component="a"
          variant="contained"
          href="#mainContent"
          color="secondary"
          size="small"
        >
          Passer au contenu
        </Button>
      </div>
      <div className={classes.banner}>
        <RouterLink to={ROUTES.HOMEPAGE.INDEX}>
          <img src={logo} alt="Page d'accueil Fisheye" className={classes.logo} />
        </RouterLink>
        {tags.length > 0 && (
        <div className={classes.nav}>
          <TagsCloud tags={tags} shouldHighlightActiveTags />
        </div>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
