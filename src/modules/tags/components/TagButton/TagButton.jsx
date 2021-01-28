import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core';
import useQueryParams from '../../../home/hooks';

const propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    cursor: 'pointer',
    backgroundColor: palette.background.paper,
    border: `1px solid ${palette.border}`,
    borderRadius: 11,
    padding: '3px 6px',
    color: palette.text.primary,
    fontWeight: 500,
    '&:not(:last-child)': {
      marginRight: spacing(1),
    },
  },
  isActive: {
    backgroundColor: palette.background.primary,
    color: palette.text.onPrimary,
  },
}));

const TagButton = ({ label, isActive }) => {
  const classes = useStyles();
  const formattedLabel = `#${label[0].toUpperCase()}${label.slice(1)}`;
  const activeTags = useQueryParams().get('tags')?.split(' ') || [];
  let targetUrl = `/?tags=${label}`;

  if (isActive) {
    if (activeTags.length === 1) {
      targetUrl = '/';
    }

    if (activeTags.length > 1) {
      activeTags.splice(activeTags.indexOf(label), 1);
      targetUrl = `/?tags=${activeTags.join('+')}`;
    }
  } else if (activeTags.length > 0) {
    targetUrl = `/?tags=${activeTags.join('+')}+${label}`;
  }

  return (
    <RouterLink
      to={targetUrl}
      className={classNames(
        classes.root,
        {
          [classes.isActive]: isActive,
        },
      )}
    >
      { formattedLabel }
    </RouterLink>
  );
};

TagButton.propTypes = propTypes;

export default TagButton;
