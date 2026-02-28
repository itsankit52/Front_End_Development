<<<<<<< HEAD
import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter({ counterName }) {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState(counterName)

    // console.log('rendering');

    return (
        <div>
            <h1 style={{ margin: 0 }}>{count}</h1>

            <button
                className={styles.button}
                onClick={() => {
                    setCount((previousState) => previousState + 1)
                }}
            >Click
            </button>
        </div>

    )
=======
import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter({ counterName }) {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState(counterName)

    // console.log('rendering');

    return (
        <div>
            <h1 style={{ margin: 0 }}>{count}</h1>

            <button
                className={styles.button}
                onClick={() => {
                    setCount((previousState) => previousState + 1)
                }}
            >Click
            </button>
        </div>

    )
>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
};