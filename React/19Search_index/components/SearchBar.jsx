<<<<<<< HEAD

import React from 'react'

export default function SearchBar({setQuery}) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..." />
    </div>
  )
}


=======

import React from 'react'

export default function SearchBar({setQuery}) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..." />
    </div>
  )
}


>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
