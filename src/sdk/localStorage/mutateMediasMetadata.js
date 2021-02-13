export default function mutateMediasMetadata(resourceId, subresourceId) {
  const mediasFromLS = JSON.parse(localStorage.getItem('likes'));
  const mediaToMutate = mediasFromLS[resourceId][subresourceId];
  const { hasBeenLiked } = mediaToMutate;
  const likes = hasBeenLiked ? mediaToMutate.likes - 1 : mediaToMutate.likes + 1;

  const mutatedMediasMetadata = {
    ...mediasFromLS,
    [resourceId]: {
      ...mediasFromLS[resourceId],
      [subresourceId]: {
        likes,
        hasBeenLiked: !hasBeenLiked,
      },
    },
  };

  localStorage.removeItem('likes');
  localStorage.setItem('likes', JSON.stringify(mutatedMediasMetadata));
}
