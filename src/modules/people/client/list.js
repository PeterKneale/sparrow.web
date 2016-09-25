import React, {PropTypes} from 'react'
import { Checkbox, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const List = props => {
    return (
            <div className="panel panel-default">

                <div className="panel-heading">

                    <ButtonToolbar>

                        <ButtonGroup>
                            <Button>Archive</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button bsStyle="danger">Delete</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>Email</Button>
                        </ButtonGroup>

                        <ButtonGroup className="pull-right">
                            <Button>Search</Button>
                        </ButtonGroup>

                    </ButtonToolbar>
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
    )
}

List.propTypes = {
    
}

export default List