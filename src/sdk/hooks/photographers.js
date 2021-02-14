import { useQuery } from 'react-query';
import { request } from '../api';

const usePhotographersWithTags = (tags) => {
  const {
    isSuccess,
    data,
  } = useQuery('photographers', () => request('photographers'));

  const photographers = tags.length > 0
    ? data?.filter((photographer) => (
      photographer.tags.some((tag) => tags.includes(tag))
    ))
    : data;

  return { isSuccess, photographers };
};

const usePhotographer = (id) => {
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

export { usePhotographersWithTags, usePhotographer };
