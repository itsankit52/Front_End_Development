// Import useState for local state management
import { useState } from 'react'
// Import Redux hooks
import { useDispatch, useSelector } from 'react-redux'
// Import actions from counter slice
import { decrease, increase, Increase_By } from './redux/features/counterSlice'
import './App.css'

const App = () => {
  // useDispatch is used to send actions to Redux store
  const dispatch = useDispatch()
  // useSelector is used to read data from Redux store
  const count = useSelector((state) => state.counter.value)
  // Local state to store input value
  const [num, setnum] = useState('')
  return (
    <div>
      {/* Display current counter value */}
      <h1 className='header'>{count}</h1>

      {/* Button to increase value by 1 */}
      <button className='btn' onClick={() => {
        dispatch(increase()) // Dispatch increase action
      }}>
        Increase by 1
      </button>

      {/* Button to decrease value by 1 */}
      <button className='btn' onClick={() => {
        dispatch(decrease()) // Dispatch decrease action
      }}>
        Decrease by 1
      </button>

      {/* Input field to take number from user */}
      <input
        className='btn-input'
        placeholder='Enter a Number'
        type="number"
        value={num}
        onChange={(e) => {
          setnum(e.target.value) // Update local state
        }}
      />

      {/* Button to increase value by custom number */}
      <button
        className='btn'
        id='incBy'
        onClick={() => {
          dispatch(Increase_By(Number(num))) // Convert input to number and dispatch
        }}
      >
        Increase by Number
      </button>
    </div>
  )
}

export default App