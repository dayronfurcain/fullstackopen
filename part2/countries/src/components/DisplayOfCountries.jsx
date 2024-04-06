import CountryInfo from './CountryInfo'
import ListOfCountries from './ListOfCountries'

function DisplayOfCountries({ country, countries, handleClick }) {
  if (!country || !countries.length) return null

  if (countries.length > 10) {
    return (
      <div>
        {countries.length > 10
          ? 'Too many matches, specify another filter'
          : 'Paises'}
      </div>
    )
  }

  if (countries.length <= 10 && countries.length > 1) {
    return <ListOfCountries countries={countries} handleClick={handleClick} />
  }

  return <CountryInfo country={countries[0]} />
}

export default DisplayOfCountries
