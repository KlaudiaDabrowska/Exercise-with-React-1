import React from 'react';

class MyComponent extends React.Component {
    state = {
        text: 'test state'
    }

    handleChange = (event) => {
        this.setState( { text: event.target.value.toUpperCase() } )
    }

    render () {
        return (
            <>
            <input placeholder="your text"
            onChange={this.handleChange}
            value={this.state.text} />
            <h1>{this.state.text}</h1>
            </>
        )
    }
}

export default MyComponent;