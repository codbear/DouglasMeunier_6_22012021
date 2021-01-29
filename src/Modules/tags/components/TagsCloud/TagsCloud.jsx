import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import TagButton from '../TagButton';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  shouldHighlightActiveTags: PropTypes.bool,
};

const defaultProps = {
  shouldHighlightActiveTags: false,
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
}));

const TagsCloud = ({ tags, shouldHighlightActiveTags }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { tags.map((tag) => (
        <TagButton label={tag} shouldHighlightWhenActive={shouldHighlightActiveTags} key={tag} />
      ))}
    </div>
  );
};

TagsCloud.propTypes = propTypes;
TagsCloud.defaultProps = defaultProps;

export default TagsCloud;
