<<<<<<< HEAD

//Declarative Programming

import Button from './Button'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from './AppleBasket'

import './AppleCounter.css'
import { useState, Fragment } from 'react';

console.log(Fragment);//React Fragments "<> </>" (typeof fragment =  symbol)
console.log(Symbol.for("react.fragment"));
// Line no 14 & 15 both are same, give same output in console 

//       <>
//             This is the way to write fragment
//       </>

const AppleCounter = () => {
    const totalAppleCount = 10
    const [rightAppleCount, setRightAppleCount] = useState(0)
    const [leftAppleCount, setLeftAppleCount] = useState(
        totalAppleCount - rightAppleCount
    )
    const leftClickHandler = () => {
        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1)
            setLeftAppleCount(leftAppleCount + 1)
        }
    }
    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
            setRightAppleCount(rightAppleCount + 1)
            setLeftAppleCount(leftAppleCount - 1)
        }
    }

    const a = <>
        <section>
            <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
            <Button
                clickHandler={leftClickHandler}
                imageUrl={LeftArrow}
            />
            <Button
                clickHandler={rightClickHandler}
                imageUrl={RightArrow}
            />
            <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
        </section>
    </>
    return (
      a
    )
}

export default AppleCounter
=======

//Declarative Programming

import Button from './Button'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from './AppleBasket'

import './AppleCounter.css'
import { useState, Fragment } from 'react';

console.log(Fragment);//React Fragments "<> </>" (typeof fragment =  symbol)
console.log(Symbol.for("react.fragment"));
// Line no 14 & 15 both are same, give same output in console 

//       <>
//             This is the way to write fragment
//       </>

const AppleCounter = () => {
    const totalAppleCount = 10
    const [rightAppleCount, setRightAppleCount] = useState(0)
    const [leftAppleCount, setLeftAppleCount] = useState(
        totalAppleCount - rightAppleCount
    )
    const leftClickHandler = () => {
        if (rightAppleCount > 0) {
            setRightAppleCount(rightAppleCount - 1)
            setLeftAppleCount(leftAppleCount + 1)
        }
    }
    const rightClickHandler = () => {
        if (leftAppleCount > 0) {
            setRightAppleCount(rightAppleCount + 1)
            setLeftAppleCount(leftAppleCount - 1)
        }
    }

    const a = <>
        <section>
            <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
            <Button
                clickHandler={leftClickHandler}
                imageUrl={LeftArrow}
            />
            <Button
                clickHandler={rightClickHandler}
                imageUrl={RightArrow}
            />
            <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
        </section>
    </>
    return (
      a
    )
}

export default AppleCounter
>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
