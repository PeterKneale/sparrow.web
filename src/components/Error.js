import React, {PropTypes} from 'react'
import { Panel } from 'react-bootstrap';

const Error = ({visible, message}) => (
    <Panel 
        header="Error" 
        bsStyle="danger" 
        hidden={!visible}>
        {message}
    </Panel>
);

Error.propTypes = {
    visible : PropTypes.bool,
    message : PropTypes.string
};

export default Error;
