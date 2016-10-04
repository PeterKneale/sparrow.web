import React from 'react'
import { Title, MenuAdmin } from '../../components';
import { Grid, Row, Col } from 'react-bootstrap';

const Dashboard = (props) => {
    return (
        <Grid>
            <Row>
                <Col md={12}>
                    <MenuAdmin/>
                    <Title title="Administration Dashboard" subtitle="Your dashboard."/>
                </Col>
            </Row>
        </Grid>
)}

export default Dashboard