import Data from '../api/FishEyeDataFR.json';

const photographersHelper = {
  list: () => Data.photographers,
  get: (id) => Data.photographers.find((photographer) => photographer.id === id),
};

export default photographersHelper;
