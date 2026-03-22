/*
let state = {
    count: 0
}
    we can not do this 
    state.count = 1
    state.count = 1
    state.count = 1
    console.log(state); */


// Redux mathod (Immutable state)

let state = {
    count: 0
}

let prevstate = state
function increase() {

    state = { count: state.count + 1 }
}

increase()
console.log(state);
increase()
console.log(state);