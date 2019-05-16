import axios from "axios";

const fetchPoll = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/polls`)
    .then(res =>
      dispatch(
        {
          type: "FETCH_POLL",
          payload: res.data.polls
        },
        console.log(res.data.polls)
      )
    )
    .catch(err => console.log(err));
};

export default fetchPoll;
