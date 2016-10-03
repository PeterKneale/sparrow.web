import React, {PropTypes} from 'react'
import { ReactDOM } from 'react-dom';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function Menu (props)  {
    return (
        <Navbar inverse>
            <div className="container-fluid">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">{props.app}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/invoices" >
                            <NavItem>Invoices</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/estimates">
                            <NavItem>Estimates</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/expenses">
                            <NavItem>Expenses</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/timesheets">
                            <NavItem>Timesheets</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/reporting">
                            <NavItem>Reporting</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                            <NavItem>Administration</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown title={props.username} id="basic-nav-dropdown">
                            <LinkContainer to="/admin/account">
                                <NavItem>Account</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/admin/settings">
                                <NavItem>Settings</NavItem>
                            </LinkContainer>
                            <MenuItem>Preferences</MenuItem>
                            <MenuItem divider />
                            <MenuItem>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Menu;