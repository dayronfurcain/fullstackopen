import { useState, useEffect } from 'react'
import { getWheatherOfCapital } from '../services/countries'

function CountryInfo({ country }) {
  const [temperature, setTemperatura] = useState()
  const [wind, setWind] = useState()
  const [icon, setIcon] = useState()

  useEffect(() => {
    const {
      capitalInfo: { latlng },
    } = country

    const [latitude, longitude] = latlng

    getWheatherOfCapital({ latitude, longitude }).then((response) => {
      setTemperatura(response.main.temp)
      setWind(response.wind.speed)
      setIcon(response.weather[0].icon)
    })
  }, [country])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <span>capital: {country.capital}</span>
        <br />
        <span>area: {country.area}</span>
        <br />
      </div>
      <h3>languages: </h3>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Wheather in {country.capital}</h2>
      <p>temperature {temperature} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt='image'
      />
      <p>wind {wind} m/s</p>
    </div>
  )
}

export default CountryInfo
