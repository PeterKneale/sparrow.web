import React, {PropTypes} from 'react'
import { ReactDOM } from 'react-dom';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const People = function (props) {
    return <Nav bsStyle="tabs">
        <LinkContainer to="/people/clients">
            <NavItem>Clients</NavItem>
        </LinkContainer>
        <LinkContainer to="/people/staff">
            <NavItem>Staff</NavItem>
        </LinkContainer>
        <LinkContainer to="/people/contractors">
            <NavItem>Contractors</NavItem>
        </LinkContainer>
    </Nav>
};

module.exports = People;

