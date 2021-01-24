import Data from '../api/FishEyeDataFR.json';

const tagsHelper = {
  list: () => {
    const tagsList = [];

    Data.photographers.forEach((photographer) => {
      photographer.tags.forEach((tag) => {
        if (!tagsList.includes(tag)) {
          tagsList.push(tag);
        }
      });
    });

    return tagsList;
  },
};

export default tagsHelper;
