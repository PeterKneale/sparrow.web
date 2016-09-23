import React, {Component} from 'react'
import { Layout } from 'react-toolbox';
import Navigation from '../navigation';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Navigation current="home" />
            </Layout>
        )
    }
}

export default App