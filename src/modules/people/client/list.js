import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import Toolbox from './toolbox';
const List = ({users, visible, onDelete, onArchive, onEmail}) => {
    return (
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
                    {
                        users.map(function(user) {
                            return <tr>
                                        <td><input type="checkbox" data-id={user.id}/></td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.name}</td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

List.propTypes = {
    visible: PropTypes.bool,
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onEmail: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        visible: state.mode.list_visible,
        users: state.data.users
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

