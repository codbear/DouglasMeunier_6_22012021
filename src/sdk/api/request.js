import APIMocker from './APIMocker';
import HTTP_METHODS from '../constants';

const withMocker = (request) => async (route, method = HTTP_METHODS.GET) => {
  const data = await request('/api/FishEyeDataFR.json');

  return APIMocker(route, method, data);
};

const request = async (route, method = HTTP_METHODS.GET, body = {}) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  const options = {
    method,
    headers,
  };

  if (method !== HTTP_METHODS.GET) options.body = JSON.stringify(body);

  const response = await fetch(route, options);

  if (!response.ok) {
    throw new Error('Une erreur inattendue est survenue, veuillez réessayer.');
  }

  return response.json();
};

export default withMocker(request);
