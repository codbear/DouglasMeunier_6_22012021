export default async function populateLocalStorage() {
  const response = await fetch('/api/FishEyeDataFR.json');
  const data = await response.json();
  let reducedMedias = {};
  let fromLocalStorage = {};
  let table = {};

  try {
    if (localStorage.getItem('likes')) {
      fromLocalStorage = JSON.parse(localStorage.getItem('likes'));
    }

    reducedMedias = data.media.reduce((acc, media) => {
      const { photographerId, id } = media;

      if (!acc[photographerId]) {
        acc[photographerId] = {};
      }

      if (!acc[photographerId][id]) {
        acc[photographerId][id] = {
          likes: media.likes,
          hasBeenLiked: false,
        };
      }

      return acc;
    }, fromLocalStorage);
  } finally {
    table = { ...fromLocalStorage, ...reducedMedias };
    localStorage.setItem('likes', JSON.stringify(table));
  }
}
