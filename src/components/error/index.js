import React, {PropTypes} from 'react';
import { RotateLoader } from 'halogen';
import { Panel } from 'react-bootstrap';

const Error = ({error, message}) => (
    <Panel header="Error" bsStyle="danger" hidden={!error}>{message}</Panel>
)
    
Error.propTypes = {
    error : PropTypes.bool,
    message : PropTypes.string
};

export default Error
