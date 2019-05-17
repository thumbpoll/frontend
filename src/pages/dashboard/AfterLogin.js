import React from "react";
import NavbarDashboard from "../../components/dashboard/NavbarAfterLogin";
import PollModal from "../../components/dashboard/ModalCreatePoll";
import { Layout } from "antd";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/profileAction";
import { Emoji } from "emoji-mart";

const { Header, Content, Footer } = Layout;

class Dashboard extends React.Component {
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
      (this.props.name,
      (
        <div
          style={{
            width: 480,
            margin: "0 auto"
          }}
        >
          <Layout className="layout" style={{ minHeight: "100vh" }}>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <NavbarDashboard />
              </Header>
              <Content style={{ margin: "0 16px", paddingTop: "15px" }}>
                <div
                  style={{
                    padding: 24,
                    background: "#fff",
                    minHeight: 360,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <h1>
                    Welcome back, {this.props.name}{" "}
                    <Emoji emoji=":blush:" size={17} />
                  </h1>
                  <br />
                  <PollModal />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>Thumbpoll © 2019</Footer>
            </Layout>
          </Layout>
        </div>
      ))
    );
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.profile.isAuthenticated,
  name: store.profile.name
});

export default connect(
  mapStateToProps,
  { login }
)(withRouter(Dashboard));
