import MEDIA_TYPE from '../constants';
import Media from './Media';

export default class ImageMedia extends Media {
  constructor(metadata) {
    super(metadata);
    this.component = MEDIA_TYPE.IMAGE;
    this.filename = metadata.image;
    this.source = `/medias/Photographers/${metadata.photographerId}/${metadata.image}`;
    this.thumbSource = `/medias/Photographers/${metadata.photographerId}/thumb_${metadata.image}`;
  }
}
