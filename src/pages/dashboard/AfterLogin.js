import React from "react";
import Logo from "../../assets/logos/thumbpoll-logo.png";
import LogoMini from "../../assets/logos/thumbpoll-logo-mini.png";
import NavbarDashboard from "../../components/dashboard/NavbarAfterLogin";
import PollModal from "../../components/dashboard/ModalCreatePoll";
import { Layout, Menu, Empty, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <div
        style={{
          width: 480,
          margin: "0 auto"
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" style={{ height: "60px" }}>
              {this.state.collapsed ? (
                <img
                  src={LogoMini}
                  alt="Logo"
                  style={{
                    height: "60px",
                    width: "auto",
                    margin: "5px 10px"
                  }}
                />
              ) : (
                <img
                  src={Logo}
                  alt="Logo"
                  style={{
                    height: "60px",
                    width: "auto",
                    margin: "5px 10px 0 20px"
                  }}
                />
              )}
            </div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Link to="/dashboard">
                  <Icon type="edit" />
                  <span>Create Poll</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/">
                  <Icon type="file" />
                  <span>Import</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <NavbarDashboard />
            </Header>
            <Content style={{ margin: "0 16px", paddingTop: "15px" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  imageStyle={{
                    height: 60
                  }}
                >
                  <PollModal />
                </Empty>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Thumbpoll © 2019</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
