const initialState = {
  pollList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POLL":
      return {
        ...state,
        pollList: action.payload
      };
    default:
      return state;
  }
};
