import React, { Component } from "react";
import Logo from "../../assets/logos/thumbpoll-logo.png";
import { Layout, BackTop } from "antd";
import NavbarMenu from "../../components/home/Navbar";
import Jumbotron from "../../components/home/AntdJumbotron";
import FooterContent from "../../components/home/FooterContent";
import ArticlesUs from "../../components/home/ArticleWhyPollWithUs";
import ArticlesWorks from "../../components/home/ArticleHowWeWorks";
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
          <h3 id="about" style={{ textAlign: "center", margin: "25px 0" }}>
            Why poll with Thumbpoll?
          </h3>
          <ArticlesUs />
          <div style={{ backgroundColor: "#F5F5F5" }}>
            <h3 style={{ textAlign: "center", padding: "25px 0" }}>
              How’s Thumbpoll work?
            </h3>
            <ArticlesWorks />
          </div>
          <Footer
            style={{
              textAlign: "center",
              fontSize: "11px",
              backgroundColor: "#c4c4c4"
            }}
          >
            <FooterContent />
          </Footer>
          <div>
            <BackTop style={{ opacity: 0.7 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
