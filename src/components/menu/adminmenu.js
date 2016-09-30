import React, {PropTypes} from 'react'
import { ReactDOM } from 'react-dom';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const AdminMenu = function (props) {
    return <Nav bsStyle="tabs">
        <LinkContainer to="/admin/users">
            <NavItem>User Management</NavItem>
        </LinkContainer>
        <LinkContainer to="/admin/account">
            <NavItem>Account Management</NavItem>
        </LinkContainer>
        <LinkContainer to="/admin/settings">
            <NavItem>Settings</NavItem>
        </LinkContainer>
    </Nav>
};

module.exports = AdminMenu;

