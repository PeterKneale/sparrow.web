import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Panel, Button, Glyphicon } from 'react-bootstrap';
import { invalidateUsers, listUsers, deleteUser } from "./actions"
import Toolbox from './toolbox';

const List = ({onDelete, onDeleteMany, onRefresh, users, list_visible}) => {
    return (
        <div>
            { list_visible ?
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <Toolbox onDelete={() => onDeleteMany() }  onRefresh={() => onRefresh() } />
                    </div>
                     <div className="list-group">
                        { users.map(function (user) {
                            return  <div className="list-group-item" key={user.id}>
                                        <div className="pull-right">
                                            <Button bsSize="small" bsStyle="danger" onClick={() => onDelete(user.id)}><Glyphicon glyph="trash"/> Delete</Button>
                                        </div>
                                        <Link to={`/admin/users/${user.id}`}>
                                            <h4 className="list-group-item-heading">{user.name}</h4>
                                        </Link>
                                        <p className="list-group-item-text">{user.first_name} {user.last_name}</p>
                                    </div>
                        }) }
                    </div>
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
    onDelete: (id) => { 
        dispatch(deleteUser(id))
    },
    onArchive: () => { },
    onRefresh: () => {
        dispatch(invalidateUsers())
        dispatch(listUsers())
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

