/* eslint-disable react/prop-types */
function Part({ part }) {
  return (
    <div key={part.id}>
      {part.name} {part.exercises}
    </div>
  )
}

export default Part
