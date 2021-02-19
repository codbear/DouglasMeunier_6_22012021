import actionTypes from '../actions';

const INITIAL_STATE = {
  firstName: {
    value: '',
    isError: false,
  },
  lastName: {
    value: '',
    isError: false,
  },
  email: {
    value: '',
    isError: false,
  },
  message: {
    value: '',
    isError: false,
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

    case actionTypes.TOGGLE_ERROR:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          isError: action.payload.isError,
        },
      };

    default:
      return state;
  }
};

export { formReducer, INITIAL_STATE };
