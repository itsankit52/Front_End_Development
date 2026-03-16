// import React from 'react'
import { Component } from "react";



// export default function ClassCounter() {
//     return (
//         <div className='bg-red-300 mt-10 text-2xl p-2 rounded-xl'>ClassCounter</div>
//     )
// }


class ClassCounter extends Component {

    render() {
        const { name } = this.props;

        return <>
            <hr className="m-3" />
            <p>{name}</p>
            <p className="bg-red-300 p-3 mt-10 text-xl rounded-xl ">Count</p>
        </>
    }
}

export default ClassCounter