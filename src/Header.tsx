import React from "react";
import { Menu, Container } from "semantic-ui-react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "20px",
  margin: "5px",
  marginTop: "88%",
  padding: "5px",
  backgroundColor: "#94e5e7cb",
};

const titleStyle = {
  margin: "0",
};

const listItemStyle = {
  margin: "0 20px",
};

const Header = () => {
  return (
    <Menu>
      <Container style={containerStyle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={titleStyle}>DevLink Marketplace</h3>
          <Menu.Item as="a" style={listItemStyle}>
            Find Dev
          </Menu.Item>
          <Menu.Item as="a" style={listItemStyle}>
            Find Jobs
          </Menu.Item>
          <Menu.Item as="a" style={listItemStyle}>
            Login
          </Menu.Item>
          <Menu.Item as="a" style={listItemStyle}>
            Create Account
          </Menu.Item>
        </div>
      </Container>
    </Menu>
  );
};

export default Header;
