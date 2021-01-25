import { useQuery } from 'react-query';

const request = async () => {
  const response = await fetch(
    '/api/FishEyeDataFR.json',
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  return response.json();
};

const useGetData = () => useQuery('data', request);

export default useGetData;
