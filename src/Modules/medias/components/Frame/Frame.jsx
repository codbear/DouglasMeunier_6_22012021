import React, { useEffect, useState } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import mediaPropTypes from '../../prop-types';
import MEDIA_TYPE from '../../constants';
import { ReactComponent as Loader } from '../../svg/loader.svg';

const propTypes = {
  media: mediaPropTypes.isRequired,
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  loader: {
    fill: palette.primary.main,
  },
  hidden: {
    display: 'none',
  },
  media: {
    width: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  title: {
    alignSelf: 'baseline',
    marginTop: spacing(1),
  },
}));

const STATUS = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const Frame = ({ media }) => {
  const classes = useStyles();
  const [status, setStatus] = useState(STATUS.LOADING);
  const [currentMedia, setCurrentMedia] = useState(media);
  const {
    source, component, title,
  } = currentMedia;

  useEffect(
    () => {
      if (media.id !== currentMedia.id) {
        setStatus(STATUS.LOADING);
        setCurrentMedia(media);
      }
    },
    [media, currentMedia, setStatus, setCurrentMedia],
  );

  const handleLoad = () => {
    setStatus(STATUS.SUCCESS);
  };

  const handleError = () => {
    setStatus(STATUS.ERROR);
  };

  return (
    <>
      <Loader className={status === STATUS.LOADING ? classes.loader : classes.hidden} />
      {component === MEDIA_TYPE.VIDEO
        ? (
      // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            className={status === STATUS.SUCCESS ? classes.media : classes.hidden}
            src={source}
            onLoadedData={handleLoad}
            onError={handleError}
            controls
            controlsList="nodownload"
            disablePictureInPicture
            disableRemotePlayback
          />
        ) : (
          <img
            className={status === STATUS.SUCCESS ? classes.media : classes.hidden}
            src={source}
            alt={title}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      <Typography
        className={status === STATUS.SUCCESS ? classes.title : classes.hidden}
        variant="h6"
        component="p"
        color="primary"
      >
        { title }
      </Typography>
    </>
  );
};

Frame.propTypes = propTypes;

export default Frame;
