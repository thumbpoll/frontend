import React, { Component } from "react";
import Logo from "../assets/logos/thumbpoll-logo.png";
import { Layout } from "antd";
import NavbarMenu from "../components/Navbar";
import Jumbotron from "../components/AntdJumbotron";
import FooterContent from "../components/FooterContent";
import Articles from "../components/ArticleWhyPollWithUs";
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
            <img
              src={Logo}
              alt="logo"
              style={{ width: "auto", height: 59, marginLeft: "10px" }}
            />
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
          <h3 style={{ textAlign: "center", margin: "25px 0" }}>
            Why poll with Thumbpoll?
          </h3>
          <Articles />
          <Footer style={{ textAlign: "center", fontSize: "11px" }}>
            <FooterContent />
          </Footer>
        </div>
      </div>
    );
  }
}

export default Home;
