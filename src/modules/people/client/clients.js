import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Checkbox, ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import { setVisibility, CREATE_COMPONENT, LIST_COMPONENT, TOOLBOX_COMPONENT } from "./actions"
import Header from '../../../components/header';
import Create from './create';
import List from './list';
import Toolbox from './toolbox';

const Clients = ({onCreate, onSave, onCancel}) => {
    return (
        <div>
            <Button bsStyle="primary" bsSize="large" className="pull-right" onClick={() => onCreate() }><Glyphicon glyph="plus" /> Create Client</Button>
            <Header heading="Clients" subheading="Add new clients and manage existing ones..." />
            <Create onSave={() => onSave() } onCancel={() => onCancel() } />
            <List />
        </div>
    )
}

Clients.propTypes = {
    onCreate: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
}

const mapStateToProps = (state) => {
    return {} // TODO: Figure out why this cant be removed
}

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => {
        dispatch(setVisibility(CREATE_COMPONENT, true))
        dispatch(setVisibility(LIST_COMPONENT, false))
        dispatch(setVisibility(TOOLBOX_COMPONENT, false))
    },
    onSave: () => {
        dispatch(setVisibility(CREATE_COMPONENT,false))
        dispatch(setVisibility(LIST_COMPONENT, true))
        dispatch(setVisibility(TOOLBOX_COMPONENT, true))
    },
    onCancel: () => {
        dispatch(setVisibility(CREATE_COMPONENT,false))
        dispatch(setVisibility(LIST_COMPONENT, true))
        dispatch(setVisibility(TOOLBOX_COMPONENT, true))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Clients)