<<<<<<< HEAD
// Declarative Programming: We describe WHAT we want the UI to look like,
// React handles HOW to update it internally.

import Button from './Button'

// Import arrow images
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'

// Import AppleBasket component
import AppleBasket from './AppleBasket'

// Import CSS for styling
import './AppleCounter.css'

// Import useState hook from React
import { useState } from 'react'

const AppleCounter = () => {
    // Total apples in both baskets combined
    const totalAppleCount = 10

    // State: number of apples in the right basket
    const [rightAppleCount, setRightAppleCount] = useState(0)

    // State: number of apples in the left basket
    // Initially: total - right = 10 - 0 = 10
    const [leftAppleCount, setLeftAppleCount] = useState(
        totalAppleCount - rightAppleCount
    )

    // When left arrow button is clicked:
    // Move one apple from right basket to left basket
    const leftClickHandler = () => {
        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1) // decrease right basket
            setLeftAppleCount(leftAppleCount + 1)   // increase left basket
        }
    }

    // When right arrow button is clicked:
    // Move one apple from left basket to right basket
    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
            setRightAppleCount(rightAppleCount + 1) // increase right basket
            setLeftAppleCount(leftAppleCount - 1)   // decrease left basket
        }
    }

    return (
        <section
            style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, #bf3db0, #c1e72b)',
                color: '#ddd8d8',
                height: 200,
                alignItems: 'center',
            }}
        >
            {/* Left basket showing leftAppleCount apples */}
            <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />

            {/* Button to move apple from right to left */}
            <Button clickHandler={leftClickHandler} imageUrl={LeftArrow}>
                Left Arrow

                {/* It acts like a JavaScript we can pass here object, function, etc.......
                
                Children Props uses :- Iska use ham is liye karte hai ki jab kuch extra information dena ho to is property ka use kiya jata hai..

                */}
            </Button>

            {/* Button to move apple from left to right */}
            <Button clickHandler={rightClickHandler} imageUrl={RightArrow}>
                Right Arrow
            </Button>

            {/* Right basket showing rightAppleCount apples */}
            <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
        </section>
    )
}

console.log(typeof children);  //  undefined
export default AppleCounter
=======
// Declarative Programming: We describe WHAT we want the UI to look like,
// React handles HOW to update it internally.

import Button from './Button'

// Import arrow images
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'

// Import AppleBasket component
import AppleBasket from './AppleBasket'

// Import CSS for styling
import './AppleCounter.css'

// Import useState hook from React
import { useState } from 'react'

const AppleCounter = () => {
    // Total apples in both baskets combined
    const totalAppleCount = 10

    // State: number of apples in the right basket
    const [rightAppleCount, setRightAppleCount] = useState(0)

    // State: number of apples in the left basket
    // Initially: total - right = 10 - 0 = 10
    const [leftAppleCount, setLeftAppleCount] = useState(
        totalAppleCount - rightAppleCount
    )

    // When left arrow button is clicked:
    // Move one apple from right basket to left basket
    const leftClickHandler = () => {
        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1) // decrease right basket
            setLeftAppleCount(leftAppleCount + 1)   // increase left basket
        }
    }

    // When right arrow button is clicked:
    // Move one apple from left basket to right basket
    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
            setRightAppleCount(rightAppleCount + 1) // increase right basket
            setLeftAppleCount(leftAppleCount - 1)   // decrease left basket
        }
    }

    return (
        <section
            style={{
                textAlign: 'center',
                background: 'linear-gradient(135deg, #bf3db0, #c1e72b)',
                color: '#ddd8d8',
                height: 200,
                alignItems: 'center',
            }}
        >
            {/* Left basket showing leftAppleCount apples */}
            <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />

            {/* Button to move apple from right to left */}
            <Button clickHandler={leftClickHandler} imageUrl={LeftArrow}>
                Left Arrow

                {/* It acts like a JavaScript we can pass here object, function, etc.......
                
                Children Props uses :- Iska use ham is liye karte hai ki jab kuch extra information dena ho to is property ka use kiya jata hai..

                */}
            </Button>

            {/* Button to move apple from left to right */}
            <Button clickHandler={rightClickHandler} imageUrl={RightArrow}>
                Right Arrow
            </Button>

            {/* Right basket showing rightAppleCount apples */}
            <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
        </section>
    )
}

console.log(typeof children);  //  undefined
export default AppleCounter
>>>>>>> 66f314288ddd009b0acdee949da20f8d50bffa2b
