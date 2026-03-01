import React, { useContext, useEffect, useState } from 'react'
import './CountryDetail.css'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

export default function CountryDetail() {
  const [isDark] = useContext(ThemeContext)
  const params = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const countryName = params.country

  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)

  function updateCountryData(data) {
    setCountryData({
      name: data.name?.common,
      nativeName: data.name?.nativeName
        ? Object.values(data.name.nativeName)[0]?.common
        : '',
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital || [],
      flag: data.flags?.svg,
      tld: data.tld?.join(', ') || '',
      languages: data.languages
        ? Object.values(data.languages).join(', ')
        : '',
      currencies: data.currencies
        ? Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', ')
        : '',
      borders: [],
    })

    const borders = data.borders || []

    Promise.all(
      borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
      })
    ).then((borders) => {
      setCountryData((prevState) => ({ ...prevState, borders }))
    })
  }

  useEffect(() => {
    setCountryData(null)
    setNotFound(false)

    if (state) {
      updateCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => {
        if (!res.ok) throw new Error('Not Found')
        return res.json()
      })
      .then(([data]) => {
        updateCountryData(data)
      })
      .catch((err) => {
        console.log(err)
        setNotFound(true)
      })
  }, [countryName])

  if (notFound) {
    return <div>Country Not Found</div>
  }

  return countryData === null ? (
    'loading...'
  ) : (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>

        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />

          <div className="details-text-container">
            <h1>{countryData.name}</h1>

            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
              </p>

              <p>
                <b>
                  Population:{' '}
                  {countryData.population?.toLocaleString('en-IN')}
                </b>
              </p>

              <p>
                <b>Region: {countryData.region}</b>
              </p>

              <p>
                <b>Sub Region: {countryData.subregion}</b>
              </p>

              <p>
                <b>Capital: {countryData.capital.join(', ')}</b>
              </p>

              <p>
                <b>Top Level Domain: {countryData.tld}</b>
              </p>

              <p>
                <b>Currencies: {countryData.currencies}</b>
              </p>

              <p>
                <b>Languages: {countryData.languages}</b>
              </p>
            </div>

            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}