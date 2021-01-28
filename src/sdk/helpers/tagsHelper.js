import useGetData from '../api/clientApi';

export const useList = () => {
  const {
    isSuccess,
    data,
  } = useGetData();

  const tagsList = [];

  data?.photographers.forEach((photographer) => {
    photographer.tags.forEach((tag) => {
      if (!tagsList.includes(tag)) {
        tagsList.push(tag);
      }
    });
  });

  return { isSuccess, tagsList };
};
