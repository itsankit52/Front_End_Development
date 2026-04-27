// Import required functions from redux
import { combineReducers, createStore } from 'redux'

// Import reducers
import productsReducer from './productsReducer'
import DECREASE_QUANTITY from './cartReducer'
import INCREASE_QUANTITY from './cartReducer'
import ADD_ITEMS from './cartReducer'
import WISHLIST_ITEMS from './wishListReducer'
import REMOVE_WISHLIST_ITEMS from './wishListReducer'
import cartReducer from './cartReducer'
import wishListReducer from './wishListReducer'


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
store.dispatch(ADD_ITEMS(1, 1))
// console.log(ADD_ITEMS(1, 1));
// Add another item with productId = 12
store.dispatch(ADD_ITEMS(12, 2))

// Increase quantity of productId = 12
store.dispatch(INCREASE_QUANTITY(12))

// Decrease quantity of productId = 12
store.dispatch(DECREASE_QUANTITY(10))
store.dispatch(DECREASE_QUANTITY(12))

// ---------------- WISHLIST OPERATIONS ----------------

// Add productId = 18 to wishlist
store.dispatch(WISHLIST_ITEMS(18))
// Add productId = 11 to wishlist
store.dispatch(WISHLIST_ITEMS(11))

// Remove productId = 11 from wishlist
store.dispatch(REMOVE_WISHLIST_ITEMS(11))

// Remove productId = 18 from wishlist
store.dispatch(REMOVE_WISHLIST_ITEMS(18))

// Print final state after all operations
console.log(store.getState())