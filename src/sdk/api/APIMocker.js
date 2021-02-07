import { ACTIONS, METHODS } from 'sdk/constants';

const APIMocker = (route, method, data, body) => {
  const [resourceType, resourceId, subresourceType, subresourceId] = route.split('/');

  if (resourceType === 'photographers') {
    if (subresourceType === 'medias') {
      const mediasFromJSON = data.media
        .filter((media) => media.photographerId === Number(resourceId));
      const medias = [];

      mediasFromJSON.forEach((staticMedia) => {
        const dynamicMedia = staticMedia;

        try {
          if (localStorage.getItem(dynamicMedia.id)) {
            dynamicMedia.likes = Number(localStorage.getItem(dynamicMedia.id));
          } else {
            localStorage.setItem(dynamicMedia.id, dynamicMedia.likes);
          }
        } finally {
          medias.push(dynamicMedia);
        }
      });

      if (subresourceId) {
        const media = medias.find((item) => item.id === Number(subresourceId));

        if (method === METHODS.PATCH) {
          const count = body.action === ACTIONS.INCREMENT
            ? Number(media.likes) + 1
            : Number(media.likes) - 1;

          try {
            localStorage.setItem(media.id, count);
          } finally {
            media.likes = count;
          }
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
