import useGetData from '../api/clientApi';

const useList = () => {
  const {
    isSuccess,
    data,
  } = useGetData('tags');

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

export default useList;
