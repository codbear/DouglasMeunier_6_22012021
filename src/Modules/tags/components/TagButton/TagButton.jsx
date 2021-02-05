import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core';

const propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  targetUrl: PropTypes.string.isRequired,
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    cursor: 'pointer',
    margin: spacing(0, 0.5, 0.5, 0),
    backgroundColor: palette.background.paper,
    border: `1px solid ${palette.border}`,
    borderRadius: 11,
    padding: '3px 6px',
    color: palette.primary.main,
    fontWeight: 500,
  },
  isActive: {
    backgroundColor: palette.background.primary,
    color: palette.primary.contrastText,
  },
}));

const TagButton = ({ label, isActive, targetUrl }) => {
  const classes = useStyles();
  const formattedLabel = `#${label[0].toUpperCase()}${label.slice(1)}`;

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
