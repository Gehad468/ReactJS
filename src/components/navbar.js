import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      style={{
        background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ width: "200px", height: "110px", marginLeft: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="h3 ms-auto p-3 "  style={{ justifyContent: "space-between", width: "100%" }}>
            <Nav.Link as={NavLink} to="/" activeClassName="active" exact style={{ color: "white" }}>الرئيسية</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active" style={{ color: "white" }}>من نحن</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active" style={{ color: "white" }}>تواصل معنا</Nav.Link>
            <Nav.Link as={NavLink} to="/signup" activeClassName="active" style={{ color: "white" }}>إنشاء حساب</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
