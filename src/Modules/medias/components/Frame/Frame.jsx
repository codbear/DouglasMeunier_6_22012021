import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import mediaPropTypes from '../../prop-types';
import MEDIA_TYPE from '../../constants';

const propTypes = {
  media: mediaPropTypes.isRequired,
};

const useStyles = makeStyles(() => ({
  media: {
    width: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
  },
}));

const Frame = ({ media }) => {
  const classes = useStyles();
  const {
    rootDir,
    filename,
    component,
    title,
  } = media;
  const source = `${rootDir}/${filename}`;

  return component === MEDIA_TYPE.VIDEO
    ? (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        className={classes.media}
        src={source}
        controls
        controlsList="nodownload"
        disablePictureInPicture
        disableRemotePlayback
      />
    ) : (
      <img
        className={classes.media}
        src={source}
        alt={title}
      />
    );
};

Frame.propTypes = propTypes;

export default Frame;
