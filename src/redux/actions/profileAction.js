import axios from "axios";
import { message } from "antd";

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
      message.success("Welcome back", 1);
    })
    .catch(err => {
      console.log(err);
      message.error("Login failed", 1);
    });
};
