import React from "react";
import { Menu, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";

class NavbarDashboard extends React.Component {
  state = {
    current: ""
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
          <Link to="/">Log out</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="polls">
            <Link to="/poll">Polls</Link>
          </Menu.Item>
          <Menu.Item key="participants">
            <Link to="/participants">Participants</Link>
          </Menu.Item>
          <Menu.Item key="results">
            <Link to="/results">Results</Link>
          </Menu.Item>
        </Menu>
        <Dropdown overlay={menuAvatar} trigger={["click"]}>
          <a className="ant-dropdown-link" href="#">
            <Avatar
              style={{ backgroundColor: "#87d068", margin: "10px 10px" }}
              icon="user"
            />
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default NavbarDashboard;
