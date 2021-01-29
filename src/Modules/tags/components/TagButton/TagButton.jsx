import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core';

import useQueryParams from 'Modules/home/hooks';
import { ROUTES } from 'Modules/router';

const propTypes = {
  label: PropTypes.string.isRequired,
  shouldHighlightWhenActive: PropTypes.bool.isRequired,
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    cursor: 'pointer',
    backgroundColor: palette.background.paper,
    border: `1px solid ${palette.border}`,
    borderRadius: 11,
    marginBottom: spacing(0.5),
    padding: '3px 6px',
    color: palette.text.primary,
    fontWeight: 500,
    marginRight: spacing(1),
  },
  isActive: {
    backgroundColor: palette.background.primary,
    color: palette.text.onPrimary,
  },
}));

const TagButton = ({ label, shouldHighlightWhenActive }) => {
  const classes = useStyles();
  const formattedLabel = `#${label[0].toUpperCase()}${label.slice(1)}`;
  const activeTags = useQueryParams().get('tags')?.split(' ') || [];
  const isActive = activeTags.includes(label);
  let targetUrl = `${ROUTES.HOMEPAGE.INDEX}?tags=${label}`;

  if (isActive) {
    targetUrl = ROUTES.HOMEPAGE.INDEX;

    if (activeTags.length > 1) {
      activeTags.splice(activeTags.indexOf(label), 1);
      targetUrl = `${ROUTES.HOMEPAGE.INDEX}?tags=${activeTags.join('+')}`;
    }
  } else if (activeTags.length > 0) {
    targetUrl = `${ROUTES.HOMEPAGE.INDEX}?tags=${activeTags.join('+')}+${label}`;
  }

  return (
    <RouterLink
      to={targetUrl}
      className={classNames(
        classes.root,
        {
          [classes.isActive]: isActive && shouldHighlightWhenActive,
        },
      )}
    >
      { formattedLabel }
    </RouterLink>
  );
};

TagButton.propTypes = propTypes;

export default TagButton;
