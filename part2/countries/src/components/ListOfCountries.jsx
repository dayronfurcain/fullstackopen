function ListOfCountries({ countries, handleClick }) {
  return (
    <div>
      {countries.map((country) => {
        const {
          name: { common },
        } = country
        return (
          <div key={common}>
            <span>{common}</span>
            <button onClick={() => handleClick(common.toLowerCase())}>
              show
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ListOfCountries
