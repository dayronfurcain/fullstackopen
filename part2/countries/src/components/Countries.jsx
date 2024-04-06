import { useState, useId, useEffect } from 'react'
import DisplayOfCountries from './DisplayOfCountries'
import CountryForm from './CountryForm'

import { getCountries } from '../services/countries'

function Countries() {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewContry] = useState('')
  const id = useId()

  useEffect(() => {
    getCountries().then((countries) => setCountries(countries))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  const handleCountryChange = (event) => {
    setNewContry(event.target.value)
  }

  const handleClick = (country) => {
    setNewContry(country)
  }

  const filteredCountries = countries.filter((country) => {
    const { name } = country
    const { common } = name
    return common.toLowerCase().includes(newCountry.toLowerCase())
  })

  return (
    <main>
      <CountryForm
        handleSubmit={handleSubmit}
        id={id}
        newCountry={newCountry}
        handleCountryChange={handleCountryChange}
      />
      <DisplayOfCountries
        country={newCountry}
        countries={filteredCountries}
        handleClick={handleClick}
      />
    </main>
  )
}

export default Countries
