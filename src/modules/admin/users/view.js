import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import {Title} from '../../../components';
import { ButtonToolbar, Panel, Button, Glyphicon, ListGroup, ListGroupItem  } from 'react-bootstrap';
import { navigate, deleteUser, getUser } from "./actions"
import { Spinner } from '../../../components';
import Toolbox from './toolbox'

const View = ({loading, id, name, first_name, last_name, onEdit, onDelete, onRefresh}) => {
    if (loading)
        return <Spinner/>
    else
        return renderUser(id, name, first_name, last_name, onEdit, onDelete, onRefresh)
}

const renderUser = (id, name, first_name, last_name, onEdit, onDelete, onRefresh) => (
    <div className="panel panel-default">
        <div className="panel-heading">
            <ButtonToolbar>
                    <Button bsSize="small" className="pull-right" onClick={() => onRefresh(id) }><Glyphicon glyph="refresh" /> Refresh</Button>
                    {' '}
                    <Button bsSize="small" className="pull-right" onClick={() => onEdit(id) }><Glyphicon glyph="pencil"/> Edit</Button>
                    {' '}
                    <Button bsSize="small" className="pull-right" bsStyle="danger" onClick={() => onDelete(id) }><Glyphicon glyph="trash"/> Delete</Button>
            </ButtonToolbar>
        </div>
        <div className="panel-body">
            First Name: {first_name}
            <br/>
            Last Name: {last_name}
        </div>
    </div>
)

View.propTypes = {
    loading: PropTypes.bool,
    id: PropTypes.number,
    name: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        loading: state.usermanagement.loading,
        id: state.usermanagement.user.id,
        name: state.usermanagement.user.name,
        first_name: state.usermanagement.user.first_name,
        last_name: state.usermanagement.user.last_name
    }
}

const mapDispatchToProps = (dispatch) => ({
    onEdit: (id) => { navigate('/admin/users/edit/' + id) },
    onDelete: (id) => { dispatch(deleteUser(id)) },
    onRefresh: (id) => { dispatch(getUser(id)) }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View)