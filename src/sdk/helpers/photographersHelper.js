import useGetData from '../api/clientApi';

export const useList = () => {
  const {
    isSuccess,
    data,
  } = useGetData();

  const photographers = data?.photographers;

  return { isSuccess, photographers };
};

export const useGet = (id) => {
  const {
    isSuccess,
    data,
  } = useGetData();

  const photographer = data?.photographers.find((elem) => elem.id === id);

  return { isSuccess, photographer };
};
