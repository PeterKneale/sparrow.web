import React from 'react';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar inverse>
    
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Sparrow</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
            
        <Nav>
            <LinkContainer to="/areas/dashboard" >
                <NavItem>Dashboard</NavItem>
            </LinkContainer>
            <LinkContainer to="/areas/devices">
                <NavItem>Devices</NavItem>
            </LinkContainer>
            <LinkContainer to="/areas/users">
                <NavItem>Users</NavItem>
            </LinkContainer>
            <LinkContainer to="/areas/account">
                <NavItem>Account</NavItem>
            </LinkContainer>
        </Nav>
        
    </Navbar>
  );
};

export default Menu;