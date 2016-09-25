import React, {PropTypes} from 'react';
import { Button } from 'react-bootstrap';

const CreateClientButton = ({onCreateClick}) => {
    return (
        <Button bsStyle="primary" bsSize="large" className="pull-right" onClick={()=>onCreateClick()}>Create Client</Button> 
    );
};

CreateClientButton.propTypes = {
    onCreateClick: PropTypes.func
};

export default CreateClientButton;
