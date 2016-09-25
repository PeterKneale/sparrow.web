import React, {PropTypes} from 'react'
import { ReactDOM } from 'react-dom';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';
import {  Nav, NavItem } from 'react-bootstrap';

const Invoices = function (props) {
    return <Nav bsStyle="pills">
        <LinkContainer to="/invoices">
            <NavItem>Invoices</NavItem>
        </LinkContainer>
        <LinkContainer to="/invoices/recurring">
            <NavItem>Recurring</NavItem>
        </LinkContainer>
        <LinkContainer to="/invoices/received">
            <NavItem>Received</NavItem>
        </LinkContainer>
    </Nav>
};

module.exports = Invoices;

