import React from 'react'
import Header from '../../components/header';
import { Button } from 'react-bootstrap';

const Clients = () => {
    return (
        <div>
            <Button bsStyle="primary" bsSize="large" className="pull-right">Create Client</Button>
            <Header heading="Clients" subheading="Your clients."/>
            <div className="panel panel-default">

                <div className="panel-heading">Current Clients</div>

                <table className="table">
                    <thead>
                        <tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
                        <tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>
                        <tr><th scope="row">3</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

Clients.propTypes = {

};

export default Clients




