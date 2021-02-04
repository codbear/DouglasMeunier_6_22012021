import { useQuery } from 'react-query';
import request from '../api/request';

const useFind = () => {
  const {
    isSuccess,
    data,
  } = useQuery('tags', () => request('tags'));

  return { isSuccess, data };
};

export default useFind;
