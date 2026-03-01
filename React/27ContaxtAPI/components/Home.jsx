import { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { ThemeContext } from '../contexts/ThemeContext'
import { useWindowSize } from '../custom'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useContext(ThemeContext)
  const { width } = useWindowSize()

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>

      <h1 style={{ textAlign: "center" }}>
        Width is: {width}
      </h1>

      <CountriesList query={query} />
    </main>
  )
}