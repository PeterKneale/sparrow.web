import React, {PropTypes} from 'react'
import { Panel } from 'react-bootstrap';

const Notification = ({header, body, level}) => {
    if(header && body){
        return <Panel header={header} bsStyle={level}>{body}</Panel>
    }
    else if(body){
        return <Panel bsStyle={level}>{body}</Panel>
    }
    return null
}

Notification.propTypes = {
    header : PropTypes.string,
    body : PropTypes.string,
    level : PropTypes.string
};

export default Notification;