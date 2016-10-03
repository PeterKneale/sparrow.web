import React from 'react';
import { Panel } from 'react-bootstrap';

const Error = ({visible, message}) => {
    return (
        <Panel header="Error" bsStyle="danger" hidden={!visible}>{message}</Panel>
    );
};

export default Error;