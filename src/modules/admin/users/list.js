import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Panel, Button, Glyphicon, ListGroup, ListGroupItem  } from 'react-bootstrap';
import { invalidateUsers, listUsers, deleteUser } from "./actions"
import Toolbox from './toolbox'
import { Spinner, Notice } from '../../../components';

const List = ({onDelete, onRefresh, users, loading}) => {
    if (loading)
        return <Spinner/>
    else 
        if (users.length == 0) 
            return none()  
        else 
            return renderUsers(users, onDelete, onRefresh)
};

const none = () => (
    <Notice header="No users found" body="There are no users present in your account" style="info"/>
)

const renderUsers = (users, onDelete, onRefresh) => (
    <div className="panel panel-default">
        <div className="panel-heading">
            <Toolbox onRefresh={() => onRefresh() } />
        </div>
        <div className="list-group">
            { users.map(function (user) {
                return (!user.deleting)
                    ? renderUser(user, onDelete)
                    : renderUserDeleting(user)
            })}
        </div>
    </div>
)

const renderUser = (user, onDelete) => (
    <div className="list-group-item" key={user.id}>
        <div className="pull-right"><Button bsSize="small" bsStyle="danger" onClick={() => onDelete(user.id) }><Glyphicon glyph="trash"/> Delete</Button></div>
        <Link to={`/admin/user/${user.id}`}>
            <h4 className="list-group-item-heading">{user.name}</h4>
        </Link>
        <p className="list-group-item-text">ID:{user.id} {user.last_name}</p>
    </div>
)

const renderUserDeleting = (user) => (
    <div className="list-group-item danger" key={user.id}>
        <h4 className="list-group-item-heading">{user.name}</h4>
        <p className="list-group-item-text">ID:{user.id} {user.last_name}</p>
    </div>
)

List.propTypes = {
    onDelete: PropTypes.func,
    onRefresh: PropTypes.func,
    loading: PropTypes.bool,
    users: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        loading: state.usermanagement.loading,
        users: state.usermanagement.users
    }
}

const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => { dispatch(deleteUser(id)) },
    onRefresh: () => { dispatch(renderUsers()) }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)





