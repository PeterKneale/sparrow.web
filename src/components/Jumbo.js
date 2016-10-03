import React, {PropTypes} from 'react'
import { Jumbotron  } from 'react-bootstrap';

function Jumbo (props)  {
    return (
       <Jumbotron>
            <h1>{props.heading}</h1>
            <p>{props.body}</p>
        </Jumbotron>
    );
};

export default Jumbo;