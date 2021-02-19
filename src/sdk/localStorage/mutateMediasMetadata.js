export default function mutateMediasMetadata(resourceId, subresourceId) {
  const mediasFromLS = JSON.parse(localStorage.getItem('likes'));
  const mediaToMutate = mediasFromLS[resourceId][subresourceId];
  const { hasBeenLiked } = mediaToMutate;

  const mutatedMetadata = {
    likes: hasBeenLiked ? mediaToMutate.likes - 1 : mediaToMutate.likes + 1,
    hasBeenLiked: !hasBeenLiked,
  };

  const mutatedMedias = {
    ...mediasFromLS,
    [resourceId]: {
      ...mediasFromLS[resourceId],
      [subresourceId]: mutatedMetadata,
    },
  };

  localStorage.setItem('likes', JSON.stringify(mutatedMedias));

  return mutatedMetadata;
}
