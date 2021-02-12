import APIMocker from 'sdk/api/APIMocker';
import { METHODS } from 'sdk/constants';

const request = async (route, method = METHODS.GET, body = {}) => {
  const url = '/api/FishEyeDataFR.json';

  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  const options = {
    method: METHODS.GET,
    headers,
  };

  // if (method !== METHODS.GET) options.body = JSON.stringify(body);

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Une erreur inattendue est survenue, veuillez réessayer.');
  }

  const data = await response.json();

  return APIMocker(route, method, data, body);
};

export default request;
