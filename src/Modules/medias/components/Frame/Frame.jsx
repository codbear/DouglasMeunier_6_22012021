import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import mediaPropTypes from '../../prop-types';
import MEDIA_TYPE from '../../constants';
import { ReactComponent as Loader } from '../../svg/loader.svg';

const propTypes = {
  media: mediaPropTypes.isRequired,
};

const useStyles = makeStyles(({ palette }) => ({
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
    rootDir, filename, component, title,
  } = currentMedia;
  const source = `${rootDir}/${filename}`;

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
    </>
  );
};

Frame.propTypes = propTypes;

export default Frame;
