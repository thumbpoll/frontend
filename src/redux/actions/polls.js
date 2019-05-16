import axios from "axios";

const fetchPoll = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/polls`)
    .then(res =>
      dispatch(
        {
          type: "FETCH_POLL",
          payload: res.data
        },
        console.log(res)
      )
    )
    .catch(err => console.log(err));
};

export default fetchPoll;
