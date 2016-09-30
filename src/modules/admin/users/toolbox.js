import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

const Toolbox = ({visible, onDelete, onArchive, onEmail}) => {
    return (
        <ButtonToolbar hidden={!visible}>
            <Button bsSize="small" onClick={() => onEmail() }><Glyphicon glyph="envelope" /> Email</Button>
            <Button bsSize="small" onClick={() => onArchive() }><Glyphicon glyph="trash" /> Archive</Button>
            <Button bsSize="small" onClick={() => onDelete() }><Glyphicon glyph="trash" /> Delete</Button>
            <Button bsSize="small" className="pull-right"><Glyphicon glyph="search" /> Search</Button>                
        </ButtonToolbar>
    )
}

Toolbox.propTypes = {
    visible: PropTypes.bool,
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onEmail: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        visible: state.mode.toolbox_visible
    }
}

export default connect(
    mapStateToProps
)(Toolbox)

