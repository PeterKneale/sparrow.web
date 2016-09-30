import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

const Toolbox = ({visible, onDelete, onArchive, onEmail}) => {
    return (
            <ButtonToolbar hidden={!visible}>
                <ButtonGroup>
                    <Button onClick={() => onArchive() }><Glyphicon glyph="tag" /> Tag</Button>
                    <Button onClick={() => onEmail() }><Glyphicon glyph="envelope" /> Email</Button>
                    <Button bsStyle="danger" onClick={() => onDelete() }><Glyphicon glyph="trash" /> Delete</Button>
                </ButtonGroup>
                <ButtonGroup className="pull-right">
                    <Button><Glyphicon glyph="search" /> Search</Button>
                </ButtonGroup>
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

