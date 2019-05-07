import Logo from "../assets/logos/thumbpoll-logo.png";
import React, { Component } from "react";
import { Layout } from "antd";
import MenuHome from "../components/HomeMenu";
import RideThumb from "../assets/images/ride-thumb.png";
const { Content, Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <div style={{ width: 480, margin: "0 auto", backgroundColor: "#75C4FF" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={Logo} alt="logo" style={{ width: 158, height: 59 }} />
          <MenuHome />
        </div>
        <Content
          style={{
            backgroundColor: "#75C4FF",
            minHeight: 30,
            display: "flex",
            justifyContent: " space-between",
            alignItems: "center",
            padding: "10px 10px"
          }}
        >
          <h1 style={{ color: "white" }}>
            Let's poll <br /> with our thumb
          </h1>
          <img
            src={RideThumb}
            alt="ride-thumb"
            style={{ width: "219px", height: "187px", right: "0" }}
          />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    );
  }
}

export default Home;
