import React, { Component } from "react";
import SignWith from "../../components/home/SignWith";
import WrappedRegistrationForm from "../../components/home/FormSignUp";
import Logo from "../../assets/logos/thumbpoll-logo.png";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  state = {
    size: "large"
  };
  render() {
    return (
      <div>
        <div
          style={{
            width: 480,
            margin: "0 auto",
            padding: "30px 0px",
            background: "#f5f5f5"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Link to="/">
              <img src={Logo} alt="logo" style={{ width: 300, height: 100 }} />
            </Link>
            <h1>Let’s poll with our thumb</h1>
            <div>
              <WrappedRegistrationForm />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <p style={{ marginBottom: 0 }}>
                By signing up, you agree to Thumbpoll’s
              </p>
              <p>
                <b>Terms of Service & Privacy Policy.</b>
              </p>
            </div>

            <SignWith />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
