import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { PanelBody, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';

const Create = ({visible, onCancel, onSave}) => {
    return (
        <div className="panel panel-default" hidden={!visible}>
            <div className="panel-heading">
                Create a new client
            </div>
            <div className="panel-body">
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Client Name</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="ACME Industry Pty Ltd" />
                    </FormGroup>
                    {' '}
                    <Button className="pull-right" onClick={() => onSave() } bsStyle="primary"><Glyphicon glyph="floppy-disk" /> Save</Button>
                    {' '}
                    <Button className="pull-right" onClick={() => onCancel() } ><Glyphicon glyph="remove" /> Cancel</Button>
                </Form>
            </div>
        </div>
    )
}

Create.propTypes = {
    visible: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        visible: state.mode.create_visible
    }
}

export default connect(
    mapStateToProps
)(Create)

