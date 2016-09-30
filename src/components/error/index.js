import React, {PropTypes} from 'react';
import { RotateLoader } from 'halogen';
import { Panel } from 'react-bootstrap';

const Error = ({visible, message}) => (
    <Panel header="Error" bsStyle="danger" hidden={!visible}>{message}</Panel>
)
    
Error.propTypes = {
    message : PropTypes.string,
    visible : PropTypes.bool
};

export default Error
