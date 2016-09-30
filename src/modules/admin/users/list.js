import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap';
import Toolbox from './toolbox';
import Spinner from '../../../components/spinner';
import Error from '../../../components/error';

const List = ({users, loading, visible, error_visible, error_message,  onDelete, onArchive, onEmail}) => {
    return (
    <div>
        <Spinner spin={loading}/>
        <Error error={error_visible} message={error_message}/>
        { !error_visible ? 
        <div className="panel panel-default" hidden={!visible || loading}>
            <div className="panel-heading">
                <Toolbox onDelete={() => onDelete() } onArchive={() => onArchive() } onEmail={() => onEmail() } />
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
        :
        null}
    </div>
    );
}

List.propTypes = {
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onEmail: PropTypes.func,
    loading : PropTypes.bool,
    visible: PropTypes.bool,
    users: PropTypes.array,
    error_visible: PropTypes.bool,
    error_message: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        visible: state.mode.list_visible,
        users: state.data.users,
        loading: state.data.loading,
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

