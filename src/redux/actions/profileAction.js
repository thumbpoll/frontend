import axios from "axios";

export const login = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/users/login`, data)
    .then(res => {
      window.localStorage.token = res.data.token;
      dispatch({
        type: "login",
        payload: {
          token: res.data.token,
          email: res.data.user.email,
          name: res.data.user.fullName
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};
