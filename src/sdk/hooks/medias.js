import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from '../api';

const useMedias = (photographerId, options) => {
  const route = `photographers/${photographerId}/medias`;

  return useQuery(
    ['photographer', photographerId, 'medias'],
    () => request(route),
    options,
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
  const queryClient = useQueryClient();
  const mediasQueryKey = ['photographer', photographerId, 'medias'];

  return useMutation(
    (payload) => request(route, 'PATCH', payload),
    {
      onSettled: () => {
        queryClient.invalidateQueries(mediasQueryKey);
      },
    },
  );
};

export { useMedias, useMedia, useLike };
