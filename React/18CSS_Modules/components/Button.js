<<<<<<< HEAD
// Button is a reusable React component
// It receives props: imageUrl, clickHandler, and children

// import styles from './Counter.module.css';

const Button = ({ imageUrl, clickHandler, children }) => {
    return (
        //  When the button is clicked, clickHandler function will run
        // title attribute shows a tooltip when you hover on the button
        <button className={styles.button} onClick={clickHandler} title={children}>

            {/* children is the text or content passed between <Button>...</Button> */}
            {children}

            {/* Show the image inside the button */}
            <img src={imageUrl} alt={children} />
        </button>
    )
}

// Exporting Button so it can be used in other files

console.log(typeof children);  // undefined
export default Button

=======
// Button is a reusable React component
// It receives props: imageUrl, clickHandler, and children

// import styles from './Counter.module.css';

const Button = ({ imageUrl, clickHandler, children }) => {
    return (
        //  When the button is clicked, clickHandler function will run
        // title attribute shows a tooltip when you hover on the button
        <button className={styles.button} onClick={clickHandler} title={children}>

            {/* children is the text or content passed between <Button>...</Button> */}
            {children}

            {/* Show the image inside the button */}
            <img src={imageUrl} alt={children} />
        </button>
    )
}

// Exporting Button so it can be used in other files

console.log(typeof children);  // undefined
export default Button

>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
