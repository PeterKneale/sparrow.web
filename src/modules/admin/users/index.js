import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { Notice, Title, MenuAdmin } from '../../../components';
import { hashHistory } from 'react-router'
import { Nav, NavItem, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import List from './list';

const Users = ({error}) => (
        <Grid>
            <Row>
                <Col md={12}>
                    <MenuAdmin/>
                    <Title title="User Management" subtitle="Manage users"/>
                    <Notice header="Error" body={error} style="danger"/>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                     <LinkContainer to="/admin/users/create"><Button bsStyle="primary"><Glyphicon glyph="plus" /> Create User</Button></LinkContainer>
                </Col>
                <Col md={10}>
                    <List />
                </Col>
            </Row>
        </Grid>
    )

Users.propTypes = {
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        error: state.usermanagement.error
    }
}

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => {dispatch(navigate('/admin/users/create'))},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)