import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const RenderToolbar = () => (
     <ButtonGroup>
        <LinkContainer to="/areas/users/create">
            <Button bsStyle="primary">Create new user</Button>
        </LinkContainer>
    </ButtonGroup>
)

const UsersLayout = props => {
    return (
        <Grid>
            <Row>
                <Col md={12}>
                   { RenderToolbar() }
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {props.children}
                </Col>
            </Row>
        </Grid>
    );
};


export default UsersLayout;