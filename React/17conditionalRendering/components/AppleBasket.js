<<<<<<< HEAD

import React from 'react'

const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{basketName}{appleCount === 10 && "(Basket Full)"} {appleCount === 0 && "(Basket Empty)"}</p>
    </div>
  )
}

export default AppleBasket


//Conditional rendering means showing different UI elements or components based on a condition (like if, true/false, user login status, data loaded or not, etc.).

=======

import React from 'react'

const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{basketName}{appleCount === 10 && "(Basket Full)"} {appleCount === 0 && "(Basket Empty)"}</p>
    </div>
  )
}

export default AppleBasket


//Conditional rendering means showing different UI elements or components based on a condition (like if, true/false, user login status, data loaded or not, etc.).

>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
//React shows different content depending on some condition.