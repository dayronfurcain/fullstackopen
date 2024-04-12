import axios from 'axios'
const baseUrl = '/api/persons'

const getPersons = () => {
  return axios.get(baseUrl).then((response) => response.data)
}

const createPerson = ({ newPerson }) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data)
}

const deletePerson = ({ id }) => {
  return axios.delete(`${baseUrl}/${id}`).then((reponse) => reponse.data)
}

const updatePerson = ({ id, newPerson }) => {
  return axios
    .put(`${baseUrl}/${id}`, newPerson)
    .then((response) => response.data)
}

export { getPersons, createPerson, deletePerson, updatePerson }
