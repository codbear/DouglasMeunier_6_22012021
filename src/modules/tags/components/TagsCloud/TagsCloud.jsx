import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import TagButton from '../TagButton';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string),
  onClickOnTag: PropTypes.func,
};

const defaultProps = {
  activeTags: [],
  onClickOnTag: () => {},
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
}));

const TagsCloud = ({ tags, activeTags, onClickOnTag }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { tags.map((tag) => {
        const isActive = activeTags.includes(tag);

        return (
          <TagButton label={tag} isActive={isActive} key={tag} onClick={onClickOnTag} />
        );
      })}
    </div>
  );
};

TagsCloud.propTypes = propTypes;
TagsCloud.defaultProps = defaultProps;

export default TagsCloud;
