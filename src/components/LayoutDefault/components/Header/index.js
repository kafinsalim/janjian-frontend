import React, { Component } from "react";
import "./styles.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../../../../assets";
// import { connect } from 'react-redux';

export default class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className="wrapper-header">
        <Navbar.Brand href="/">
          <img
            src={images.iconJanjian}
            alt="logo-janjian"
            className="logo-janjian-header"
          />
          <span className="text-janjian">Janjian</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ marginRight: "25px" }}>
            <Nav.Link href="create" style={{ color: "#FF880A" }}>
              Buat Janji Baru
            </Nav.Link>
            <NavDropdown title="Sandbox" id="basic-nav-dropdown">
              <NavDropdown.Item href="users">Users</NavDropdown.Item>
              <NavDropdown.Item href="janji">Janji</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="swapi">Swapi</NavDropdown.Item>
            </NavDropdown>
            <div
              style={{
                borderLeft: "1px solid rgba(46, 62, 72, 0.12)",
                margin: "7px 15px"
              }}
            />
            <Nav.Link href="login" className="header-button">
              Login
            </Nav.Link>
            <Nav.Link href="sign-up" className="header-button">
              Registrasi
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// const mapStateToProps = (state) => ({
//     user: state.user
// })

// export default connect(mapStateToProps,null)(Header);
