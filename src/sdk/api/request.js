import APIMocker from 'sdk/api/APIMocker';

const request = async (route, method = 'GET', body = {}) => {
  const url = '/api/FishEyeDataFR.json';

  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  const options = {
    method,
    headers,
  };

  if (method !== 'GET') options.body = JSON.stringify(body);

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Une erreur inattendue est survenue, veuillez réessayer.');
  }

  const data = await response.json();

  return APIMocker(route, data);
};

export default request;
