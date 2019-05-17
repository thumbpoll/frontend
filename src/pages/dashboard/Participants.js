import React from "react";
import NavbarDashboard from "../../components/dashboard/NavbarAfterLogin";
import { Layout } from "antd";
import ParticipantTable from "../../components/dashboard/ParticipantTables";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/profileAction";

const { Header, Content, Footer } = Layout;

class Participant extends React.Component {
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
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <NavbarDashboard />
            </Header>
            <Content style={{ margin: "0 16px", paddingTop: "15px" }}>
              <div style={{ background: "#fff", minHeight: 360 }}>
                <ParticipantTable />
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
)(withRouter(Participant));
