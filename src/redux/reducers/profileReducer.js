const initialState = {
  token: null,
  name: null,
  email: null,
  isAuthenticated: false,
  isAdmin: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
