import React from "react";
import { Menu, Avatar } from "antd";
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
        <Avatar
          style={{ backgroundColor: "#87d068", margin: "10px 10px" }}
          icon="user"
        />
      </div>
    );
  }
}

export default NavbarDashboard;
