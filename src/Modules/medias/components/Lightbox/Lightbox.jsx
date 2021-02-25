import React, { useEffect, useState, useCallback } from 'react';
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
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  medias: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  clickedMedia: PropTypes.object,
};

const defaultProps = {
  clickedMedia: {},
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
  isOpen, onClose, medias, clickedMedia,
}) => {
  const classes = useStyles();
  const [currentMedia, setCurrentMedia] = useState(null);

  useEffect(() => {
    if (!currentMedia && clickedMedia) {
      setCurrentMedia(clickedMedia);
    }
  }, [currentMedia, clickedMedia, setCurrentMedia]);

  const goToMedia = useCallback(
    (index) => {
      let newIndex = index;

      if (index < 0) {
        newIndex = medias.length - 1;
      } else if (index >= medias.length - 1) {
        newIndex = 0;
      }

      setCurrentMedia(medias[newIndex]);
    },
    [
      medias, setCurrentMedia,
    ],
  );

  const handleClose = () => {
    onClose();
    setCurrentMedia(null);
  };

  const handlePrev = () => {
    const currentIndex = medias.findIndex((media) => media.id === currentMedia.id);
    goToMedia(currentIndex - 1);
  };

  const handleNext = () => {
    const currentIndex = medias.findIndex((media) => media.id === currentMedia.id);
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
      open={isOpen}
      onClose={handleClose}
      fullScreen
      onKeyUp={handleKeyUp}
      PaperProps={{
        className: classes.root,
      }}
    >
      <div className={classNames(classes.nav, classes.navLeft)}>
        <IconButton
          className={classes.navButton}
          onClick={handlePrev}
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
        >
          <ChevronRightIcon
            className={classes.icon}
            color="primary"
          />
        </IconButton>
        <IconButton
          className={classNames(classes.navButton, classes.navClose)}
          onClick={handleClose}
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
