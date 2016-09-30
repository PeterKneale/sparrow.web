import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import Toolbox from './toolbox';
const List = ({visible, onDelete, onArchive, onEmail}) => {
    return (
        <div className="panel panel-default" hidden={!visible}>
            <div className="panel-heading">
                <Toolbox
                    onDelete={() => onDelete() }
                    onArchive={() => onArchive() }
                    onEmail={() => onEmail() }
                    />
            </div>
            <div className="panel-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><input type="checkbox"/></td><td>John</td><td>Smith</td><td>JohnSmith</td></tr>
                        <tr><td><input type="checkbox"/></td><td>John</td><td>Smith</td><td>JohnSmith</td></tr>
                        <tr><td><input type="checkbox"/></td><td>John</td><td>Smith</td><td>JohnSmith</td></tr>
                        <tr><td><input type="checkbox"/></td><td>John</td><td>Smith</td><td>JohnSmith</td></tr>
                        <tr><td><input type="checkbox"/></td><td>John</td><td>Smith</td><td>JohnSmith</td></tr>
                        <tr><td><input type="checkbox"/></td><td>John</td><td>Smith</td><td>JohnSmith</td></tr>
                        <tr><td><input type="checkbox"/></td><td>John</td><td>Smith</td><td>JohnSmith</td></tr>
                    </tbody>
                </table>
            </div>
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
        visible: state.mode.list_visible
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

