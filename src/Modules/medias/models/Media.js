import MEDIA_TYPE from '../constants';

export default class Media {
  constructor(metadata) {
    this.id = metadata.id;
    this.photographerId = metadata.photographerId;
    this.tags = metadata.tags;
    this.likes = metadata.likes;
    this.date = metadata.date;
    this.price = metadata.price;
    this.title = metadata.title;
    this.component = MEDIA_TYPE.IMAGE;
    this.source = null;
    this.thumbSource = null;
    this.hasBeenLiked = metadata.hasBeenLiked;
  }
}
