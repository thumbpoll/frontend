import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class NavbarMenu extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ backgroundColor: "#75C4FF", color: "#fff" }}
      >
        <Menu.Item key="about">
          <a href="#about">About us</a>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link to="/signup">Sign up</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavbarMenu;
