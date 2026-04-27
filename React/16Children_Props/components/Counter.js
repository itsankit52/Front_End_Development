<<<<<<< HEAD

import { useState } from 'react'

export default function Counter({ counterName }) {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState(counterName)

    // console.log('rendering');

    return (
        <div
            style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, #bf3db0, #c1e72b)',
                color: '#ddd8d8',
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1 style={{ margin: 0 }}>{count}</h1>

            <button
                style={{
                    background: 'linear-gradient(135deg, #ff6bee, #ccff00)',
                    color: 'black',
                    fontSize: 20,
                    marginTop: 20,
                    border: 'none',
                    fontWeight: 600,
                    borderRadius: '50%',
                    height: 100,
                    width: 100,
                    cursor: 'pointer',
                }}
                onClick={() => {
                    setCount((previousState) => previousState + 1)
                }}
            >
                Click
            </button>
        </div>

    )
}
=======

import { useState } from 'react'

export default function Counter({ counterName }) {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState(counterName)

    // console.log('rendering');

    return (
        <div
            style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, #bf3db0, #c1e72b)',
                color: '#ddd8d8',
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1 style={{ margin: 0 }}>{count}</h1>

            <button
                style={{
                    background: 'linear-gradient(135deg, #ff6bee, #ccff00)',
                    color: 'black',
                    fontSize: 20,
                    marginTop: 20,
                    border: 'none',
                    fontWeight: 600,
                    borderRadius: '50%',
                    height: 100,
                    width: 100,
                    cursor: 'pointer',
                }}
                onClick={() => {
                    setCount((previousState) => previousState + 1)
                }}
            >
                Click
            </button>
        </div>

    )
}
>>>>>>> 66f314288ddd009b0acdee949da20f8d50bffa2b
