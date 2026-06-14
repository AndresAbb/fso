const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(2)
  console.log(props.part)
  console.log(props.exercises)
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
  
  const RenderedParts = () =>
    parts.map(part => {
        return (<Part part={part.name} exercises={part.exercises} />)
    })

  return (
    <div>
      <RenderedParts />
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
              exercises: 10
            },
            {
              name: 'Using props to pass data',
              exercises: 7
            },
            {
              name: 'State of a component',
              exercises: 14
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