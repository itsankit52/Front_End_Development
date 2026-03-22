import { createStore } from 'redux'
console.dir(createStore);
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

let reduxState = {
    count: 0,
    name: "Piyush Thakur",
    age: 20
}

function reducer(reduxState, action) {
    if (action.type === "Increase") {
        console.log(action);
        return { ...reduxState, count: reduxState.count + 1 }
    }
    else if (action.type === "Decrease") {
        console.log(action);
        return { ...reduxState, count: reduxState.count - 1 }
    }
    else if (action.type === "IncreaseBy") {
        console.log(action);
        return { ...reduxState, count: reduxState.count + action.payload }
    }
    else {
        console.log(action);
        return reduxState
    }
}

const store = createStore(reducer)
console.log(store);