import { useQuery } from 'react-query';
import { request } from '../api';

const useTags = () => {
  const {
    isSuccess,
    data,
  } = useQuery('tags', () => request('tags'));

  return { isSuccess, data };
};

export default useTags;
