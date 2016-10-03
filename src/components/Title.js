import React from 'react'
import { PageHeader } from 'react-bootstrap';

function Title (props)  {
    return (
       <PageHeader>{props.heading} <small>{props.subheading}</small></PageHeader>
    );
};

export default Title;