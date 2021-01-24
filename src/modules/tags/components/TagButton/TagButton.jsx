import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  label: PropTypes.string.isRequired,
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    cursor: 'pointer',
    backgroundColor: palette.background.paper,
    border: '1px solid #c4c4c4',
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

const TagButton = ({ label }) => {
  const classes = useStyles();
  const formattedLabel = `#${label[0].toUpperCase()}${label.slice(1)}`;

  return (
    <button
      type="button"
      className={classes.root}
    >
      { formattedLabel }
    </button>
  );
};

TagButton.propTypes = propTypes;

export default TagButton;
