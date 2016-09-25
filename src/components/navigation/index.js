import React, {PropTypes} from 'react'
import { ReactDOM } from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = function (props) {
    return <Navbar>
        <div className="container-fluid">
        <Navbar.Header>
        <Navbar.Brand>
            <a href="#">{props.app}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="#">People</NavItem>
            <NavItem eventKey={2} href="#">Invoices</NavItem>
            <NavItem eventKey={2} href="#">Estimates</NavItem>
            <NavItem eventKey={2} href="#">Expenses</NavItem>
            <NavItem eventKey={2} href="#">Time Tracking</NavItem>
            <NavItem eventKey={2} href="#">Reporting</NavItem>
            
        </Nav>
        <Nav pullRight>
            <NavDropdown eventKey={3} title={props.username} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Account</MenuItem>
                <MenuItem eventKey={3.2}>Settings</MenuItem>
                <MenuItem eventKey={3.3}>Preferences</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Logout</MenuItem>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>

};

Navigation.propTypes = {
    current: PropTypes.string,
    username: PropTypes.string
};

module.exports = Navigation;

