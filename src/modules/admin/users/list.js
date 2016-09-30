import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap';
import Toolbox from './toolbox';
import Spinner from '../../../components/spinner';
import Error from '../../../components/error';

const List = ({onDelete, onArchive, onEmail, loading, data, list_visible, error_visible, error_message}) => {
    return (
    <div>
        <Error message={error_message} visible={error_visible}/>
        { loading ?
            <Spinner visible={loading}/>
            :
            list_visible ? 
                <div className="panel panel-default">
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
                            { data.map(function(user) {
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
    data: PropTypes.array,
    list_visible: PropTypes.bool,
    error_visible: PropTypes.bool,
    error_message: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        data: state.users.data,
        loading: state.users.loading,
        list_visible: state.users.list_visible,
        error_visible: state.users.error_visible,
        error_message: state.users.error_message
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

