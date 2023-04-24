import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">
          Inventario<span style={{ color: "green" }}>Online</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Ciudades" id="basic-nav-dropdown">
              <Link to={"/"}>
                <NavDropdown.Item href="#action/3.1">Todos</NavDropdown.Item>
              </Link>

              <Link to={`/category/${"taller"}`}>
                <NavDropdown.Item href="#action/3.2">Taller</NavDropdown.Item>
              </Link>
              <Link to={`/category/${"rincon-de-los-sauces"}`}>
                <NavDropdown.Item href="#action/3.2">
                  Rincon de los Sauces
                </NavDropdown.Item>
              </Link>

              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
