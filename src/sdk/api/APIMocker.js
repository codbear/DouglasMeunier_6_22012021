const APIMocker = (route, data) => {
  const [resourceType, resourceId, subresourceType, subresourceId] = route.split('/');

  if (resourceType === 'photographers') {
    if (subresourceType === 'medias') {
      return subresourceId
        ? data.media.find((media) => media.id === Number(subresourceId))
        : data.media.filter((media) => media.photographerId === Number(resourceId));
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
