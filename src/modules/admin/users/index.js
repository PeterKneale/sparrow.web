import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Checkbox, ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import { setMode, MODE_SET, MODE_CREATE, MODE_READ } from "./actions"
import { Error, Title, Spinner } from '../../../components';
import Create from './create';
import List from './list';
import Toolbox from './toolbox';

const Users = ({onCreate, loading, error_visible, error_message}) => {
    return (
        <div>
            <Button bsStyle="primary" bsSize="large" className="pull-right" onClick={() => onCreate() }><Glyphicon glyph="plus" /> Create User</Button>
            <Title title="Users" subtitle="Add new users and manage existing ones..." />
            <Create />
            <Spinner visible={loading}/>
            <List />
            <Error visible={error_visible} message={error_message}/>
        </div>
    )
}

Users.propTypes = {
    loading: PropTypes.bool,
    error_visible: PropTypes.bool,
    error_message: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        loading: state.usermanagement.loading,
        error_visible: state.usermanagement.error_visible,
        error_message: state.usermanagement.error_message
    }
}

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => {dispatch(setMode(MODE_CREATE))},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)