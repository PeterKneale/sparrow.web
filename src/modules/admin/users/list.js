import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import Toolbox from './toolbox';
const List = ({users, visible, error_visible, error_message,  onDelete, onArchive, onEmail}) => {
    return (
    <div>
        {error_visible ?
            <div>
                There was an error: {error_message}
            </div>
            :
            <div className="panel panel-default" hidden={!visible}>
                <div className="panel-heading">
                    <Toolbox
                        onDelete={() => onDelete() }
                        onArchive={() => onArchive() }
                        onEmail={() => onEmail() }
                        />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th></tr>
                    </thead>
                    <tbody>
                        { users.map(function(user) {
                                return <tr key={user.id}>
                                            <td><input type="checkbox"/></td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.name}</td>
                                    </tr>
                            })}
                    </tbody>
                </table>
            </div>

        }
    </div>
    );
}

List.propTypes = {
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onEmail: PropTypes.func,

    visible: PropTypes.bool,
    users: PropTypes.array,
    error_visible: PropTypes.bool,
    error_message: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        visible: state.mode.list_visible,
        users: state.data.users,
        error_visible: state.mode.list_error_visible,
        error_message: state.mode.list_error_message
    }
}

const mapDispatchToProps = (dispatch) => ({
    onDelete: () => {
        console.log('delete')
    },
    onArchive: () => {
        console.log('archive')
    },
    onEmail: () => {
        console.log('email')
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

