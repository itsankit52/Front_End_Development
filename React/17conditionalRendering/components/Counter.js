<<<<<<< HEAD

import { useState } from 'react'

export default function Counter({ counterName }) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(counterName)

    // console.log('rendering');

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <h2>{name}</h2>
            <button
                onClick={() => {
                    setName('Ankit Thakur')
                    setCount((previousState) => previousState + 1)
                    setCount((previousState) => previousState + 1)
                }}
            >
                Increase Count
            </button>
        </div>
    )
}
=======

import { useState } from 'react'

export default function Counter({ counterName }) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(counterName)

    // console.log('rendering');

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <h2>{name}</h2>
            <button
                onClick={() => {
                    setName('Ankit Thakur')
                    setCount((previousState) => previousState + 1)
                    setCount((previousState) => previousState + 1)
                }}
            >
                Increase Count
            </button>
        </div>
    )
}
>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
