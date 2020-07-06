import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1> Hello, my name is {this.props.name}</h1>
            </div>
        )
    }
}
export default Home;