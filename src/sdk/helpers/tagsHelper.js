import useGetData from '../api/clientApi';
import getQueryParams from '../../services';

export const useList = () => {
  const {
    isSuccess,
    data,
  } = useGetData();

  const tagsList = [];

  data?.photographers.forEach((photographer) => {
    photographer.tags.forEach((tag) => {
      if (!tagsList.includes(tag)) {
        tagsList.push(tag);
      }
    });
  });

  return { isSuccess, tagsList };
};

export const useListActiveTags = () => {
  const queryParams = getQueryParams();
  const activeTags = queryParams?.tags || [];

  return { activeTags };
};
