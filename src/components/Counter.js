import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
        this.incrementFive = this.incrementFive.bind(this)
    }

    incrementCount(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
    render() {
        return (
            <>
                <h2>Count - {this.state.count}</h2>
                <button onClick={this.incrementFive}>Increment</button>
            </>
        )
    }
}

export default Counter
