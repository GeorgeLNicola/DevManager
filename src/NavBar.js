import React from 'react';
import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  return (
    <Navbar bg="black" variant="dark" sticky="top">
      <Navbar.Brand>
      <img src={logo} width="70px" height="70px" alt="Logo" />
      </Navbar.Brand>
        <NavDropdown bg="black" title="Menu" id="collasible-nav-dropdown" style={{ color: "#5299d3" }}>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/app.js">Home</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/about.js">About</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/contact.js">Contact</NavDropdown.Item>
      </NavDropdown>    
    </Navbar>
  );
};

export default NavBar;