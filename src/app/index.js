import React, {Component} from 'react'
import Navigation from '../components/navigation';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation app="sparrow" username="peter kneale" />
                {this.props.children}
            </div>
        )
    }
}

export default App
