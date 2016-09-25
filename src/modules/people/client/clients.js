import React, {PropTypes} from 'react';
import Header from '../../../components/header';
import CreateForm from './createform';
import CreateButton from './createbutton';
import List from './list';
import { setVisibility } from "./actions"
import { connect } from 'react-redux'

const Clients = ({onCreate, onSave, onCancel, onSaveClick}) => {
    return (
        <div>
            <CreateButton onCreateClick={()=>onCreate()} />
            <Header heading="Clients" subheading="Manage your clients and create new ones." />
            <CreateForm onSaveClick={()=>onSave()} onCancelClick={()=>onCancel()} />
            <List/>
        </div>
    )
}

Clients.propTypes = {
    visible: PropTypes.bool,
    onCreate: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {} // TODO: Figure out why this cant be removed
}

const mapDispatchToProps = (dispatch)=> ({
    onCreate: () => { dispatch(setVisibility(true)) },
    onSave: () => { dispatch(setVisibility(false)) },
    onCancel: () => { dispatch(setVisibility(false)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients)