
/*
let state = {
    count: 0
}
    we can not do this 
    state.count = 1
    state.count = 1
    state.count = 1
    console.log(state); */

/*
// Redux mathod (Immutable state)

let state = {
    count: 0,
    name: "Piyush Thakur",
    age: 20
}

let prevstate = state
function increase() {

    state = { ...state, count: state.count + 1 }
}

function updateName() {
    state = { ...state, name: "Ankit Thakur" }
    state = { ...state, count: state.count + 1 }
}

increase()
console.log(state);
updateName();
console.log(state);

*/

// Import createStore function from redux
import { createStore } from 'redux'

const postcountElement = document.querySelector('.post-count')
// Initial state of your application
const initialState = {
    count: 0,              // counter value
    name: 'Ankit Thakur', // static data
    age: 22,              // static data
}

// Action type constants (to avoid typos)
const INCREMENT = 'count/increment'
const DECREMENT = 'count/decrement'
const INCREASE_BY = 'count/increaseBy'
const DECREASE_BY = 'count/decreaseBy'

// Reducer function
// It decides how state should change based on action type
function reducer(state = initialState, action) {
    switch (action.type) {

        case INCREMENT:
            // Increase count by 1
            return { ...state, count: state.count + 1 }

        case DECREMENT:
            // Decrease count by 1
            return { ...state, count: state.count - 1 }

        case INCREASE_BY:
            // Increase count by a custom value (payload)
            return { ...state, count: state.count + action.payload }

        case DECREASE_BY:
            // Decrease count by a custom value (payload)
            return { ...state, count: state.count - action.payload }

        default:
            // If action type doesn't match, return current state
            return state
    }
}

// Create Redux store
// Also connects Redux DevTools (if installed in browser)
const store = createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

// Log the store object
console.log(store)

// Subscribe to store updates
// This runs every time state changes
store.subscribe(() => {
    console.log(store.getState()) // print updated state
    postcountElement.innerHTML = store.getState().count;
})

postcountElement.innerHTML = store.getState().count;
// Dispatch actions (trigger state changes)

// Increment count by 1 (count = 1)
store.dispatch({ type: INCREMENT })

// Decrement count by 1 (count = 0)
store.dispatch({ type: DECREMENT })

// Increase count by 15 (count = 20)
store.dispatch({ type: INCREASE_BY, payload: 20 })

// Decrease count by 5 (count = 5)
store.dispatch({ type: DECREASE_BY, payload: 15 })


// setTimeout(() => {
//     // Decrease count by 5 (count = 5)
//     store.dispatch({ type: DECREASE_BY, payload: 15 })
// }, 3000);

postcountElement.addEventListener('click', () => {
    store.dispatch({ type: INCREMENT })
})
