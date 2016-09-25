import React, {PropTypes} from 'react'
import { ReactDOM } from 'react-dom';
import { PageHeader } from 'react-bootstrap';

const Header = function (props) {
    return  <PageHeader>{props.heading} <small>{props.subheading}</small></PageHeader>
};

Header.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
};

module.exports = Header;