import MEDIA_TYPE from '../constants';
import Media from './Media';

export default class VideoMedia extends Media {
  constructor(metadata) {
    super(metadata);
    this.component = MEDIA_TYPE.VIDEO;
    this.source = `/images/Photographers/${metadata.photographerId}/${metadata.video}`;
  }
}
