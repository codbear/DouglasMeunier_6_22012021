import { useMutation, useQuery } from 'react-query';
import { request } from '../api';

const useMedias = (photographerId) => {
  const route = `photographers/${photographerId}/medias`;

  return useQuery(
    ['photographer', photographerId, 'medias'],
    () => request(route),
  );
};

const useMedia = (photographerId, id) => {
  const route = `photographers/${photographerId}/medias/${id}`;

  return useQuery(
    ['photographer', photographerId, 'medias', id],
    () => request(route),
  );
};

const useLike = (photographerId, id) => {
  const route = `photographers/${photographerId}/medias/${id}`;

  return useMutation(
    (payload) => request(route, 'PATCH', payload),
  );
};

export { useMedias, useMedia, useLike };
