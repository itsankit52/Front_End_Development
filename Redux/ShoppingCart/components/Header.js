
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const cartItems = useSelector((state) => state.cartItems)
    return (
        <header>
            <div className="header-contents">
                <h1>
                    <Link to="/">Shop</Link>
                </h1>
                <Link className="cart-icon" to="/cart">
                    <p className='cart-icon' >Cart Items</p>
                    <div className="cart-items-count">
                        {cartItems.reduce(
                            (accumulator, currentItem) => accumulator + currentItem.quantity,
                            0
                        )}
                    </div>
                </Link>
            </div>
        </header>
    )
}
