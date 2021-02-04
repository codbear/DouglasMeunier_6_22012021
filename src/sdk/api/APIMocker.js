const APIMocker = (route, data) => {
  const [resourceType, resourceId, subresourceType, subresourceId] = route.split('/');

  if (resourceType === 'photographers') {
    if (subresourceType === 'medias') {
      return subresourceId
        ? data.media.find((media) => media.id === subresourceId)
        : data.media.filter((media) => media.photographerId === resourceId);
    }

    return resourceId
      ? data.photographers.find((photographer) => photographer.id === resourceId)
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
