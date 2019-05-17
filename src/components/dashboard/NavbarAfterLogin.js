import React from "react";
import { Menu, Avatar, Dropdown, message, Icon } from "antd";
import { Link } from "react-router-dom";
import LogoMini from "../../assets/logos/thumbpoll-logo-mini.png";

// const logoutUserFromProfile = (profile, dispatch) => {
//   // only logoutUser if the profile isAuthenticated
//   profile.isAuthenticated && dispatch(logoutUser(profile));
// };

class NavbarDashboard extends React.Component {
  state = {
    current: ""
  };

  logout = event => {
    event.preventDefault();
    window.localStorage.clear();
    // this.props.history.push("/login");
    fetch("/logout", { method: "POST" })
      .then(() => {
        message.success("See you next time", 1);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    let menuAvatar = (
      <Menu>
        <Menu.Item key="0">Profile</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Link to="/" onClick={this.logout}>
            Log out
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div className="logo" style={{ height: "60px" }}>
          <img
            src={LogoMini}
            alt="Logo"
            style={{
              height: "50px",
              width: "auto",
              margin: "5px 10px"
            }}
          />
        </div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="dashboard">
            <Link to="/dashboard">
              <Icon type="edit" />
              <span>Create Poll</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="polls">
            <Link to="/poll">
              <Icon type="notification" />
              <span>Polls</span>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="participants">
            <Link to="/participants">Participants</Link>
          </Menu.Item> */}
          <Menu.Item key="results">
            <Link to="/results">
              <Icon type="pie-chart" />
              <span>Results</span>
            </Link>
          </Menu.Item>
        </Menu>
        <Dropdown overlay={menuAvatar} trigger={["click"]}>
          <a className="ant-dropdown-link" href="#link">
            <Avatar
              style={{
                backgroundColor: "#87d068",
                margin: "10px 10px",
                marginRight: "30px"
              }}
              icon="user"
            />
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default NavbarDashboard;
