// Button is a reusable React component
// It receives props: imageUrl, clickHandler, and children

const Button = ({ imageUrl, clickHandler, children }) => {
    return (
        // When the button is clicked, clickHandler function will run
        // title attribute shows a tooltip when you hover on the button
        <button onClick={clickHandler} title={children}>

            {/* children is the text or content passed between <Button>...</Button> */}
            {children}

            {/* Show image inside the button */}
            <img src={imageUrl} alt={children} />
        </button>
    )
}

// Exporting Button so it can be used in other files

console.log(typeof children);  // undefined in console
export default Button

