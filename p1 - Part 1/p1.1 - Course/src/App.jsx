const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {

  const parts = props.parts
  console.log(1)
  console.log(parts)
  
  const renderedParts =
    parts.map(part => {
        return (<Part key={part.key} part={part.name} exercises={part.exercises} />)
    })

  return (
    <div>
      {renderedParts}
    </div>
  )

}

const Total = (props) => {

  const parts = props.parts
  const total = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

  return (
  <>
      <p>{total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
              name: 'Fundamentals of React',
              exercises: 10,
              key: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              key: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              key: 3
            }
          ]}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/> 
    </div>
  )
}

export default App