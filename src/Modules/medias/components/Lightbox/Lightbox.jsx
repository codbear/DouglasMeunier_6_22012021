import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Dialog, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons';

import withMedia from '../../hoc';
import Frame from '../Frame';

const propTypes = {
  onClose: PropTypes.func.isRequired,
  medias: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
};

const defaultProps = {
  index: null,
};

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing(2, 0),
    [breakpoints.up('md')]: {
      padding: spacing(8, 0),
    },
  },
  frame: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: spacing(0, 1),
    [breakpoints.up('md')]: {
      width: '10%%',
      padding: spacing(0, 4),
    },
  },
  navButton: {
    padding: 0,
  },
  navLeft: {
    justifyContent: 'flex-end',
  },
  navRight: {
    justifyContent: 'flex-start',
  },
  navClose: {
    position: 'absolute',
    top: 0,
    left: spacing(1),
    [breakpoints.up('md')]: {
      left: spacing(4),
      width: 116,
      height: 116,
      '& svg': {
        width: 72,
        height: 72,
      },
    },
  },
  icon: {
    [breakpoints.up('md')]: {
      width: 92,
      height: 92,
    },
  },
}));

const FrameWithMedia = withMedia(Frame);

const Lightbox = ({
  onClose, medias, index,
}) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(index);
  const [currentMedia, setCurrentMedia] = useState(medias[index]);

  const goToMedia = useCallback(
    (newIndex) => {
      const lastIndex = medias.length - 1;

      if (newIndex < 0) {
        setCurrentIndex(lastIndex);
        setCurrentMedia(medias[lastIndex]);
        return;
      }

      if (newIndex >= lastIndex) {
        setCurrentIndex(0);
        setCurrentMedia(medias[0]);
        return;
      }

      setCurrentIndex(newIndex);
      setCurrentMedia(medias[newIndex]);
    },
    [medias],
  );

  const handleClose = () => {
    setCurrentIndex(null);
    setCurrentMedia(null);
  };

  const handlePrev = () => {
    goToMedia(currentIndex - 1);
  };

  const handleNext = () => {
    goToMedia(currentIndex + 1);
  };

  const keyToHandler = {
    default() {},
    ArrowRight: handleNext,
    ArrowLeft: handlePrev,
    Escape: handleClose,
  };

  const handleKeyUp = (event) => (
    keyToHandler[event.key] ? keyToHandler[event.key]() : keyToHandler.default()
  );

  return (
    <Dialog
      open={!!currentMedia}
      onClose={handleClose}
      onExited={onClose}
      fullScreen
      onKeyUp={handleKeyUp}
      PaperProps={{
        className: classes.root,
        'aria-label': 'Image plein écran',
      }}
    >
      <div className={classNames(classes.nav, classes.navLeft)}>
        <IconButton
          className={classes.navButton}
          onClick={handlePrev}
          aria-label="Image précédent"
        >
          <ChevronLeftIcon
            className={classes.icon}
            color="primary"
          />
        </IconButton>
      </div>

      {currentMedia && (
        <div className={classes.frame}>
          <FrameWithMedia metadata={currentMedia} />
        </div>
      )}

      <div className={classNames(classes.nav, classes.navRight)}>
        <IconButton
          className={classes.navButton}
          onClick={handleNext}
          aria-label="Image suivante"
        >
          <ChevronRightIcon
            className={classes.icon}
            color="primary"
          />
        </IconButton>
        <IconButton
          className={classNames(classes.navButton, classes.navClose)}
          onClick={handleClose}
          aria-label="Fermer la vue image"
        >
          <CloseIcon
            className={classes.icon}
            color="primary"
          />
        </IconButton>
      </div>
    </Dialog>
  );
};

Lightbox.propTypes = propTypes;
Lightbox.defaultProps = defaultProps;

export default Lightbox;
