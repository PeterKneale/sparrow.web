import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

import { Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { setVisibility } from "./actions"

const CreateClientForm = ({visible, onCancelClick, onSaveClick}) => {
   return (
        <Panel header="Create a new client" hidden={!visible}>
            <Form inline>
                <FormGroup>
                    <ControlLabel>Client Name</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="ACME Industry Pty Ltd" />
                </FormGroup>
                {' '}
                <Button className="pull-right" onClick={()=>onSaveClick()} bsStyle="primary">Save</Button>
                <Button className="pull-right" onClick={()=>onCancelClick()} >Cancel</Button>
            </Form>
        </Panel>
    )
}

CreateClientForm.propTypes = {
    visible: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    visible:state.people.visible
  }
}

export default connect(
  mapStateToProps
)(CreateClientForm)

