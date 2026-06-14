import { useState } from 'react'

const ButtonCounter = ({setValue, valueInitial, valueAdd, buttonTitle}) => {
  return(
  <button onClick={() => setValue(valueInitial + valueAdd)}>{buttonTitle}</button>
    )
}

const GiveFeedback = ({useStates}) => {
  const buttons = useStates.map(
    useState => <ButtonCounter key={"change"+useState["key"]} setValue={useState["setValue"]} valueInitial={useState["value"]} valueAdd={1} buttonTitle={useState["name"]} />
  )

  return (
    <>
      <h1>give feedback</h1>
      {buttons}
    </>
  )
}

const ShowFeedback = ({useStates}) => {
  const counts = useStates.map(
    useState => <p key={"show"+useState["key"]}>{useState["name"]} {useState["value"]}</p>
  )
  const total = useStates.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
  const positive = useStates.filter((useState) => useState.name == "good")[0]["value"]
  const negative = useStates.filter((useState) => useState.name == "bad")[0]["value"]
  const relPositive = total ? positive / total : 0
  const average = total ? (positive - negative)/total : 0

    return (
    <>
     {counts}
     <p>
        all: {total}
      </p>
      <p>
        average: {Math.round(average * 100) / 100}
      </p>
      <p>
        positive: {Math.round(relPositive * 1000) / 10}%
     </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const useStates = [
    {key: 0, name: "good", value: good, setValue: setGood},
    {key: 1, name: "neutral", value: neutral, setValue: setNeutral},
    {key: 2, name: "bad", value: bad, setValue: setBad}
  ]

  return (
    <div>
      <GiveFeedback useStates={useStates}/>
      <ShowFeedback useStates={useStates}/>
    </div>
  )
}

export default App