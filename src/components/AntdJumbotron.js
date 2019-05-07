import React, { Component } from "react";
import RideThumb from "../assets/images/ride-thumb.png";
import { Button } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "#75C4FF",
              minHeight: 30,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 10px"
            }}
          >
            <h1 style={{ color: "white", marginLeft: "10px" }}>
              Let's poll <br /> with our thumb
            </h1>
            <img
              src={RideThumb}
              alt="ride-thumb"
              style={{ width: "219px", height: "187px", right: "0" }}
            />
          </div>
          <Button
            type="primary"
            style={{
              backgroundColor: "#71C379",
              marginBottom: "15px"
            }}
          >
            Get Started
          </Button>
        </Content>
      </div>
    );
  }
}
export default Jumbotron;
