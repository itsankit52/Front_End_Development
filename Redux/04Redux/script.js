import { createStore } from 'redux'
import productsList from './productsList'

const initialState = {
    products: productsList,
    cart: [],
    list: [],
}

const ADD_ITEMS = 'ADD_ITEMS';
const REMOVE_ITEMS = 'REMOVE_ITEMS';
const QUANTITY_INCREASE = 'QUANTITY_INCREASE';
const QUANTITY_DECREASE = 'QUANTITY_DECREASE';

const WISHLIST_ADD_ITEMS = 'WISHLIST_ADD_ITEMS';
const WISHLIST_REMOVE_ITEMS = 'WISHLIST_REMOVE_ITEMS';

function reducer(state = initialState, action) {
    console.log(action);

    switch (action.type) {
        case ADD_ITEMS:
            return { ...state, cart: [...state.cart, action.payload] }

        case REMOVE_ITEMS:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }

        case QUANTITY_INCREASE:
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item;
                })
            }

        case QUANTITY_DECREASE:
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    return item;
                }).filter((cart) => cart.quantity > 0)
            }

        case WISHLIST_ADD_ITEMS:
            return { ...state, list: [...state.list, action.payload] }

        case WISHLIST_REMOVE_ITEMS:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload.id)
            }

        default:
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

// Add items in cart
store.dispatch({ type: ADD_ITEMS, payload: { id: 2, quantity: 1 } });
store.dispatch({ type: ADD_ITEMS, payload: { id: 6, quantity: 2 } });
store.dispatch({ type: ADD_ITEMS, payload: { id: 16, quantity: 1 } });

// Remove item from cart
store.dispatch({ type: REMOVE_ITEMS, payload: { id: 2 } });

// Increase item Quantity
store.dispatch({ type: QUANTITY_INCREASE, payload: { id: 6 } });
store.dispatch({ type: QUANTITY_INCREASE, payload: { id: 16 } });

// Decrease item Quantity
store.dispatch({ type: QUANTITY_DECREASE, payload: { id: 16 } });
store.dispatch({ type: QUANTITY_DECREASE, payload: { id: 16 } });

// Add items in wishlist
store.dispatch({ type: WISHLIST_ADD_ITEMS, payload: { id: 19, quantity: 1 } });
store.dispatch({ type: WISHLIST_ADD_ITEMS, payload: { id: 11, quantity: 2 } });

// Remove items from wishlist
store.dispatch({ type: WISHLIST_REMOVE_ITEMS, payload: { id: 11 } });

console.log(store.getState());