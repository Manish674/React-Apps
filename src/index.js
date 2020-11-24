import React from 'react';
import ReactDOM from 'react-dom';

// Create a class and extend it with react.component
class App extends React.Component {
    // Get the constructor
    constructor(props) {
        super(props);
        
        // code state here
        this.state = { lat: null};
    };

    // A class is nothing without the render fuc 
    render () {
    // than it's time to render some jsx
        return (
            <div>Hello world</div>
        );
    };
};


ReactDOM.render(<App />, document.querySelector('#root'));