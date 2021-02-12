import MEDIA_TYPE from '../constants';
import Media from './Media';

export default class ImageMedia extends Media {
  constructor(metadata) {
    super(metadata);
    this.component = MEDIA_TYPE.IMAGE;
    this.source = `/images/Photographers/${metadata.photographerId}/thumb_${metadata.image}`;
  }
}
