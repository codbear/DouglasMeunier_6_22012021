import actionTypes from './types';

export const setFirstName = (value) => ({
  type: actionTypes.SET_FIRST_NAME,
  payload: value,
});

export const setLastName = (value) => ({
  type: actionTypes.SET_LAST_NAME,
  payload: value,
});

export const setEmail = (value) => ({
  type: actionTypes.SET_EMAIL,
  payload: value,
});

export const setMessage = (value) => ({
  type: actionTypes.SET_MESSAGE,
  payload: value,
});

export const setError = ({ field, error }) => ({
  type: actionTypes.SET_ERROR,
  payload: { field, error },
});
