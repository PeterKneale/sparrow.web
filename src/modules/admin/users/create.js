import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { PanelBody, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { createUser, setMode, MODE_READ } from "./actions"

const Create = ({create_visible, creating, onCancel, onSave}) => (
    


create_visible ? 
    <div className="panel panel-default">
        <div className="panel-heading">
            Create a new user
        </div>
        <div className="panel-body">
            <Form>
                <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl type="text" placeholder="John" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl type="text" placeholder="Smith"/>
                </FormGroup>

                <p className="pull-right">
                    <Button onClick={() => onCancel() }><Glyphicon glyph="remove" /> Cancel</Button>
                    {' '}
                    <Button onClick={() => onSave() } bsStyle="primary" disabled={creating}><Glyphicon glyph="floppy-disk" /> Save</Button>
                </p>

            </Form>
        </div>
    </div>
: null
)


Create.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    creating: PropTypes.bool,
    create_visible: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        creating: state.usermanagement.creating,
        create_visible: state.usermanagement.create_visible
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSave: () => {dispatch(createUser('peter', 'kneale'))},
    onCancel: () => {dispatch(setMode(MODE_READ))}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create)

