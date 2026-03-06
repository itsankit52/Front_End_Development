import React from 'react'

export default function SelectMenu({
    id,
    name,
    value,
    onChange,
    error,
    placeholder,
    options,
    defaultOption
}) {
    return (
        <>
            <div className="input-container">
                <label htmlFor="category">Category</label>

                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                >
                    {
                        defaultOption && (<option value="" hidden>{defaultOption}</option>)
                    }
                    {
                        options.map((options, index) => <option key={index} value={options}>{options}</option>)
                    }

                </select>
                <p className="error">{error}</p>
            </div>
        </>
    )
}
