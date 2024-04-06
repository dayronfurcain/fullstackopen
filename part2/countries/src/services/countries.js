import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

export const getCountries = async () => {
  try {
    const response = await axios.get(
      'https://studies.cs.helsinki.fi/restcountries/api/all',
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export const getWheatherOfCapital = async ({ latitude, longitude }) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
    )
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
