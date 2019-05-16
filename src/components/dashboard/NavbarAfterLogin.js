import React from "react";
import { Menu, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";

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
      .then(() => window.location.reload())
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
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="polls">
            <Link to="/poll">Polls</Link>
          </Menu.Item>
          {/* <Menu.Item key="participants">
            <Link to="/participants">Participants</Link>
          </Menu.Item> */}
          <Menu.Item key="results">
            <Link to="/results">Results</Link>
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
