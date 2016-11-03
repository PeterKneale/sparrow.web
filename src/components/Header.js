import React, {PropTypes} from 'react';
import { PageHeader } from 'react-bootstrap';

const Header = ({heading}) => (
    <PageHeader>{heading}</PageHeader>
);

Header.propTypes = {
    heading : PropTypes.string
};

export default Header;
