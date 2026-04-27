import React from 'react'

// Pehle hum static file se data le rahe the, ab Redux use kar rahe hain
// import { productsList } from './store/productsList'

import Product from './components/projects'  // Product component import
import './App.css'  // CSS styling import

// Redux hook → store se data lene ke liye use hota hai
import { useSelector } from 'react-redux'

// Direct store import ki zarurat nahi jab useSelector use kar rahe hain
// import { store } from './store/index.js'

export default function App() {

    // Redux store se products ka data le rahe hain
    // state.products → reducer me jo naam diya hai wahi use hota hai
    const productsList = useSelector((state) => state.products)

    return (
        <div className="products-container">

            {/* productsList ek array hai → map se har product ko render kar rahe hain */}
            {productsList.map(({ id, title, rating, price, image }) => (

                // Har item ke liye Product component call ho raha hai
                <Product
                    key={id}   // React ke liye unique key (important)
                    title={title}  // product ka title pass ho raha hai

                    // rating object hai → usme se sirf rate value le rahe hain
                    rating={rating.rate}

                    price={price}  // price pass kar rahe hain

                    // image ka naam change karke imageUrl bana ke pass kar rahe hain
                    imageUrl={image}
                />
            ))}

        </div>
    )
}