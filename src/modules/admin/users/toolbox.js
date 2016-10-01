import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

const Toolbox = ({onDelete, onArchive, onEmail, onRefresh}) => {
    return (
        <ButtonToolbar>
            <Button bsSize="small" onClick={() => onEmail() }><Glyphicon glyph="envelope" /> Email</Button>
            <Button bsSize="small" onClick={() => onArchive() }><Glyphicon glyph="trash" /> Archive</Button>
            <Button bsSize="small" onClick={() => onDelete() }><Glyphicon glyph="trash" /> Delete</Button>
            <Button bsSize="small" onClick={() => onRefresh() }><Glyphicon glyph="refresh" /> Refresh</Button>
            <Button bsSize="small" className="pull-right"><Glyphicon glyph="search" /> Search</Button>                
        </ButtonToolbar>
    )
}

Toolbox.propTypes = {
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onEmail: PropTypes.func,
    onRefresh: PropTypes.func
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps
)(Toolbox)

