<<<<<<< HEAD

import React, { useState } from 'react'
import countriesData from '../countriesData' // data of country 
import CountryCard from './CountryCard' // counrty card

export default function CountriesList(query) {
  return (
    <>
      <div className="countries-container">
        {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          )
        })}
      </div>
    </>
  )
}
=======

import React, { useState } from 'react'
import countriesData from '../countriesData' // data of country 
import CountryCard from './CountryCard' // counrty card

export default function CountriesList(query) {
  return (
    <>
      <div className="countries-container">
        {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          )
        })}
      </div>
    </>
  )
}
>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
