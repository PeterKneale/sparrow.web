import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import { navigate, createUser } from "./actions"
import { Notice, Title, MenuAdmin } from '../../../components';

const Create = ({error, creating, onCancel, onSave}) => (
        <Panel header="Create a new user">
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
                    <Button onClick={() => onCancel() } disabled={creating}><Glyphicon glyph="remove" /> Cancel</Button>
                    {' '}
                    <Button onClick={() => onSave() } bsStyle="primary" disabled={creating}><Glyphicon glyph="floppy-disk" /> Save</Button>
                </p>
            </Form>
        </Panel>
)

Create.propTypes = {
    error: PropTypes.string,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    creating: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        error: state.usermanagement.error,
        creating: state.usermanagement.creating
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSave: () => {dispatch(createUser('peter', 'kneale'))},
    onCancel: () => {navigate('/admin/users')}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create)