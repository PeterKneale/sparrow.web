import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { PanelBody, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';

const Create = ({create_visible, onCancel, onSave}) => {
    return (
        <div className="panel panel-default" hidden={!create_visible}>
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
                        <FormControl type="text" placeholder="Smith" />
                    </FormGroup>

                    <p className="pull-right">
                        <Button onClick={() => onCancel() } ><Glyphicon glyph="remove" /> Cancel</Button>
                        {' '}
                        <Button onClick={() => onSave() } bsStyle="primary"><Glyphicon glyph="floppy-disk" /> Save</Button>
                    </p>

                </Form>
            </div>
        </div>
    )
}

Create.propTypes = {
    create_visible: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        create_visible: state.usermanagement.create_visible
    }
}

export default connect(
    mapStateToProps
)(Create)

