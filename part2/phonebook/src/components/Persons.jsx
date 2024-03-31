/* eslint-disable react/prop-types */
function Persons({ personsToShow, handleDeletePerson }) {
  return (
    <div>
      {personsToShow.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{' '}
          <button
            onClick={() =>
              handleDeletePerson({ id: person.id, name: person.name })
            }
          >
            delete
          </button>
        </p>
      ))}
    </div>
  )
}

export default Persons
