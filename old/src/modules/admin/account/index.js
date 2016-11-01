import React from 'react'
import { Title, MenuAdmin } from '../../../components';
import { Grid, Row, Col } from 'react-bootstrap';

const Account = () => (
    <Grid>
        <Row>
            <Col md={12}>
                <MenuAdmin/>
                <Title title="Account Management" subtitle="Manage your account"/>
            </Col>
        </Row>
    </Grid>
)

Account.propTypes = {

};

export default Account




