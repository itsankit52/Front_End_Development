import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuary } from '../redux/features/SearchSlice'

const SearchBar = () => {

    // Two way binding
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const sumbitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuary(text))
        // console.log(text);
        setText('');
    }
    return (
        <div>
            <form onSubmit={(e) => {
                sumbitHandler(e)
            }}>
                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    required
                    type="text"
                    placeholder='Search'
                />
                <button

                >Search</button>
            </form>
        </div>
    )
}

export default SearchBar