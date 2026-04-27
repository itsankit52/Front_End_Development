<<<<<<< HEAD

import { useState } from 'react' // for search index
import Header from './components/Header' //header
import SearchBar from './components/SearchBar' // search bar
import SelectMenu from './components/SelectMenu' // select menu
import CountriesList from './components/CountriesList' // list of country

import './App.css'

const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  )
}

export default App
=======

import { useState } from 'react' // for search index
import Header from './components/Header' //header
import SearchBar from './components/SearchBar' // search bar
import SelectMenu from './components/SelectMenu' // select menu
import CountriesList from './components/CountriesList' // list of country

import './App.css'

const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  )
}

export default App
>>>>>>> 4b0b7a63b307c54ea863a8d1d5c2251f719f3ac8
