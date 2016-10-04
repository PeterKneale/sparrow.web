import React from 'react'
import { Title, MenuAdmin } from '../../../components';
import { Grid, Row, Col } from 'react-bootstrap';

const Settings = () => (
    <Grid>
        <Row>
            <Col md={12}>
                <MenuAdmin/>
                <Title title="Settings" subtitle="Manage your settings"/>
            </Col>
        </Row>
    </Grid>
)

Settings.propTypes = {

};

export default Settings




