import React, { useState } from 'react'

export const Counter = ({name}) => {

    const [Count, setCount] = useState(0);
    return (
        <div>
            <h2>{name}</h2>
             {/* <h2>Simple Counter </h2> */}
            <button onClick={() =>setCount(Count - 1)}>-</button>
            <h2>{Count}</h2>
            <button onClick={() =>setCount(Count + 1)}>+</button>
        </div>
    )
}
