import React, { Component } from "react";
import { Card, Button } from "antd";

export class SignWith extends Component {
  state = {
    size: "default"
  };
  render() {
    const size = this.state.size;
    return (
      <div>
        <Card style={{ width: 410, marginTop: 20, borderRadius: 10 }}>
          <p>Sign in with</p>
          <Button
            type="primary"
            shape="round"
            icon="google"
            size={size}
            style={{ marginRight: 3 }}
          >
            Google
          </Button>
          <Button
            type="primary"
            shape="round"
            icon="facebook"
            size={size}
            style={{ marginRight: 3 }}
          >
            Facebook
          </Button>
          <Button type="primary" shape="round" icon="twitter" size={size}>
            Twitter
          </Button>
        </Card>
      </div>
    );
  }
}

export default SignWith;
