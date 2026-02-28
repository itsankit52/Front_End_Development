<<<<<<< HEAD

import React from 'react'

export default function CountryCard({ name, flag, population, region, capital }) {
  return (
    <a className="country-card" href={`/country.html?name=${name.common}`}>
      <img src={flag} alt={name + ' Flag'} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  )
}
=======

import React from 'react'

export default function CountryCard({ name, flag, population, region, capital }) {
  return (
    <a className="country-card" href={`/country.html?name=${name.common}`}>
      <img src={flag} alt={name + ' Flag'} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </a>
  )
}
>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
