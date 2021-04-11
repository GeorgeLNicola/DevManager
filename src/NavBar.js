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
      <img id="logo" src={logo} width="70px" height="70px" alt="Logo" />
      </Navbar.Brand>
        <NavDropdown bg="black" title="Menu" id="collasible-nav-dropdown" style={{ color: "#5299d3" }}>
        <NavDropdown.Item style={{ color: "#5299d3" }} target="_blank" href="https://github.com/GeorgeLNicola/DevManager">About</NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} target="_blank" href="https://georgenicola.net">Contact</NavDropdown.Item>
      </NavDropdown>    
    </Navbar>
  );
};

export default NavBar;

