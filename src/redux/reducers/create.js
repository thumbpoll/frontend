const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false,
  success: false
};

const createPoll = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POLL_BEGIN": {
      return {
        ...state,
        isLoading: true,
        latestError: null
      };
    }
    case "CREATE_POLL_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response,
        success: true
      };
    }
    case "CREATE_POLL_ERROR": {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
        latestResponse: null
      };
    }
    default:
      return state;
  }
};

export default createPoll;
