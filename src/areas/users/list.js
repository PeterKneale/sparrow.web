import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, Glyphicon } from 'react-bootstrap';
import { navigate, listUsers, deleteUser } from "./actions"
import { Spinner, Notification } from '../../components';

const none = () => (
    <Notification header="No users found" body="There are no users present in your account" level="info"/>
)

const renderUser = (user, onEdit, onDelete) => (
    <div className="list-group-item" key={user.id}>
        <div className="pull-right">
            <Button bsSize="small" onClick={() => onEdit(user.id) }><Glyphicon glyph="pencil"/> Edit</Button>
            {' '}
            <Button bsSize="small" bsStyle="danger" onClick={() => onDelete(user.id) }><Glyphicon glyph="trash"/> Delete</Button>
        </div>
        <Link to={`/areas/users/view/${user.id}`}>
            <h4 className="list-group-item-heading">{user.name}</h4>
        </Link>
        <p className="list-group-item-text">ID: {user.id} {user.last_name}</p>
    </div>
)

const renderUserDeleting = (user) => (
    <div className="list-group-item danger" key={user.id}>
        <h4 className="list-group-item-heading">{user.name}</h4>
        <p className="list-group-item-text">ID: {user.id} {user.last_name}</p>
    </div>
)

const renderUsers = (users, onEdit, onDelete, onRefresh) => (
    <div className="panel panel-default">
        <div className="list-group">
            { users.map(function (user) {
                return (!user.deleting)
                    ? renderUser(user, onEdit, onDelete)
                    : renderUserDeleting(user)
            }) }
        </div>
    </div>
)

const UsersList = ({loading, users, onEdit, onDelete, onRefresh}) => {
    if (loading)
        return <Spinner/>
    else
        if (users.length === 0)
            return none()
        else
            return renderUsers(users, onEdit, onDelete, onRefresh)
};

UsersList.propTypes = {
    onEdit: PropTypes.func,
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
    onEdit: (id) => { navigate('/areas/users/edit/' + id) },
    onDelete: (id) => { dispatch(deleteUser(id)) },
    onRefresh: () => { dispatch(listUsers()) }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList);





