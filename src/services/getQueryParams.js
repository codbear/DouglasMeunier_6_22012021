const getQueryParams = () => {
  const queryParams = {};

  if (window.location.search) {
    window.location.search
      .replace('?', '')
      .split('&')
      .forEach((param) => {
        const splittedParam = param.split('=');
        queryParams[splittedParam[0]] = splittedParam[1].split('+');
      });
  }

  return queryParams;
};

export default getQueryParams;
