import React, {Component} from 'react'
import Menu from '../components/menu';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Menu app="sparrow" username="peter kneale" />
                {this.props.children}
            </div>
        )
    }
}

export default App
