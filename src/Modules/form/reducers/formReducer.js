import actionTypes from '../actions';

const INITIAL_STATE = {
  firstName: {
    value: '',
    error: '',
  },
  lastName: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
  message: {
    value: '',
    error: '',
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FIRST_NAME:
      return {
        ...state,
        firstName: {
          ...state.firstName,
          value: action.payload,
        },
      };

    case actionTypes.SET_LAST_NAME:
      return {
        ...state,
        lastName: {
          ...state.lastName,
          value: action.payload,
        },
      };

    case actionTypes.SET_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
        },
      };

    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          value: action.payload,
        },
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          error: action.payload.error,
        },
      };

    default:
      return state;
  }
};

export { formReducer, INITIAL_STATE };
