import React from 'react'

export default function Input({
    label,
    id,
    name,
    value,
    onChange,
    error,
    placeholder
}) {
    return (
        <>
            <div className="input-container">

                <label htmlFor={id}>{label}</label>

                <input
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange} // Alll in one method
                    placeholder={placeholder}
                />
                <p className="error">{error}</p>
            </div>
        </>
    )
}
