/* eslint-disable react/prop-types */

function Filter({ nameToShow, handlePersonFilterChange }) {
  return (
    <div>
      <span>filter shown with</span>
      <input onChange={handlePersonFilterChange} value={nameToShow} />
    </div>
  )
}

export default Filter
