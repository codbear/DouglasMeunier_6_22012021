import { useQuery } from 'react-query';
import request from '../api/request';

export const useFind = (photographerId) => {
  const route = `photographers/${photographerId}/medias`;

  return useQuery(
    'photographers',
    () => request(route),
  );
};

export const useGet = (photographerId, id) => {
  const route = `photographers/${photographerId}/medias/${id}`;

  return useQuery(
    ['photographer', id],
    () => request(route),
  );
};
