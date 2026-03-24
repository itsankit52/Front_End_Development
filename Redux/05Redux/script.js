// Import required functions from redux
import { combineReducers, createStore } from 'redux'

// Import reducers
import productsReducer from './productsReducer'

import cartReducer, {
    CART_ADD_ITEM,
    CART_ITEM_DECREASE_QUANTITY,
    CART_ITEM_INCREASE_QUANTITY,
} from './cartReducer'

import wishListReducer, {
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM,
} from './wishListReducer'


// Combine all reducers into one root reducer
// Each key becomes a part of the global state
const reducer = combineReducers({
    products: productsReducer,   // products state
    cartItems: cartReducer,      // cart state
    wishList: wishListReducer,   // wishlist state
})


// Create Redux store
// DevTools extension is added for debugging in browser
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__?.()
)


// Print store object (structure + methods)
console.log(store)


// ---------------- CART OPERATIONS ----------------

// Add item with productId = 1 and quantity = 1
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } })

// Add another item with productId = 12
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, quantity: 1 } })

// Increase quantity of productId = 12
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productId: 12 } })

// Decrease quantity of productId = 12
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productId: 12 } })

// Decrease again (may remove item if quantity becomes 0)
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productId: 12 } })

// ---------------- WISHLIST OPERATIONS ----------------

// Add productId = 18 to wishlist
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 18 } })

// Add productId = 11 to wishlist
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 11 } })

// Remove productId = 11 from wishlist
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 11 } })

// Remove productId = 18 from wishlist
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 18 } })


// Print final state after all operations
console.log(store.getState())