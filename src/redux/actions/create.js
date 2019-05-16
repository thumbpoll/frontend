import axios from "axios";

export const createPollBegin = () => ({
  type: "CREATE_POLL_BEGIN"
});

export const createPollSuccess = response => ({
  type: "CREATE_POLL_SUCCESS",
  payload: {
    response
  }
});

export const createPollError = error => ({
  type: "CREATE_POLL_ERROR",
  payload: {
    error
  }
});

export const createPoll = payload => {
  return dispatch => {
    dispatch(createPollBegin());
    axios
      .post(`${process.env.REACT_APP_API_URL}/polls`, payload)
      .then(response => {
        console.info("response:", response);
        dispatch(createPollSuccess(response));
        return response;
      })
      .catch(error => {
        console.error("error:", error);
        dispatch(createPollError(error));
      });
  };
};
