import React, {Component} from 'react'
import Navigation from '../components/navigation';
import { Grid, Row, Col  } from 'react-bootstrap';
import './app.css'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation app="sparrow" username="peter kneale" />
                <Grid>
                    <Row>
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default App
