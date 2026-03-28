
import React from 'react'
import { Link } from 'react-router-dom'
// import CartIcon from './cart-shopping-solid-full.svg'

export default function Header() {
    return (
        <header>
            <div className="header-contents">
                <h1>
                    <Link to="/">Shop</Link>
                </h1>
                <Link className="cart-icon" to="/cart">
                    <img src='cart-shopping-solid-full.svg' alt="cart-icon" />          <div className="cart-items-count">0</div>
                </Link>
            </div>
        </header>
    )
}
