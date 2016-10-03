import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap';
import Toolbox from './toolbox';
import { invalidateUsers, fetchUsers } from "./actions"
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const List = ({onDelete, onArchive, onEmail, onRefresh, users, list_visible}) => {
    return (
        <div>
            { list_visible ?
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <Toolbox onDelete={() => onDelete() } onArchive={() => onArchive() } onEmail={() => onEmail() }  onRefresh={() => onRefresh() } />
                    </div>
                    <table className="table">
                        <thead><tr><th>Select</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Actions</th></tr></thead>
                        <tbody>
                            { users.map(function (user) {
                                return <tr key={user.id}>
                                    <td><input type="checkbox"/></td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.name}</td>
                                    <td>
                                    <LinkContainer to={{ pathname: '/admin/users/' + user.id }}>
                                        <Button>Edit</Button>
                                    </LinkContainer>
                                    </td>
                                </tr>
                            }) }
                        </tbody>
                    </table>
                </div>
                :
                null
            }

        </div>
    );
}

List.propTypes = {
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onEmail: PropTypes.func,
    onRefresh: PropTypes.func,

    users: PropTypes.array,
    list_visible: PropTypes.bool,
}

const mapStateToProps = (state) => {
    return {
        users: state.usermanagement.users,
        list_visible: state.usermanagement.list_visible,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onDelete: () => { },
    onArchive: () => { },
    onEmail: () => { },
    onRefresh: () => {
        dispatch(dispatch(invalidateUsers()))
        dispatch(dispatch(fetchUsers()))
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

