import { Media, VideoMedia, ImageMedia } from '../models';

const mediaFactory = (metadata) => {
  if (metadata.image) {
    return new ImageMedia(metadata);
  }

  if (metadata.video) {
    return new VideoMedia(metadata);
  }

  return new Media(metadata);
};

export default mediaFactory;
