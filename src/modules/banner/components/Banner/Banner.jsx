import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import logo from '../../images/logo.svg';
import TagsCloud from '../../../tags';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  activeTags: PropTypes.arrayOf(PropTypes.string),
  onClickOnTag: PropTypes.func,
};

const defaultProps = {
  tags: [],
  activeTags: [],
  onClickOnTag: () => {},
};

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
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
}));

const Banner = ({ tags, activeTags, onClickOnTag }) => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <RouterLink to="/">
        <img src={logo} alt="Fisheye Home page" className={classes.logo} />
      </RouterLink>
      {tags.length > 0 && (
        <div className={classes.nav}>
          <TagsCloud tags={tags} activeTags={activeTags} onClickOnTag={onClickOnTag} />
        </div>
      )}
    </div>
  );
};

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
