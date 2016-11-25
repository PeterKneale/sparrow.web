import React, {PropTypes} from 'react'
import { Panel } from 'react-bootstrap';

const Notice = ({header, body, style}) => {
    if(header && body){
        return <Panel header={header} bsStyle={style}>{body}</Panel>
    }
    else if(body){
        return <Panel bsStyle={style}>{body}</Panel>
    }
    return null
}

Notice.propTypes = {
    header : PropTypes.string,
    body : PropTypes.string,
    style : PropTypes.string
};

export default Notice;