// import React from 'react'
import { Component } from "react";

class ClassCounter extends Component {

    constructor() {
        super()
        this.state = {
            Count: 0,
        }
    }

    render() {
        // const [Count, setCount] = useState(0); // Use State is only used in Functional Components
        const { name } = this.props;
        const { Count } = this.state;

        return <>
            <hr className="m-3" />
            <p>{name}</p>
            <p className="bg-red-300 p-3 m-5 text-xl rounded-xl ">Count</p>
            {/* <h2>Simple Counter </h2> */}
            <button onClick={() => this.setState({ Count: Count - 1 })}>-</button>
            <h2> {Count} </h2>
            <button onClick={() => this.setState({ Count: Count + 1 })}>+</button >
        </>
    }
}

export default ClassCounter

// A Class Component in React is a component written using an ES6 JavaScript class that extends React.Component.
// Modern React prefers Functional Components + Hooks, but Class Components are still important to understand.