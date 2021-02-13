import { useMutation, useQuery } from 'react-query';
import { request } from '../api';

export const useFind = (photographerId) => {
  const route = `photographers/${photographerId}/medias`;

  return useQuery(
    ['photographer', photographerId, 'medias'],
    () => request(route),
  );
};

export const useGet = (photographerId, id) => {
  const route = `photographers/${photographerId}/medias/${id}`;

  return useQuery(
    ['photographer', photographerId, 'medias', id],
    () => request(route),
  );
};

export const useMutateLikes = (photographerId, id) => {
  const route = `photographers/${photographerId}/medias/${id}`;

  return useMutation(
    (payload) => request(route, 'PATCH', payload),
  );
};

export const useLikesCount = (photographerId) => {
  const route = `photographers/${photographerId}/likes`;

  return useQuery(
    ['likes', photographerId],
    () => request(route),
  );
};
