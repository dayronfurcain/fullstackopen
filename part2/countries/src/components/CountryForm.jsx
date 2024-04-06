function CountryForm({ handleSubmit, id, newCountry, handleCountryChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>find countries</label>
      <input
        type='text'
        id={id}
        value={newCountry}
        onChange={handleCountryChange}
      />
    </form>
  )
}

export default CountryForm
