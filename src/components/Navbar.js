import React from "react";
import { Menu } from "antd";

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
        <Menu.Item key="about">About us</Menu.Item>
        <Menu.Item key="login">Login</Menu.Item>
        <Menu.Item key="signup">Sign up</Menu.Item>
      </Menu>
    );
  }
}

export default NavbarMenu;
