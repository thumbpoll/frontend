import React from "react";
import Logo from "../../assets/logos/thumbpoll-logo.png";
import LogoMini from "../../assets/logos/thumbpoll-logo-mini.png";
import NavbarDashboard from "../../components/dashboard/NavbarAfterLogin";
import ResultCollapse from "../../components/dashboard/Collapse";
import { Layout, Menu, Icon } from "antd";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/profileAction";

const { Header, Content, Footer, Sider } = Layout;

class PollResult extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return !this.props.isAuthenticated ? (
      <Redirect to="/login" />
    ) : (
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
                <Icon type="file" />
                <span>Import</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <NavbarDashboard />
            </Header>
            <Content style={{ margin: "0 16px", paddingTop: "15px" }}>
              <div style={{ background: "#fff", minHeight: 360 }}>
                <ResultCollapse />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Thumbpoll © 2019</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.profile.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(withRouter(PollResult));
