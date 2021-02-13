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

    reducedMedias = data.media.reduce((container, media) => {
      const { photographerId, id } = media;

      if (!container[photographerId]) {
        // eslint-disable-next-line no-param-reassign
        container[photographerId] = {};
      }

      if (!container[photographerId][id]) {
        // eslint-disable-next-line no-param-reassign
        container[photographerId][id] = {
          likes: media.likes,
          hasBeenLiked: false,
        };
      }

      return container;
    }, fromLocalStorage);
  } finally {
    table = { ...fromLocalStorage, ...reducedMedias };
    localStorage.setItem('likes', JSON.stringify(table));
  }
}
