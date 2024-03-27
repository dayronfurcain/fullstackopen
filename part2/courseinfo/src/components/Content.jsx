/* eslint-disable react/prop-types */

import Part from './Part'

function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <strong>
        total of {parts.reduce((acc, part) => acc + part.exercises, 0)}{' '}
        exercises
      </strong>
    </div>
  )
}

export default Content
