import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import TagButton from '../TagButton';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const TagsCloud = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { tags.map((tag) => (
        <TagButton label={tag} key={tag} />
      )) }
    </div>
  );
};

TagsCloud.propTypes = propTypes;

export default TagsCloud;
