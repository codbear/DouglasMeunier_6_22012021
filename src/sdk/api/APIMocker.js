import METHODS from '../constants';
import { mergeMediasMetadata, mutateMediasMetadata } from '../localStorage';

const APIMocker = (route, method, data) => {
  const [resourceType, resourceId, subresourceType, subresourceId] = route.split('/');

  if (resourceType === 'photographers') {
    const mediasFromJSON = data.media
      .filter((mediaFromJSON) => mediaFromJSON.photographerId === Number(resourceId))
      .map((mediaFromJSON) => ({
        hasBeenLiked: false,
        ...mediaFromJSON,
      }));
    const medias = mergeMediasMetadata(mediasFromJSON, resourceId);

    if (subresourceType === 'likes') {
      let likesCount = 0;

      medias.forEach((media) => {
        likesCount += media.likes;
      });

      return likesCount;
    }

    if (subresourceType === 'medias') {
      if (subresourceId) {
        const media = medias.find((item) => item.id === Number(subresourceId));

        if (method === METHODS.PATCH) {
          mutateMediasMetadata(resourceId, subresourceId);
        }

        return media;
      }

      return medias;
    }

    return resourceId
      ? data.photographers.find((photographer) => photographer.id === Number(resourceId))
      : data.photographers;
  }

  if (resourceType === 'tags') {
    const tagsList = [];

    data.photographers.forEach((photographer) => {
      photographer.tags.forEach((tag) => {
        if (!tagsList.includes(tag)) {
          tagsList.push(tag);
        }
      });
    });

    return tagsList;
  }

  return data;
};

export default APIMocker;
