import { useQuery } from 'react-query';
import { request } from '../api';

export const useFindWithTags = (activeTags) => {
  const {
    isSuccess,
    data,
  } = useQuery('photographers', () => request('photographers'));

  const photographers = activeTags.length > 0
    ? data?.filter((photographer) => (
      photographer.tags.some((tag) => activeTags.includes(tag))
    ))
    : data;

  return { isSuccess, photographers };
};

export const useGet = (id) => {
  const route = `photographers/${id}`;

  const {
    isSuccess,
    data,
  } = useQuery(
    ['photographer', id],
    () => request(route),
  );

  return { isSuccess, data };
};
