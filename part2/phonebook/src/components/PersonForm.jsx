/* eslint-disable react/prop-types */

function PersonForm({
  handleAddPerson,
  handlePersonChange,
  newName,
  handlePhoneNumberChange,
  newPhoneNumber,
}) {
  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input onChange={handlePersonChange} value={newName} />
      </div>
      <div>
        number:{' '}
        <input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm
