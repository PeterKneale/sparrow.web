import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import { navigate, updateUser } from "./actions"
import { Notice, Title, MenuAdmin } from '../../../components';

const Edit = ({error, updating, onCancel, onSave}) => (
        <Panel header="Edit a user">
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
                    <Button onClick={() => onCancel() } disabled={updating}><Glyphicon glyph="remove" /> Cancel</Button>
                    {' '}
                    <Button onClick={() => onSave() } bsStyle="primary" disabled={updating}><Glyphicon glyph="floppy-disk" /> Update</Button>
                </p>
            </Form>
        </Panel>
)

Edit.propTypes = {
    error: PropTypes.string,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    updating: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        error: state.usermanagement.error,
        updating: state.usermanagement.updating
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSave: () => { dispatch(updateUser(236, 'peter', 'kneale'))},
    onCancel: () => {navigate('/admin/users')}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)