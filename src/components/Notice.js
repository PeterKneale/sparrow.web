import React, {PropTypes} from 'react'
import { Panel } from 'react-bootstrap';

const Notice = ({header, body, style}) => {
    if(body && header){
        return <Panel header={header} bsStyle={style}>{body}</Panel>
    }
    return null
}

Notice.propTypes = {
    message : PropTypes.string,
    body : PropTypes.string,
    style : PropTypes.string
};

export default Notice;
