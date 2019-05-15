const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_BEGIN": {
      return {
        ...state,
        latestError: null,
        isLoading: true
      };
    }
    case "REGISTER_USER_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response
      };
    }
    case "REGISTER_USER_ERROR": {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
        latestResponse: null
      };
    }
    default: {
      return state;
    }
  }
};

export default registerReducer;
