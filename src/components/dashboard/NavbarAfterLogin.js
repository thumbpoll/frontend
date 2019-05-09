import React from "react";
import { Menu, Avatar } from "antd";

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
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="polls">Polls</Menu.Item>
          <Menu.Item key="participants">Participants</Menu.Item>
          <Menu.Item key="results">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Results
            </a>
          </Menu.Item>
        </Menu>
        <Avatar
          style={{ backgroundColor: "#87d068", margin: "10px 10px" }}
          icon="user"
        />
      </div>
    );
  }
}

export default NavbarDashboard;
