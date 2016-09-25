import React, {PropTypes} from 'react'
import { Jumbotron  } from 'react-bootstrap';

const Jumbo = props => {
    return (
        <Jumbotron>
            <h1>{props.heading}</h1>
            <p>{props.body}</p>
        </Jumbotron>
    )
}

Jumbo.propTypes = {
    heading: PropTypes.string,
    body: PropTypes.string
}

module.exports = Jumbo;