import React from 'react'

export default function Header() {
    return (
        <div className='flex items-center justify-between py-4 px-10 shadow-lg outline'>
            <div className=''>
                <img className='h-10 w-10 ' src="ReduxImahe.png" alt="" />
            </div>

            <li>
                <a href="/home"> Home</a>
            </li>
            <li>
                <a href="/about"> About</a>
            </li>
            <li>
                <a href="/login"> Login</a>
            </li>
        </div>
    )
}
