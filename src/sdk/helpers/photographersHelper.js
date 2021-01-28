import useGetData from '../api/clientApi';

export const useList = (activeTags) => {
  const {
    isSuccess,
    data,
  } = useGetData('photographers');

  const photographers = activeTags.length > 0
    ? data?.photographers.filter((photographer) => (
      photographer.tags.some((tag) => activeTags.includes(tag))
    ))
    : data?.photographers;

  return { isSuccess, photographers };
};

export const useGet = (id) => {
  const {
    isSuccess,
    data,
  } = useGetData(['photographer', id]);

  const photographer = data?.photographers.find((elem) => elem.id === id);

  return { isSuccess, photographer };
};
