import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import {
  createPerson,
  deletePerson,
  getPersons,
  updatePerson,
} from './services/persons'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [nameToShow, setNameToShow] = useState('')

  useEffect(() => {
    getPersons().then((persons) => {
      setPersons(persons)
    })
  }, [])

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (!newName) return
    if (persons.some((person) => person.name === newName)) {
      const confirm = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one ?`,
      )

      if (confirm) {
        const person = persons.find((person) => person.name === newName)
        const newPerson = { ...person, number: newPhoneNumber }
        const { id } = newPerson

        updatePerson({ id, newPerson }).then((newPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== newPerson.id ? person : newPerson,
            ),
          )
        })
      }

      setNewName('')
      setNewPhoneNumber('')
      return
    }

    const newPerson = {
      name: newName,
      number: newPhoneNumber,
    }

    createPerson({ newPerson }).then((person) => {
      setPersons(persons.concat(person))
      setNewName('')
      setNewPhoneNumber('')
    })
  }

  const handleDeletePerson = ({ id, name }) => {
    const confirm = window.confirm(`Delete ${name} ?`)
    if (confirm) {
      deletePerson({ id }).then((person) => {
        const { id } = person
        setPersons(persons.filter((person) => person.id !== id))
      })
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handlePersonFilterChange = (event) => {
    const name = event.target.value
    setNameToShow(name)
    if (persons.some((person) => person.name.toLowerCase().includes(name))) {
      setShowAll(false)
    } else {
      setShowAll(true)
    }
  }

  const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(nameToShow))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        nameToShow={nameToShow}
        handlePersonFilterChange={handlePersonFilterChange}
      />
      <h3>add a new</h3>
      <PersonForm
        handleAddPerson={handleAddPerson}
        handlePersonChange={handlePersonChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        newName={newName}
        newPhoneNumber={newPhoneNumber}
      />
      <h3>Numbers</h3>
      <Persons
        personsToShow={personsToShow}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App
