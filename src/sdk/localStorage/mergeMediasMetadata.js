export default function mergeMediasMetadata(mediasFromJSON) {
  let mergedMedias = [];

  try {
    if (localStorage.getItem('likes')) {
      const mediasFromLS = JSON.parse(localStorage.getItem('likes'));

      mediasFromJSON
        .forEach((mediaFromJSON) => {
          const { photographerId, id } = mediaFromJSON;
          const mergedMedia = { ...mediaFromJSON };
          const mediaFromLS = mediasFromLS[photographerId][id];

          mergedMedia.hasBeenLiked = mediaFromLS.hasBeenLiked;
          mergedMedia.likes = mediaFromLS.likes;
          mergedMedias.push(mergedMedia);
        });
    }
  } catch (e) {
    mergedMedias = [...mediasFromJSON];
  }

  return mergedMedias;
}
