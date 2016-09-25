import React, {Component} from 'react'
import Navigation from '../components/navigation';
import Header from '../components/header';
import Jumbo from '../components/jumbo';
import { Grid, Row, Col  } from 'react-bootstrap';
import './app.css'

class App extends React.Component {
    render() {
        return (

            <div className="container">
                <Navigation app="sparrow" current="home" username="peter kneale" />
                <Jumbo heading="Welcome to sparrow" body="The easiest thing on the planet"/>
                <Grid>
                    <Row>
                        <Col>
                            <Header heading="Sparrow" subheading="Light, fast and friendly"/>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

export default App

