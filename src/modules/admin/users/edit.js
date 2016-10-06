import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import { navigate, updateUser } from "./actions"
import { Notice, Title, MenuAdmin } from '../../../components';

const Edit = ({id, name, first_name, last_name, updating, onCancel, onSave}) => (
    <Panel header="Edit a user">
        <Form>
            <FormGroup>
                <ControlLabel>First Name</ControlLabel>
                <FormControl type="text" value={first_name}/>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl type="text" value={last_name}/>
            </FormGroup>

            <p className="pull-right">
                <Button onClick={() => onCancel() } disabled={updating}><Glyphicon glyph="remove" /> Cancel</Button>
                {' '}
                <Button onClick={() => onSave(id) } bsStyle="primary" disabled={updating}><Glyphicon glyph="floppy-disk" /> Update</Button>
            </p>
        </Form>
    </Panel>
)

Edit.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    updating: PropTypes.bool,
    id: PropTypes.number,
    name: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        updating: state.usermanagement.updating,
        id: state.usermanagement.user.id,
        name: state.usermanagement.user.name,
        first_name: state.usermanagement.user.first_name,
        last_name: state.usermanagement.user.last_name
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSave: (id) => { dispatch(updateUser(id, 'peter', 'kneale')) },
    onCancel: () => { navigate('/admin/users') }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)