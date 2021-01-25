import useGetData from '../api/clientApi';
import getQueryParams from '../../services';

export const list = () => {
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

export const listActiveTags = () => {
  const queryParams = getQueryParams();

  return queryParams?.tags;
}
