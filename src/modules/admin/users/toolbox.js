import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

const Toolbox = ({onRefresh}) => {
    return (
        <ButtonToolbar>
            <Button bsSize="small" onClick={() => onRefresh() }><Glyphicon glyph="refresh" /> Refresh</Button>
            <Button bsSize="small" className="pull-right"><Glyphicon glyph="search" /> Search</Button>                
        </ButtonToolbar>
    )
}

Toolbox.propTypes = {
    onRefresh: PropTypes.func
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps
)(Toolbox)

