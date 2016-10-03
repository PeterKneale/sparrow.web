import React, {PropTypes} from 'react';
import { PageHeader } from 'react-bootstrap';

const Title = ({title, subtitle}) => (
    <PageHeader>{title} <small>{subtitle}</small></PageHeader>
);

Title.propTypes = {
    title : PropTypes.string,
    subtitle : PropTypes.string
};

export default Title;
