import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import { ROUTES } from 'Modules/router';
import useQueryParams from 'Modules/home/hooks';
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
  const activeTags = useQueryParams().get('tags')?.split(' ') || [];

  return (
    <div className={classes.root}>
      { tags.map((tag) => {
        const isActive = activeTags.includes(tag);
        const newTags = isActive
          ? activeTags.filter((activeTag) => activeTag !== tag)
          : activeTags.concat(tag);

        const targetUrl = newTags.length
          ? `${ROUTES.HOMEPAGE.INDEX}?tags=${newTags.join('+')}`
          : ROUTES.HOMEPAGE.INDEX;

        return (
          <TagButton
            label={tag}
            isActive={shouldHighlightActiveTags && isActive}
            targetUrl={targetUrl}
            key={tag}
          />
        );
      })}
    </div>
  );
};

TagsCloud.propTypes = propTypes;
TagsCloud.defaultProps = defaultProps;

export default TagsCloud;
