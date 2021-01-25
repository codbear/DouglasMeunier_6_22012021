import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
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

const TagButton = ({ label, isActive, onClick }) => {
  const classes = useStyles();
  const formattedLabel = `#${label[0].toUpperCase()}${label.slice(1)}`;

  const handleClick = () => {
    onClick({
      label,
      isActive,
    });
  };

  return (
    <button
      type="button"
      className={classNames(
        classes.root,
        {
          [classes.isActive]: isActive,
        },
      )}
      onClick={handleClick}
    >
      { formattedLabel }
    </button>
  );
};

TagButton.propTypes = propTypes;

export default TagButton;
