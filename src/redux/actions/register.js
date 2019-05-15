import axios from "axios";

export const registerUserBegin = () => ({
  type: "REGISTER_USER_BEGIN"
});

export const registerUserSuccess = response => {
  return {
    type: "REGISTER_USER_SUCCESS",
    payload: {
      response
    }
  };
};

export const registerUserError = error => ({
  type: "REGISTER_USER_ERROR",
  payload: {
    error
  }
});

export const registerUser = payload => {
  console.log(payload);
  return dispatch => {
    dispatch(registerUserBegin());
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, payload)
      .then(response => {
        console.log("test2");
        console.info("response:", response);
        dispatch(registerUserSuccess(response));
        return response;
      })
      .catch(error => {
        console.error("error: ", error);
        dispatch(registerUserError(error));
      });
  };
};
