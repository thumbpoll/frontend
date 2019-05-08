import React, { Component } from "react";
import Logo from "../assets/logos/thumbpoll-logo.png";
import { Layout } from "antd";
import NavbarMenu from "../components/Navbar";
import Jumbotron from "../components/AntdJumbotron";
import Connect from "../assets/images/connect.png";
import FooterContent from "../components/FooterContent";
const { Footer } = Layout;

class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: 480,
            margin: "0 auto",
            backgroundColor: "#75C4FF"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={Logo} alt="logo" style={{ width: 158, height: 59 }} />
            <NavbarMenu />
          </div>
          <Jumbotron />
        </div>
        <div
          style={{
            width: 480,
            margin: "0 auto"
          }}
        >
          <h3 style={{ textAlign: "center", margin: "10px 0" }}>
            Why poll with Thumbpoll?
          </h3>
          <div
            style={{
              padding: "10px 25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            <h4>
              Poll with everyone, every time,
              <br /> and everywhere around the <br />
              World
            </h4>
            <img
              src={Connect}
              alt="connect"
              style={{ width: "197px", height: "145px" }}
            />
          </div>
          <Footer style={{ textAlign: "center", fontSize: "11px" }}>
            <FooterContent />
          </Footer>
        </div>
      </div>
    );
  }
}

export default Home;
