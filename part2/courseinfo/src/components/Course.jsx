/* eslint-disable react/prop-types */
import Content from './Content'

function Course({ course }) {
  const { parts, name } = course

  return (
    <div>
      <h1>{name}</h1>
      <Content parts={parts} />
    </div>
  )
}

export default Course
