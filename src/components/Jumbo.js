import React, {PropTypes} from 'react'
import { Jumbotron  } from 'react-bootstrap';

const Jumbo = ({heading, body}) => (
    <Jumbotron>
        <h1>{heading}</h1>
        <p>{body}</p>
    </Jumbotron>
);

Jumbo.propTypes = {
    heading : PropTypes.string,
    body : PropTypes.string
};

export default Jumbo;
