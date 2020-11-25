import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'

// Create a class and extend it with react.component
class App extends React.Component {
    state = { lat: null, errorMsg: ''};      

    componentDidMount() {
        // Geolocation api
        window.navigator.geolocation.getCurrentPosition(
            position => this.state = this.setState({ lat: position.coords.latitude }),
            err => this.state = this.setState({ errorMsg: err.message }) 
        )     
    }

    renderContent () {
        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        
        if (this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>; 
        }

        
        return <Loader message="Did you accepted the location request"/>;

    }    

    render () {
        return <div>{this.renderContent()}</div>
    }
};


ReactDOM.render(<App />, document.querySelector('#root'));