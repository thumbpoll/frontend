import React, { Component } from "react";
import WrappedNormalLoginForm from "../components/FormLogin";
import SignWith from "../components/SignWith";
import Logo from "../assets/logos/thumbpoll-logo.png";
import { Button, Form } from "antd";
import { Link } from "react-router-dom";

export class Login extends Component {
  state = {
    size: "large"
  };

  render() {
    const size = this.state.size;
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
              <WrappedNormalLoginForm />
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
                Click “Login” above to accept Thumbpoll’s
              </p>
              <p>
                <b>Terms of Service & Privacy Policy.</b>
              </p>
            </div>
            <div>
              <Form>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  shape="round"
                  value="large"
                  size={size}
                  ghost
                >
                  No account? Create one
                </Button>
              </Form>
            </div>
            <SignWith />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
