import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import TagButton from '../TagButton';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  activeTags: [],
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
}));

const TagsCloud = ({ tags, activeTags }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { tags.map((tag) => {
        const isActive = activeTags.includes(tag);

        return (
          <TagButton label={tag} isActive={isActive} key={tag} />
        );
      })}
    </div>
  );
};

TagsCloud.propTypes = propTypes;
TagsCloud.defaultProps = defaultProps;

export default TagsCloud;
